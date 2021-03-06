// Используя операцию rest дополни код функции add() так,
// чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// Пиши код ниже этой строки
function add(...args) {
  // Пиши код выше этой строки
    let total = 0
    for (const arg of args) {
        total += arg
    }
 return total

}


console.log(add(15, 27)); // возвращает 42.
console.log(add(12, 4, 11, 48)); // возвращает 75.
console.log(add(32, 6, 13, 19, 8)); // возвращает 78.
console.log(add(74, 11, 62, 46, 12, 36)); // возвращает 241.
