// ques 1.
let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
let obj1 = {};
for (let i = 0; i < arr.length; i++) {
  obj1[arr[i]] = obj1[arr[i]] == undefined ? 1 : obj1[arr[i]] + 1;
}

console.log(obj);

// ques 2.

let Obj = {
  name: "abhishek",
  age: 30,
  email: "talk2me@gmail.com",
  phone: undefined,
};

console.log(Obj.name);
console.log(Obj.phone);
console.log("phone" in Obj);

for (key in Obj) {
  console.log(key);
  console.log(Obj[key]);
}

let user2 = {
  name: "ajay",
  age: 30,
};
let clone = {};
Object.assign(clone, user2);
console.log(clone);

clone.name = "rai";
console.log(clone);

Object.assign(clone, user2, { name: "ajayyraii" });
// console.log(clone);
Object.assign(clone, user2, { name1: "Pepcoder" });
console.log(clone);

// deep clone
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};
let clone = {};
//this is not deep cloning , because refference to size identifier is same in both clone and user obj
Object.assign(clone, user);
console.log(clone);
clone.name = "ABHISHEK";
console.log(clone);
clone.sizes.height = 123;
console.log(clone);
console.log(user);

//flatten an object
let flattenedObj = {
  name: "Jhon",
  "sizes.height": 182,
  "sizes.width": 50,
};

JSON.stringify();

console.log(flattenedObj);

let user1 = {
  name: "ajay",
  sayHi() {
    console.log(this.name);
  },
};
let admin = user1;
user1 = null;
user1.sayHi();
admin.sayHi();

function type1() {
  console.log(this.name);
}

var name = "JS";
type1(); //globally , this -> window ,

function type2() {
  console.log(this.lname);
}

var lname = "Kumar";

var obj2 = {
  lname: "Verma",
  type2,
};
obj2.type2();


var food = "Pizaa";
var obj = {
  food: "Pasta",
  eat() {
    console.log("i am eating " + this.food);
  },
};

var foo = obj.eat;

foo();
