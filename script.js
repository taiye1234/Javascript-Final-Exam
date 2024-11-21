
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }

    sellProduct(quantity) {
        if (quantity > this.quantity) {
            return "Error: Not enough stock available.";
        } else {
            this.quantity -= quantity;
            return this.price * quantity;
        }
    }

    restockProduct(quantity) {
        this.quantity += quantity;
    }
}


// Part 2: Arrays & Sets

function findUniqueWords(words) {
    return Array.from(new Set(words));
}


function commonElements(array1, array2) {
    return array1.filter(value => array2.includes(value));
}

// Part 3: Maps

class StudentGrades {
    constructor() {
        this.grades = new Map();
    }

    addGrade(studentName, grade) {
        this.grades.set(studentName, grade);
        // return studentName + ": "+ grade;
    }

    getGrade(studentName) {
        return this.grades.get(studentName) || "Student not found.";
    }

    updateGrade(studentName, newGrade) {
        if (this.grades.has(studentName)) {
            this.grades.set(studentName, newGrade);
        } else {
            return "Student not found.";
        }
    }

    removeStudent(studentName) {
        this.grades.delete(studentName);
    }
}




// Part 4: Cybersecurity

function validatePassword(password) {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return password.length >= 8 && specialCharacterRegex.test(password);
}


// 
const product = new Product("Laptop", 1000, 50);
product.sellProduct(5);  // Returns 5000
product.restockProduct(10);  // Adds 10 to stock

let output = "Product: " + product.name + " Price: " + product.price + " Quantity: " + product.quantity; 
document.getElementById("product_id").innerHTML = output;


const words = ["apple", "banana", "apple", "orange", "banana"];
let unique_words = findUniqueWords(words);  // Returns ["apple", "banana", "orange"]
document.getElementById("unique_words_id").innerHTML = unique_words;

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
common_element = commonElements(array1, array2);  // Returns [3, 4]
document.getElementById("common_elements_id").innerHTML = common_element;

// Test 
const studentGrades = new StudentGrades();
studentGrades.addGrade("John", 85);
studentGrades.addGrade("Jane", 90);
studentGrades.updateGrade("John", 88);
studentGrades.removeStudent("Jane");

output = "John has a grade of : " +  studentGrades.getGrade("John");

document.getElementById("student_grade_id").innerHTML = output;


output1 = validatePassword("password123");  // Returns false
output2 = validatePassword("P@ssw0rd!");  // Returns true
document.getElementById("validation_id").innerHTML = output1 + " " + output2;
