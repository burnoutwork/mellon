echo "Build contract..."
cargo build-wasm

echo "Deploy contract..."

CONTRACT_NAME=$(cat neardev/dev-account.env)
sed -e 's/CONTRACT_NAME=.*/'"$CONTRACT_NAME"'/g' ../frontend/.env > \
  ../frontend/.env.new && mv ../frontend/.env.new ../frontend/.env

