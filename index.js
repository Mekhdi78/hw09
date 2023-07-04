// task 1

function min(a, b) {
    if (typeof a === 'number') {
        return Math.min(a, b);
    } else if (Array.isArray(a)) {
        return Math.min(...a);
    } else if (typeof a === 'object' && typeof b === 'object') {
        let obj1 = a
        let obj2 = b
        return Math.min(obj1.a, obj2.a, obj1.b, obj2.b);
    } else if (typeof a === 'object') {
        let arr = Object.values(a);
        return Math.min(...arr);
    }
}

console.log(
    min(1, 2),
    min([1, 2]),
    min({ a: 1, b: 2 }),
    min({ a: 10, b: 12 }, { a: 3, b: 22 })
);

//task 2

function myCustomSort(arr) { 
    let bubbleSort = [] 
    while (arr.length > 0) { // будет выполняться пока arr не станет пустым
        let start = 0 // начальный индекс 
        for (let i = 1; i < arr.length; i++) { // интерация от 1 до конца arr
            if (arr[i] < arr[start]) { // сравнение элементов
                start = i 
            }
        }
        bubbleSort.push(arr[start])  
        arr.splice(start, 1) // удаление из исходного массива чтобы не дублировались
    }
    return bubbleSort // возвращяет отср массив 
}
console.log(myCustomSort([2, 1, 5, 1, 4, 6, 0])); 
