echo "Build contract..."
cargo build-wasm

echo "Deploy contract..."
near dev-deploy --wasmFile ./target/wasm32-unknown-unknown/release/contract.wasm