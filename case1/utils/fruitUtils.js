// case1/utils/fruitUtils.js

// 1. Mendapatkan semua nama buah
function getAllFruitNames(fruits) {
    return fruits.map(fruit => fruit.fruitName);
  }
  
  // 2. Mengelompokkan buah berdasarkan tipe
  function groupFruitsByType(fruits) {
    return fruits.reduce((groups, fruit) => {
      const type = fruit.fruitType;
      if (!groups[type]) groups[type] = [];
      groups[type].push(fruit);
      return groups;
    }, {});
  }
  
  // 3. Menghitung total stok per tipe
  function getTotalStockByType(fruits) {
    const grouped = groupFruitsByType(fruits);
    const result = {};
    for (const type in grouped) {
      result[type] = grouped[type].reduce((sum, fruit) => sum + fruit.stock, 0);
    }
    return result;
  }
  
  // 4. Analisa masalah data
  function analyzeDataIssues(fruits) {
    // Duplikasi ID
    const idCounts = {};
    fruits.forEach(fruit => {
      idCounts[fruit.fruitId] = (idCounts[fruit.fruitId] || 0) + 1;
    });
    const duplicateIds = Object.entries(idCounts)
      .filter(([id, count]) => count > 1)
      .map(([id]) => id);
  
    // Duplikasi nama case-insensitive
    const nameCounts = {};
    fruits.forEach(fruit => {
      const lowerName = fruit.fruitName.toLowerCase();
      if (!nameCounts[lowerName]) nameCounts[lowerName] = [];
      nameCounts[lowerName].push(fruit.fruitName);
    });
    const caseInsensitiveDuplicates = Object.entries(nameCounts)
      .filter(([name, variants]) => variants.length > 1)
      .map(([name, variants]) => ({
        name,
        variants: [...new Set(variants)]
      }));
  
    return [
      "Ada beberapa masalah pada data:",
      duplicateIds.length > 0 ? `- Terdapat duplikasi fruitId: ${duplicateIds.join(', ')}` : null,
      caseInsensitiveDuplicates.length > 0 ?
        `- Ada nama buah yang sama tapi penulisannya berbeda (kapitalisasi): ${caseInsensitiveDuplicates.map(d => `${d.name} (${d.variants.join(', ')})`).join('; ')}` : null,
      "- Sebaiknya fruitId digunakan sebagai identifier unik.",
      "- Perlu standarisasi penulisan nama buah (huruf kecil/besar) untuk konsistensi data."
    ].filter(Boolean);
  }
  
  module.exports = {
    getAllFruitNames,
    groupFruitsByType,
    getTotalStockByType,
    analyzeDataIssues
  };
  