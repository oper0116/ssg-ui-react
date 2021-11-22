import * as path from 'path';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

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
      include: '*',
      exclude: 'node_modules/**',
    },
    plugins: [
      peerDepsExternal(),
      json(),
      nodeResolve(),
      commonjs({
        include: /node_modules/,
      }),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        extract: true,
        modules: true,
        sourceMap: true,
        use: ['sass'],
      }),
      svgr(),
      // svgr({
      //   ref: true,
      //   dimensions: false,
      //   replaceAttrValues: { '#000': 'currentColor' },
      //   svgoConfig: {
      //     plugins: [{ removeXMLNS: true }],
      //   },
      // }),
    ],
    external: ['react', 'react-dom'],
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
