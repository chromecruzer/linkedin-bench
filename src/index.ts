// import { serve } from '@hono/node-server'
// import { Hono } from 'hono'
// import {parseCsv} from '@ultima-1/rusthelpers/index.js'
// import {parse_csv} from '@ultima-1/wasmhelpers/pkg/hello_wasm.js'

// const app = new Hono()

// parseCsv('../IOL_Download 1 - test5-X.cs')

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

// serve({
//   fetch: app.fetch,
//   port: 3000
// }, (info) => {
//   console.log(`Server is running on http://localhost:${info.port}`)
// })

// import { parseCsv } from '@ultima-1/rusthelper/index.js';
// import { parse_csv } from '@ultima-1/wasmhelpers/pkg/hello_wasm.js';
// import csv from 'csv-parser';
// import fs from 'node:fs';
// import path from 'node:path';

// const orgFile = path.join(process.cwd(), 'IOL_Download 1 - test5-X.csv');
// const file = fs.readFileSync(orgFile, 'utf-8');

// // WASM Benchmark
// // const startWasm = performance.now();
// // console.log(parse_csv(file));
// // const endWasm = performance.now();
// // console.log(`WASM parse time: ${endWasm - startWasm} ms`);

// // RUST Benchmark
// // const startRust = performance.now();
// // console.log(parseCsv(file));
// // const endRust = performance.now();
// // console.log(`Rust parse time: ${endRust - startRust} ms`);

// // Node.js Stream Benchmark
// const results: any[] = [];
// const startNode = performance.now();

// fs.createReadStream(orgFile)
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     const endNode = performance.now();
//     console.log(results);
//     console.log(`Node.js parse time: ${endNode - startNode} ms`);
//   });


////////////////////////////////

import { parseCsv } from '@ultima-1/rusthelper/index.js';
import { parse_csv } from '@ultima-1/wasmhelper/pkg/hello_wasm.js';
import csv from 'csv-parser';
import fs from 'node:fs';
import path from 'node:path';

const orgFile = path.join(process.cwd(), 'IOL_Download 1 - test5-X.csv');
const file = fs.readFileSync(orgFile, 'utf-8');

let wasmTime: number | null = null;
let rustTime: number | null = null;
let nodeTime: number | null = null;

// WASM Benchmark
const startWasm = performance.now();
parse_csv(file);
const endWasm = performance.now();
wasmTime = endWasm - startWasm;
console.log(`WASM-PLUGIN=`, wasmTime) 

// RUST Benchmark
const startRust = performance.now();
parseCsv(file);
const endRust = performance.now();
rustTime = endRust - startRust;
console.log(`RUST-PLUGIN=`, rustTime)

// Node.js Stream Benchmark
const results: any[] = [];
const startNode = performance.now();

fs.createReadStream(orgFile)
  .pipe(csv())
  .on('data', (data) => results.push(data)) 
  .on('end', () => {
    const endNode = performance.now();
    nodeTime = endNode - startNode;
    console.log(`Node.js=`,nodeTime) 
  });

// Now you have `wasmTime`, `rustTime`, and `nodeTime` stored as variables.
