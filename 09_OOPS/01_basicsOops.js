// Object Literal
const user = {
    userName : 'ashu',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log('Got user detail from the database')
        // console.log(`Username : ${this.userName}`)
        console.log(this)
    }
}

// console.log(user)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, logincount, isLoggedIn ){
    this.username = username;
    this.loginCount = logincount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        tconsole.log(`welcome ${this.username}`)
    }

    return this
}

// const userOne = User('ashu',9,true)
// console.log(userOne)
// const userTwo = User('ashif', 10 , false)
// console.log(userOne)
const userOne =new User('ashu',9,true)
const userTwo = new User('ashif', 10 , false)
console.log(userOne)
console.log(userTwo)
console.log(userTwo.constructor)


