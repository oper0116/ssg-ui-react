import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];

process.env.BABEL_ENV = 'production';

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
      resolve({ extensions }),
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