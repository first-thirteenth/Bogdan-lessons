// const objectA = {
//     a: 10,
//     b: true
// }
// const copyOfA = objectA
// copyOfA.c = 'abc'
// copyOfA.x = 'xyz'
// console.log(objectA)


// function a() {
//     console.log('Hey there')
// }
// a()


// const a = () => {
//     console.log('Hey there')
// }
// a()

// const myAddress = {
//     country: 'Poland',
//     city: 'Gdansk',
//     street: 'Lawendowe Wzgorze',
//     popular: true
// }

// console.log(myAddress.country)
// console.log(myAddress.city)

// const myCity = {
//     city: 'New York'
// }
// myCity['popular'] = true
// console.log(myCity)
// const countryName = 'country'
// myCity[countryName] = 'USA'
// console.log(myCity)

// const myCity = {
//     myHome: 'red',
//     cityGood: function () {
//         console.log('Good!')
//     }
// }
// myCity.cityGood


//Мутация
// const person = {
//     name: 'Andrei',
//     age: 40
// }
// const person2 = person
// person2.age = 18,
// person2.isAdult = true
// console.log(person.age)
// console.log(person.isAdult)

//чтобы избежать мутации нужно делать так: const person2 = Object.assign({}, person)
//этоподойдёт, ели нет вложенных объектов.


// const person = {
//     name: 'Andrei',
//     age: 40
// }
// const person2 = {...person} //оператор три точки, разделение объекта на свойства. Главное ,чтобы не было вложенностей, в противном случаи будет мутация исходника.
// person2.name = 'Bob'
// console.log(person.name)
// console.log(person2.name)


// const person = {
//     name: 'Andrei',
//     age: 40
// }
// const person2 = JSON.parse(JSON.stringify(person)) //без мутации(двойная кнвертация), ссылки на вложеные объекты не сохраняются
// person2.name = 'Bob'
// console.log(person.name)
// console.log(person2.name)



// alert('Hello World')









