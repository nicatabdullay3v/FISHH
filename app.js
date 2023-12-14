// // enum VehicleType {
// //   car,
// //   motorcycle
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this.age = age;
    }
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surnameAndName", {
        get: function () {
            return this._surname + this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
// EMPLYOOOOOOOOOOOOOOOOOOOOOOO
var Position;
(function (Position) {
    Position["boss"] = "boss";
    Position["other"] = "other";
})(Position || (Position = {}));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, salary, skills, position) {
        var _this = _super.call(this, name, surname, age) || this;
        // this.employeeName = name;
        // this.employeeSurname = surname;
        _this.salary = salary;
        _this.skills = skills;
        _this.position = position;
        if (typeof Number(age)) {
            _this.age = 0;
        }
        else {
            _this.age = age;
        }
        return _this;
    }
    Employee.prototype.getInfo = function () {
        return " Age:".concat(this.age, " Salary: ").concat(this.salary, " Surname: ").concat(this.surname, " Name:").concat(this.name);
    };
    return Employee;
}(Human));
// Studentttttttttttttttttttttttttttttt
var Employee1 = new Employee("salam", "salam", 23, 233, ["saa"], Position.boss);
Employee1.getInfo();
console.log(Employee1);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, hobbies, GPA) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        _this.hobbies = hobbies;
        _this._GPA = GPA;
        return _this;
    }
    Student.prototype.hasPassed = function () {
        if (this.GPA < 50) {
            return true;
        }
        else {
            return false;
        }
    };
    Student.prototype.getInfo = function () {
        console.log("Employee: ".concat(this.name, " ").concat(this.surname, ", Age: ").concat(this.age));
        return "salam";
    };
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        set: function (NewGPA) {
            if (NewGPA <= 100 && NewGPA > 0) {
                this._GPA = NewGPA;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Human));
var studentForm = document.querySelector(".student");
var employeeForm = document.querySelector(".employee");
var selectOption = document.querySelector(".select");
function selectreset() {
    selectOption.addEventListener("change", function () {
        if (this.value == "employee") {
            studentForm.style.display = "none";
            employeeForm.style.display = "block";
        }
        else if (this.value == "student") {
            studentForm.style.display = "block";
            employeeForm.style.display = "none";
        }
    });
}
selectreset();
var employeeName = document.querySelector(".employeeName");
var employeeSurname = document.querySelector(".employeeSurname");
var employeeAge = document.querySelector(".employeeAge");
var employeeSalary = document.querySelector(".employeeSalary");
var employeeSkills = document.querySelector(".employeeSkills");
var positions = document.querySelector(".skills");
var position;
positions.addEventListener("change", function () {
    position = positions.value;
});
console.log(employeeSalary);
function reset() {
    employeeAge.value = "";
    employeeName.value = "";
    employeeSurname.value = "";
    employeeSalary.value = "";
    employeeSkills.value = "";
    position = "";
}
employeeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var age = +(employeeAge.value);
    var Name = employeeName.value;
    var Surname = employeeSurname.value;
    var salary = +(employeeSalary.value);
    var skills = (employeeSkills.value).split(",");
    var postionn = position;
    var employee5 = new Employee(Name, Surname, age, salary, skills, Position.boss);
    console.log(employee5);
    var Employes = document.querySelector(".Employes");
    Employes.innerHTML += " <li>".concat(employee5.getInfo(), "</li>\n\n");
    reset();
    if (selectOption.value == "employee") {
        studentForm.style.display = "block";
        employeeForm.style.display = "none";
        selectOption.value = "student";
    }
});
studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var age = +(employeeAge.value);
    var Name = employeeName.value;
    var Surname = employeeSurname.value;
    var salary = +(employeeSalary.value);
    var skills = (employeeSkills.value).split(",");
    var postionn = position;
    var employee5 = new Employee(Name, Surname, age, salary, skills, Position.boss);
    console.log(employee5);
    var Employes = document.querySelector(".Employes");
    Employes.innerHTML += " <li>".concat(employee5.getInfo(), "</li>\n\n");
    reset();
    if (selectOption.value == "employee") {
        studentForm.style.display = "block";
        employeeForm.style.display = "none";
        selectOption.value = "student";
    }
});
var salam = "sadsa";
console.log(typeof salam);
