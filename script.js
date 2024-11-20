
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
