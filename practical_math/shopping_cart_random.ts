// Roll a random number between min and max with optional float flag
const roll = (min: number, max: number, floatFlag: boolean = false): number => {
  let roll = Math.random() * (max - min) + min
  return floatFlag ? roll : Math.floor(roll)
}

const fruits: string[] = [
  '🍇',
  '🍈',
  '🍉',
  '🍊',
  '🍋',
  '🍌',
  '🍍',
  '🥭',
  '🍎',
  '🍏',
  '🍐',
  '🍑',
  '🍒',
  '🍓',
  '🥝',
  '🍅',
  '🥥',
  '🥑',
  '🍆',
  '🥔',
  '🥕',
  '🌽',
  '🌶',
  '🥒',
  '🥬',
  '🥦',
]

// Random shopping cart products from fruits array
const shoppingCartProducts = [...Array(roll(1, 10))].map((_, i) => ({
  id: i,
  title: fruits[roll(0, fruits.length)],
  price: roll(1, 10, true).toFixed(2),
  quantity: roll(1, 8),
}))

// Calculate the Cart total using reduce
const cartTotal = shoppingCartProducts
  .reduce((acc, product) => {
    return acc + parseFloat(product.price) * product.quantity
  }, 0)
  .toFixed(2)

// Get Tax rate between 3% and 10% - rounding to the nearest 10th
const taxRate = roll(3, 10, true).toFixed(1)

// Calculate Taxed total
const taxed = (total: number, taxRate: number): number => {
  return total + total * (taxRate / 100)
}
// Apply tax to cart total
const taxedTotal = taxed(parseFloat(cartTotal), parseFloat(taxRate)).toFixed(2)
