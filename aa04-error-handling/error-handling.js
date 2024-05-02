// 1.
function sum(array) {
  try {
    if(!Array.isArray(array)) throw new Error();
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
} catch (error) {
  console.log("Type Error")
}
}

let res = sum(null);
console.log(res);
function sayName(name){
  if(typeof name !== "string") throw new TypeError("Invalid name! Must be a String!")

  console.log(name)
}
// 2.
// tests
try {
sayName("Alex");
} catch (error) {
  console.log(error)
}
try{
sayName(1)
} catch (error) {
  console.log(error)
}


// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch (error) {
 console.log("Hello World!")
}

