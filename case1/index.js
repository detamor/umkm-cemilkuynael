// case1/index.js

const fruits = require('./data/fruits');
const {
  getAllFruitNames,
  groupFruitsByType,
  getTotalStockByType,
  analyzeDataIssues
} = require('./utils/fruitUtils');

// 1. Nama buah yang dimiliki Andi
console.log('1. Buah yang dimiliki Andi:');
console.log(getAllFruitNames(fruits).join(', '));
console.log('');

// 2. Jumlah wadah dan isi tiap wadah
const grouped = groupFruitsByType(fruits);
console.log('2. Jumlah wadah yang dibutuhkan:', Object.keys(grouped).length);
for (const [type, items] of Object.entries(grouped)) {
  console.log(`   - ${type}: ${items.map(f => f.fruitName).join(', ')}`);
}
console.log('');

// 3. Total stok per wadah
const stock = getTotalStockByType(fruits);
console.log('3. Total stok buah di masing-masing wadah:');
for (const [type, total] of Object.entries(stock)) {
  console.log(`   - ${type}: ${total}`);
}
console.log('');

// 4. Komentar terkait kasus
console.log('4. Komentar terkait kasus:');
analyzeDataIssues(fruits).forEach(comment => console.log(comment));
