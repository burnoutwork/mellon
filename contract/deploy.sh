echo "Build contract..."
cargo build-wasm

echo "Deploy contract..."
near dev-deploy --wasmFile ./target/wasm32-unknown-unknown/release/contract.wasm

CONTRACT_NAME=$(cat neardev/dev-account.env)
sed -e 's/CONTRACT_NAME=.*/'"$CONTRACT_NAME"'/g' ../frontend/.env > \
  ../frontend/.env.new && mv ../frontend/.env.new ../frontend/.env
