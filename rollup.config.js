import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

const config = {
  input: "src/index.ts",
  output: [
    {
      file: "prayertimes.js",
      name: pkg.name,
      format: "umd",
      exports: "named",
      compact: true
    }
  ],
  plugins: [typescript(), terser()]
};

export default config;
