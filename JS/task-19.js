// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
    const propValues = [];
    for (const product of products) {
        if (Object.keys(product).includes(propName)) {
            propValues.push(product[propName]) 
        }
    }
          return propValues

  // Пиши код выше этой строки
}

console.log(getAllPropValues('name'));  // возвращает ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues('quantity'));  //Вызов  возвращает [4, 3, 7, 9]
console.log(getAllPropValues('price'));  //Вызов  возвращает [1300, 2700, 400, 1200]
console.log(getAllPropValues('category'));  // возвращает []
