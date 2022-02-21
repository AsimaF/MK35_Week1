
// // // const pressGrindBeans = () => {
// // //     console.log("grinding beans for 20 secs");
// // // }

// // let coffeeIsGrinding = false;

// // const pressGrindBeans = () => {
// //     if (coffeeIsGrinding){
// //         console.log("Stopping the grinding");
// //         coffeeIsGrinding = false;
// //     } else {
// //         console.log("Grinding is about the begin");
// //         coffeeIsGrinding = true;
// //     }

// // activity 1:
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)){
//       return 1;
//     } else {
//       return (n* factorial(n-1))
//     }
//   } 
//   console.log(factorial(33))

// activty 2:

// let orderCount = 0; 

// const takeOrder = (topping1, topping2) => {
//     console.log(`1 pizza with ${topping1} with ${topping2}`);
//     orderCount++;

// }
// takeOrder("chicken", "peppers");
// console.log(orderCount)
// takeOrder("pepperoni", "extra cheese")
// console.log(orderCount)

// actvity 3:

// let actual_pin = 1234
// let balance = 1000

// const cash_machine = (entered_pin, amount) =>{
//     if (entered_pin == actual_pin && amount <= balance){
//         balance -= amount;
//         console.log(`You have withdrawn ${amount}, you remaining balance is ${balance}`);
//     }        
//     else if (entered_pin == actual_pin && amount > balance){
//         console.log(`Insufficient funds, you cannot withdraw ${amount}. You only have ${balance} in your account.`);}
//     else {console.log(`Incorrect PIN`);}
// }

// cash_machine(1234, 400)
// cash_machine(1234, 100)
// cash_machine(1234, 100)


