
// // activity 1

// const person = {
//     name: "Asima",
   
//     sayHi(){
//         return console.log(`Hello my name is ${this.name}`)
//     }
// }
// person.sayHi();

// // activity 2:

// const pet = {
//     name:  "Noodle",
//     animal: "Python",
//     age: "1",
//     colour: "Green ",

//     eat(){
//         return console.log(`The ${this.animal} named ${this.name} is eating.`)
//     }, 
//     drink(){
//         return console.log(`The ${this.animal} named ${this.name} is drinking.`)
//     }}
//     pet.eat();
//     pet.drink();


// // Activity 3:

// drinksOrder = [
//     "Espresso",
//     "Americano",
//     "Latte"
// ]
// foodOrder = [
//     "Biscuit",
//     "Cake"
// ]
// coffeeShop = {
//     drinks : [
//         "Espresso", 
//         "Cappuccino", 
//         "Latte" ,
//         "Americano", 
//         "FlatWhite", 
//         "Tea"
//     ],
//     drinkPrices : [
//         1.50,
//         4,
//         3,
//         3.50,
//         2.50
//     ],
//     food: [
//         "Sandwich",
//         "Salad" ,
//         "Snack" ,
//         "Biscuit" ,
//         "Cake"
//     ],
//     foodPrices: [
//         4,
//         4.58,
//         3,
//         1,
//         3.50
//     ],
//     drinksOrdered() {
//         drinksBill = []
//         for (let i = 0 ; i < drinksOrder.length ; i++) {
//             for (let j = 0; j < coffeeShop.drinks.length; j++) {
//                 if (drinksOrder[i] == coffeeShop.drinks[j]){
//                     drinksBill.push(j)
//                 }
                
//             }
//         }
    
//         console.log('------------------')
//         console.log(`Your drinks order is:\n`)
//         sum = 0
//         for (l = 0; l < drinksBill.length; l++) {
//             console.log(`${coffeeShop.drinks[drinksBill[l]]} ${coffeeShop.drinkPrices[drinksBill[l]]}`)
//             sum += coffeeShop.drinkPrices[drinksBill[l]]
//         }
//         console.log('------------------')
//         console.log(`Total: £ ${sum} \n`)
//         return(sum)
//         },
    
//     foodOrdered() {
//         foodBill = []
//         for (let i = 0 ; i < foodOrder.length ; i++) {
//             for (let j = 0; j < coffeeShop.food.length; j++) {
//                 if (foodOrder[i] == coffeeShop.food[j]){
//                     foodBill.push(j)
//                 }
                
//             }
//         }
    
//         console.log('------------------')
//         console.log(`Hi, Welcome to Costa. Your food order today is:\n`)
//         sum = 0
//         for (l = 0; l < foodBill.length; l++) {
//             console.log(`${coffeeShop.food[foodBill[l]]} ${coffeeShop.foodPrices[foodBill[l]]}`)
//             sum += coffeeShop.foodPrices[foodBill[l]]
//         }
//         console.log('------------------')
//         console.log(`Total: £ ${sum} \n`)
//         return(sum)
//     }
    
// }
// // total
// let foodSum = coffeeShop.foodOrdered()
// let drinkSum = coffeeShop.drinksOrdered()
// console.log(`Grand Total: £ ${foodSum + drinkSum}`)


// ....did need to look at completed answers. will try to recreate this in own time with a similar idea.