// config.js
const esbuild = require('esbuild');
const { dependencies, devDependencies, peerDependencies } = require('./package.json');

// Combine all dependencies to exclude from the bundle
const externals = [
  ...Object.keys(dependencies || {}),
  ...Object.keys(devDependencies || {}),
  ...Object.keys(peerDependencies || {}),
  "../linkedin-bench/node_modules/@ultima-1/rusthelper/rustacean.win32-x64-msvc.node"
];

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  //outfile: './dist/bundle.main.js',
  outfile: 'bundle.main.js',
  external: externals,
  platform: 'node', // Use 'browser' if targeting browser
  sourcemap: false, // Generate source maps
  minify: true,
  format: 'cjs', // CommonJS format; change to 'esm' for ES module output
}).catch(() => process.exit(1));