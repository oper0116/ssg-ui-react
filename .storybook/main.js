const path = require('path');
const fs = require('fs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }
    currDir = dir;
  }
}

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  typescript: {
    // also valid 'react-docgen-typescript' | false
    reactDocgen: 'react-docgen',
  },
  refs: {
    '@chakra-ui/react': { disable: true },
  },
  webpackFinal: async (config) => {
    // Don't use Storybook's default SVG Configuration
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString().includes('svg')) {
        const test = rule.test.toString().replace('svg|', '').replace(/\//g, '');
        return { ...rule, test: new RegExp(test) };
      } else {
        return rule;
      }
    });

    // use @svgr/webpack loader for svg
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            ref: true,
            dimensions: false,
            replaceAttrValues: { '#000': 'currentColor' },
          },
        },
      ],
    });

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ];

    return {
      ...config,
      resolve: {
        ...config.resolve,
        // 스토리북에서 chakra-ui 테마값 못읽는 이슈 해결
        alias: {
          ...config.resolve.alias,
          'emotion-theming': getPackageDir('@emotion/react'),
          '@emotion/core': getPackageDir('@emotion/react'),
          'emotion-theming': getPackageDir('@emotion/react'),
          // mocking https://minoo.medium.com/storybook%EC%97%90%EC%84%9C-nextjs-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%A0-%EB%95%8C-85ec0b3662af
          'next/router': require.resolve('../__mocks__/next/router.tsx'),
          'next/link': require.resolve('../__mocks__/next/link.tsx'),
          'next/image': require.resolve('../__mocks__/next/image.tsx'),
        },
      },
    };
  },
};
