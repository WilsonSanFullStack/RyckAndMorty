
class Bank{

    constructor(){
        this.list = []
    }

    add(user){
        this.list.push(user)
    }

    remove(){
        this.list.shift()
    }
}

const customer = new Bank()
let counter = 1
setInterval( () => {
    counter = counter + 1
    const obj = {
        name: 'user' + counter,
        age: Math.round(Math.random()*100)
    }
    customer.add(obj)
    console.log(customer.list)
},3000 )

