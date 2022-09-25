/* Object Examples */

let key = "favColor";
let phone = 12345;

const user = {
    /* Add Properties */
    name: "abc",
    age: 25,
    isDeveloper: true,

    /* Short hand property */
    phone,

    /* Use variable value as a key of object */
    [key]: 'red, green, blue',

    /* Take Key/Property name with space */
    ['My School']: 'Learning School',

    /* Function in Object */
    getData: function () {
        return this.city;  //--> Get city property using 'this' keyword
    },

    /* Nested Object in Object */
    biodata: {
        address: 'Pakistan'
    }
}

/* Update Property */
user.name = 'xyz';

/* Delete Property */
delete user.age;

/* Define Property Outside the object for Function */
user.city = 'ryk';

/* Loop to get key/property names and values usinf fot-in loop */
for (item in user) { //-->item work as variable and user is object name
    console.log(`${item}: ${user[item]}`);
}

console.log("Full Object :", user);
console.log("Updated User Name :", user.name);
console.log("Deleted Age Property :", user.age);
console.log("Phone Property get from varibale :", user.phone);
console.log("Property Name With Space :", user['My School']);
console.log("Varibale Value Key Name :", user[key]);
console.log("Function In Object :", user.getData());
console.log("Object In Object :", user.biodata);
console.log("Check name property is exist in object or not :", 'name' in user); //--> user is object name and name is key in object
console.log("Check country property is exist in object or not :", 'country' in user);


/* Program: Sum of object values */

const emp = {
    rana: 1000,
    ahmed: 2000,
    raza: 5000
}

let salary = 0;

for (item in emp) {
    salary += emp[item];
}

console.log(salary);