# 🏆 CSV Parsing Benchmark – Rust vs WASM vs Node.js vs Bun  

## 🚀 Overview  
This benchmark tests the performance of different CSV parsing approaches using a **159MB CSV file**. The goal is to compare the efficiency of:  
- **Rust (NAPI-RS)** 🦀  
- **WASM (wasm-pack)** ⚡  
- **Node.js (csv-parser)** 🟢  
- **Bun (fast JS runtime)** 🔥  

## 📊 Benchmark Results  

| Runtime       | WASM (ms) | Rust (ms) | Node.js (ms) |  
|--------------|----------|----------|-------------|  
| **Node.js (npm run dev)** | 3639  | 2984  | 8392  |  
| **Bun (bun src/index.ts)** | 3847  | 3085  | 10665  |  

✅ **Rust is the fastest (~3 sec)** – optimized memory usage, no GC.  
✅ **WASM is close (~3.6 sec)** – lightweight but slightly slower.  
❌ **Node.js is the slowest (~8-10 sec)** – stream-based processing overhead.  
❌ **Bun was slower than expected (~10.6 sec)** – might need an optimized CSV parser.  

## 🛠 Sources Involved  
**Hybrid fusion of:**  
- 🦀 **Rust (NAPI-RS)**  
- ⚡ **WASM (wasm-pack)**  
- 🟢 **Node.js (csv-parser)**  
- 🔥 **Bun**  
- 🦕 **Deno (Coming Soon)**  
- ⚛️ **React Web Benchmarks (Coming Soon)**  

## 🔥 Next Steps  
🔹 Test multi-threading in Rust for even faster speeds.  
🔹 Compare with **Go (Golang)** performance.  
🔹 Benchmark **Deno vs Bun vs Node.js** on CSV parsing.  
🔹 Add **React-based CSV parsing** for web performance comparison.  

Stay tuned for more benchmarks! 🚀  
