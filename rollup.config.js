import * as path from 'path';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];

// babel-preset-react-app를 사용한다면 BABEL_ENV를 필수로 설정해야함.
process.env.BABEL_ENV = 'production';

const onwarn = (warning, rollupWarn) => {
  const ignoredWarnings = [
    {
      ignoredCode: 'CIRCULAR_DEPENDENCY',
      ignoredPath: 'node_modules/next/dist',
    },
  ];

  // only show warning when code and path don't match
  // anything in above list of ignored warnings
  if (
    !ignoredWarnings.some(
      ({ ignoredCode, ignoredPath }) =>
        warning.code === ignoredCode && warning.importer.includes(path.normalize(ignoredPath)),
    )
  ) {
    rollupWarn(warning);
  }
};

function setUpRollup({ input, output }) {
  return {
    input,
    output,
    watch: {
      include: 'src/**',
      exclude: '.yarn/**',
    },
    plugins: [
      peerDepsExternal(), // peerDependency를 번들링 결과물에서 제외
      json(),
      resolve({ extensions }), // node_modules에서 모듈 불러올 수 있게 해줌, ts/tsx 불러올 수  있게 해줌.
      commonjs({
        include: /node_modules/,
      }),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
      postcss({
        extract: true,
        modules: true,
        sourceMap: true,
        use: ['sass'],
      }),
      svgr({
        ref: true,
        dimensions: false,
        replaceAttrValues: { '#000': 'currentColor' },
        svgoConfig: {
          plugins: [{ removeXMLNS: true }],
        },
      }),
    ],
    external: ['react', 'react-dom', 'next'],
    onwarn,
  };
}

export default [
  setUpRollup({
    input: 'index.ts',
    output: {
      file: pkg.main,
      sourcemap: true,
      format: 'cjs',
    },
  }),
  setUpRollup({
    input: 'index.ts',
    output: {
      file: pkg.module,
      sourcemap: true,
      format: 'esm',
    },
  }),
];
