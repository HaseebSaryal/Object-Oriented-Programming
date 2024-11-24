

const userData   = {
    name: " Saryal",
    email : "haseebsaryal@gmial.com",
    id : 222339,
    isLoggedIn : true,
    LoginCount : 29,

    greeting : function(){
        if(name === "Haseeb Saryal")
        console.log(`Hello : mr.${this.name}`)

    }
   
}
console.log(userData.name)
// console.log(greeting())
// console.log(greeting())

// usecases of contstructor functions//

const User = {
    username: "Ismail Sahibzada",
    age : 20,
    isLoggedIn : true,
    id : 783,
    email : "09980sf8@",

    function  GetAllUsers(username, isLoggedIn, email, id){
        this.username = username;
        this.id = id
        this.isLoggedIn = isLoggedIn
        this.email  = email;

         this.greetingss = function(){
            console.log(`Welcome Mr.${this.username}`)
         }

    }

const getUsers =  new GetAllUsers("Faisal", 23423, true, "@gsgdlsgp");
const user2 =  new GetAllUsers("bamboo",2342, false, "#gsg'@gase" )
console.log(getUsers)


// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false;
        
//         if(!error){
//             console.log("Task has been started");
//             resolve({named: "LSDJ"});
//         }
//         else{
//             reject("£rror has been founded")
//         }
//     })
// }).then((username)=>{
//     console.log(username)
// }).then((resolve)=>{
//     console.log(resolve.namedd)
// }).catch((error)=>{
//     console.log(error)

// })

function CarsDetail(make, model, year, condition){
    this.make = make;
    this.model = model;
    this.year = year;
    this.condition = condition

    return this
}
const cars =  new CarsDetail( "steel","Civic", "Honda", 2018)
console.log(cars)