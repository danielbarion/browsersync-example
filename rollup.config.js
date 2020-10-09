import { aliasConfig, copyConfig, appBundle } from './config/rollup'
import { string } from 'rollup-plugin-string'
import { version } from './package.json'
import alias from '@rollup/plugin-alias'
import babel from 'rollup-plugin-babel'
import browsersync from 'rollup-plugin-browsersync'
import copy from 'rollup-plugin-copy'
import html from 'rollup-plugin-html-scaffold'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: ["src/index.js"],
    output: {
      file: `build/${appBundle}`,
      format: "umd",
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'classnames': 'classNames',
      }
    },
    plugins: [
      progress(),
      alias({
        resolve: [".css", ".svg", "/index.js"],
        entries: aliasConfig
      }),
      html({
        input: "./public/index.html",
        output: "./public/index.html",
        template: { appBundle }
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
        "process.app.version": version,
        "process.app.enviroment": "localhost front-end"
      }),
      string({ include: "**/*.html" }),
      json(),
      postcss({
        extract: false,
        autoModules: true,
        include: '**/*.css',
        extensions: ['.css'],
      }),
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
      copy(copyConfig),
      browsersync({
        server: "build",
        watch: true,
        port: 3000,
        ui: {
          port: 3001
        }
      })
    ]
  }
];
