// const sayHello = (name) => {
//   console.log('Hi ' + name);
// }

// function sayHello(name) {
//   console.log('Hi ' + name);
// }

//with 2 arguments
// const sayHello = (hello, name) => {
//   console.log(`${hello} ${name}`);
// }

// with no arguments
// const sayHello = () => {
//   const hello ='Hi';
//   const name = 'Akshay'
//   console.log(`${hello} ${name}`);
// }

// with returned value
// const sayHello = () => {
//   const hello ='Hi';
//   const name = 'Akshay'
//   //console.log(`${hello} ${name}`);
//   return `${hello} ${name}`
// }

//default argument
const sayHello = (name = 'Akshay') => {
  const hello ='Hi';
  console.log(`${hello} ${name}`);
  return `${hello} ${name}`
}



sayHello();