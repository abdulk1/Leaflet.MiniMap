import copy from 'rollup-plugin-copy';
import clean from 'postcss-clean';
import buble from '@rollup/plugin-buble';
import normalize from 'postcss-normalize';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/minimap.css',
    output: {
      file: 'dist/minimap.min.css',
      format: 'esm'
    },
    plugins: [
      postcss({
        sourceMap: false,
        extract: true,
        plugins: [normalize, clean]
      })
    ]
  },
  {
    input: 'src/minimap.js',
    output: {
      file: 'dist/minimap.min.js',
      format: 'esm'
    },
    plugins: [
      buble(),
      terser(),
      copy({
        targets: [
          { src: 'src/index.d.ts', dest: 'dist' },
          { src: 'src/images', dest: 'dist' },
          { src: 'src/minimap.js', dest: 'dist' },
          { src: 'src/minimap.css', dest: 'dist' }
        ]
      })
    ]
  }
];
