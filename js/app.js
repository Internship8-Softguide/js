// console.log("first line");

// let x = undefined;

// try {
//     console.log("first line in try")
//     x();
//     console.log("normal working")
// } catch (error) {
//     console.log(error)
// } finally {
//     console.log("work in finally")
// }




// console.log("lest code")


// const pro = new Promise((resolve, reject) => {
//     let x = 0;
//     if (x === 0) {
//         resolve("resulver this function")
//     } else {
//         reject("error occuring")
//     }
// })

// pro.then((val) => {
//     console.log(val)
//     return "give to second .then"
// }).then((val) => {
//     console.log(val)
//     return "give to third .then"
// }).then((val) => console.log(val))


const pro = (x, y) => {
    return new Promise((resolve, reject) => {
        try {
            x();
            resolve(x + y)
        } catch (error) {
            reject(error)
        }
    })
}

let value = pro(10, 20);

value.then((val) => console.log(val)).catch((error) => console.log(error))