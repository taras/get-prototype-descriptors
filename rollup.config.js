const babel = require("rollup-plugin-babel");
const filesize = require("rollup-plugin-filesize");
const pkg = require("./package.json");

const globals = {
  "invariant": "invariant"
};

let external = Object.keys(globals);

module.exports = {
  input: "src/index.js",
  external,  
  output: [
    {
      name: "get-prototype-descriptors",
      file: pkg.browser,
      globals,
      format: "umd",
      sourcemap: true
    },
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  plugins: [
    babel({
      babelrc: false,
      comments: false,
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false
          }
        ]
      ]
    }),
    filesize()
  ]
};