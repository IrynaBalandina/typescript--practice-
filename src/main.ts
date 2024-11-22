import './style.css'

// let isDone: boolean = false;

// const name: string = "Bob";
// const lastName: string = "Jonson";
// const age: number = '12';
// const isHappy: boolean = true;
// const budget: null = null;
// const status: undefined = undefined;

// Create a TypeScript function named displayUserProfile that takes a user profile object as an argument.
// The user profile object should have the following properties: username(string), age(number), and
// isActive(boolean).The function should return a string summarizing the user's profile details

// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// function displayUserProfile(user: userProfile) {
//   return `User name is ${user.userName} hi is ${user.age} years old and his is ${user.isActive}`;
// }

// const user = {
//   userName: "Bob",
//   age: 12,
//   isActive: true,
// };

// console.log(displayUserProfile(user));

// function logName(name: string) {
//   return `${name}`;
// }

// type User = {
//   name: string;
//   age: number;
// };
// function calcTotal(arr: object[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// function calcTotal(arr: {name: string;age: number}[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// function calcTotal(arr: User[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// const numbersArray = [10, 20, 30, 40];
// console.log(calcTotal(numbersArray)); // Output: 100

// const users = [
//   { name: "bob", age: 12 },
//   { name: "bob", age: 23 },
//   { name: "bob", age: 34 },
// ];

// console.log(calcTotal(users)); // Output: 100


/*function safelyParseJson(jsonString: string) {
        try {
          const result: unknown = JSON.parse(jsonString);
           if (typeof result === "object" && result !== null) {
              return result;  // Type is verified as an object (non-null)
          }
      } catch (error) {
            console.error("Failed to parse JSON:", error);
    }
         return null;  
}*/
/*function logDetails(value: any) {
      console.log(`Value: ${value}, Type of value: ${typeof value}`);
    }*/

    /*  enum VehicleType {
            Car = "Audi",
          Truck = "Scania",
           Motorcycle = "Ducati"
        }
        
        function getVehicleType(vehicle: VehicleType) {
            return `The vehicle type is: ${vehicle}.`;
     }
        
        // Example usage:
   console.log(getVehicleType(VehicleType.Car));       
 console.log(getVehicleType(VehicleType.Motorcycle)); 
 console.log(getVehicleType(VehicleType.Truck)); */

 // Union Types
/*function formatInput(input: string | number) {
    if (typeof input === 'number') {
      return input.toFixed(2); // Formats the number to two decimal places
    } else {
        return input.toUpperCase(); // Converts the string to uppercase
     }
 }*/
// Literal

 /*function lightShower(color: "green" | "yellow" | 'red') {
   if (color === "green") {
    console.log("go");
   } else if (color === "yellow") {
     console.log("ready");
   } else if (color === "red") {
     console.log("ready");
   }
 }
 lightShower('green');*/

 /*function logName(name: string): string {
   return `${name}`;
 }

 function logName(name: string): void {
   console.log(`${name}`);
 }*/
// never

/*function errorHandler(message: string): never {
  throw new Error(message);
 }
 errorHandler("Critical error occurred!");*/

 /*interface User {
    name: string;
    age: number;
    lastName?: string;
    sayHello(): string;
    sayBye(): void;
    showAge(userAge: number): string;
  }*/

  // type User = {
//   name: string;
//   age: number;
// };

 /*const user = {
   name: "Bob",
  age: 12,
   sayHello() {
     return "Hello";
  },
   sayBye() {
     console.log("Bye");
   },
   showAge(userAge: number) {
     return `My age is ${userAge}`;
   },
 };
 const student : User = {
    name: "Bob",
    age: 12,
    sayHello() {
      return "Hello";
    },
    sayBye() {
      console.log("Bye");
    },
    showAge(userAge) {
      return `My age is ${userAge}`;
    },
  };*/
// generic
// який тип даних 

  /*let name = "John";
   A) let name: string = 'John'; a
   B) let name: number = 'John';
   C) let name: boolean = 'John';
   D) let name = 'John';*/

  // let scores = [1, 2, 3];
// A) let scores: number[] = [1, 2, 3];  a
// B) let scores = [1, 2, 3];
// C) let scores: array = [1, 2, 3];
// D) let scores: [number] = [1, 2, 3];

// let id;
// A) let id: string | number;  a 
// B) let id: string;
// C) let id: number;
// D) let id: any;

// function calculateDistance() {
//   return 42;
// }
// A) function calculateDistance(): number { return 42; }  a
// B) function calculateDistance(): void { return 42; }
// C) function calculateDistance(): any { return 42; }
// D) function calculateDistance() { return 42; }


// function logMessage(message) {
//   console.log(message);   a
// }
// A) function logMessage(message: string): void { console.log(message); }
// B) function logMessage(message: string): string { console.log(message); }
// C) function logMessage(message: any): void { console.log(message); }
// D) function logMessage(message: string) { console.log(message); }

// Admin', 'User', 'Gues

// a) enum UserRole {
//   Admin = "Admin"
//   User = "User"
//   Guest = "Guest"
// }

