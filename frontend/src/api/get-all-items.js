async function getAllItems() {
  const response = await fetch('https://arventure-backend-dev-aezx.1.sg-1.fl0.io/items')
  const result = await response.json();
  return result.items;
}

export default getAllItems;