

let arr = [1, 2]

let evenArr = arr.filter((val) => val % 2 === 0)
let oddArr = arr.filter((val) => val % 2 !== 0)
let oddArr2 = arr.forEach((val) => val % 2 !== 0)

let find5 = arr.find((val) => val === 5)

let doubleArr = arr.map((val) => val * 2)

// console.log(evenArr)
// console.log(oddArr)
// console.log(oddArr2)
// console.log(find5)
// console.log(doubleArr)

// for (let val of arr) {
//     console.log(val)
// }

for (let key in arr) {
    console.log(key)
}

console.log(typeof arr)




// let arr2 = [50, 60, 70]

// let mergeArr = [[1, 2, 3, 4], ["one", "two", "three"]]


// mergeArr.forEach((first) => {
//     // first.forEach((val) => console.log(val))
// })

// arr.forEach((val) => mergeArr.push(val))
// arr2.forEach((val) => mergeArr.push(val))




// for (let i = 0; i < 10; i++) {
//     // console.log(i)
// }


// arr.forEach((val, index) => {
//     if (typeof val !== "number") {
//         arr[index] = 0
//     }
// })


// console.log(arr)
// console.log(arr2)
// console.log(mergeArr)