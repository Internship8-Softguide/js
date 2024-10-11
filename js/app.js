function sayHello(name) {
  console.log("Hello, " + name + "!");
}

 

function combination(x=0, y=0) {
  let result = x + y;
  return result;
}

// sayHello("John");

let result = combination(3,6  );
console.log(result);

const sub = function (x, y) {
  return x - y;
};

// let minus = sub(3, 2);

// console.log(minus);

const multiple = (x, y) => {
  return x * y;
};

// let mult = multiple(2, 2);
// console.log(mult);

const division = (x, y) => x / y;

// let div = division(9, 3);
// console.log(div);

const square = x => x * x;

// let squ = square(4)
// console.log(squ)

const calculate = (x,y,doFunction)=>{
  let result = doFunction(x,y)
  console.log(result)
}
const callingFunciton=()=>alert("your clicking")
document.body.addEventListener("click",callingFunciton)
// calculate(5,4,square)


// (()=>{
//   console.log("hello from my page")
// })()


