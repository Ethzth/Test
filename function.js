// การเขียน function แบบเก่า
// function sum(a, b){
//     return a + b
// }
// const c = 10
// const d = 30

// const e = sum(c, d)

// console.log(e)


// การเขียน function แบบ arrow function
// sum = (a, b) => a + b //***
// const c = 10
// const d = 30
// const e = sum(c, d)
// console.log(e)


// กรณีของ if เขียนแบบย่อ
// let f = (c === 10) ? 20 : 0 //แบบใหม่ที่ย่อให้สั้นลง
// if (c === 10) { //แบบเก่า
//     f = 20
// }
// console.log(f)


// เอา array มาวน loop แล้วดึงค่ามาแสดงผล
// const fruits = ['apple', 'banana']
// console.log(fruits)

// fruits.forEach(fruit => {
//     console.log(fruit)
// })


// forEach เข้าไปถึง object
// const fruits = [{
//     name: 'apple',
//     price: 20
// },{
//     name: 'banana',
//     price: 15
// },{
//     name: 'orange',
//     price: 30
// }]

// fruits.forEach(fruit => {
//     console.log(fruit.name)
// })


//filter กรองเเงื่อนไขแล้วนำมาแสดงผล
const fruits = [{
    name: 'apple',
    price: 20
},{
    name: 'banana',
    price: 15
},{
    name: 'orange',
    price: 30
}]
const a = fruits.filter(fruit => fruit.name === 'apple')
console.log(a)