// b) enum UserRole {
//     Admin = 1,
//     User = 2,
//     Guest = 3
// }

// c) const UserRole = {
//     Admin: 0,
//     User: 1,
//     Guest: 2
// };

// d) let UserRole = ['Admin', 'User', 'Guest'];


// enum AnimalIds {
//   cat = 'cat',
//   dog = 'dog',
//   fish = 'fish',
// }

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   };
// };

// // type Animal = {
// //   cat: {
// //     meow: () => string;
// //   };
// //   dog: {
// //     bark: () => string;
// //   };
// //   fish: {
// //     swim: () => undefined;
// //   };
// // };

// // Створення об'єктів типу Animal
// let cat: Cat = {
//   meow: () => "Meow! I am a cat"
// };

// // let cat: Animal[AnimalIds.cat] = {
// //   meow: () => "Meow! I am a cat",
// // };

// let dog: Dog = {
//   bark: () => 'Woof! I am a dog',
// };

// let fish: Fish = {
//   swim: () => undefined,
// };


// type Cat = {
//   meow: () => string;
// };aple

// type Dog = {
//   bark: () => string;
// };

// type Fish = {
//   swim: () => undefined;
// };

//  як типизувати дані в об'єкті 


/*interface List {
  [key: string]:number | null
}

type Fruits = {
  apples:number;
  banana:number;
  orange:number;
}

const fruits:List = {
  apples :10,
   banana:15,
    orange:25,
    pineaple:10,
    peach:null
}

const electrinic:List  = {
    phones: 20,
     tablets: 10,
     monitors: 23,
   };*/

  //  function getFirstElement<T>(array:T[]):T| undefined {
    // return array[0];
  //  }


// numberArray
// function getFirstElement<T>(array: number[]) : number {
//   return array[0];
// }

// stringArray
// function getFirstElement<T>(array: string[]) : string {
//   return array[0];
// }

// objectArray
// function getFirstElement<T>(array: { name: string }[]): { name: string } {
//   return array[0];
// }


  /* const numberArray = [10, 20, 30];
const stringArray = ["hello", "world", "typescript"];
 const objectArray = [{ name: "Alice" }, { name: "Bob" }];

 console.log(getFirstElement(numberArray));
 console.log(getFirstElement(stringArray));
console.log(getFirstElement(objectArray));*/

// generic
/*function getProperty<T, K extends keyof T>(obj:T,key:K):T[K]{
  return obj[key];
}


const person = {
     name: "John",
     age: 30,
    occupation: "Engineer",
    gender:"male",
     
   };

   const name = getProperty(person, "name"); // Output: "John"
 const age = getProperty(person, "age"); // Output: 30
 const gender = getProperty(person, "gender"); // undefined*/

// 2
/*interface UserProfile{
  username:string,
  email:string,
  age:number
}
// 1
 const originalProfile:UserProfile  = {
   username: "johndoe",
   email: "john.doe@example.com",
   age: 28,
 };
// 3
 function updateProfile(profile:UserProfile, updates:Partial<UserProfile>){
return {...profile, ...updates}
 }

  // 4
 const updatedProfile = updateProfile(originalProfile, {email: "new.john.doe@example.com",age: 29, gender:"male"});*/

 /*interface User {
  id:number;
  name:string;
}
const user:Readonly<User> = {
     id: 100,
  name: "Bob",
 };*/

//  / Pick <T, K>

/*interface Employee {
  id:number;
  name:string;
  email:string;
  department:string;
  hireDate:Date;
}


 const fullEmployeeInfo:Employee = {
  id: 101,
   name: "John Doe",
   email: "john.doe@example.com",
   department: "Engineering",
  hireDate: new Date("2020-01-10"),
 };

 // function displayInfo(fullEmployeeInfo: Employee): Pick<Employee, "name" | "email"> {
  //   return {
  //     name: fullEmployeeInfo.name,
  //     email: fullEmployeeInfo.email,
  //   };
  // }


 function displayInfo(fullEmployeeInfo: Employee): BasicInfo {
   return {
     name: fullEmployeeInfo.name,
    email: fullEmployeeInfo.email,
     };
  }

 interface BasicInfo {
name:string;
email:string;
 }*/

//  omit

/*interface Employee {
  id:number;
  name:string;
  email:string;
  department:string;
  hireDate: Date; // hide info;
}


const fullEmployeeInfo:Employee = {
  id: 101,
   name: "John Doe",
   email: "john.doe@example.com",
   department: "Engineering",
  hireDate: new Date("2020-01-10"),
 };
 
 function displayInfo(fullEmployeeInfo: Employee): Omit<Employee, "hireDate" > {
  return {
    name: fullEmployeeInfo.name,
   email: fullEmployeeInfo.email,
   department: fullEmployeeInfo.department,
     id: fullEmployeeInfo.id,
    };
 }*/

    // method record

  
const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
 const tempRecord = recordTemperatures(weeklyTemps);
 console.log(tempRecord);