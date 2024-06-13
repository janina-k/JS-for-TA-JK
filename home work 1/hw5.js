// task1

// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// }

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web development",
// };

// console.log(propsCount(mentor));

// task 2

// function showProps(currentObject) {
//     let properties = Object.keys(currentObject);
//     let values = Object.values(currentObject);
//     return [properties, values];
// }

// let horse = {
//     name: "Galicja",
//     sex: "mare",
//     age: 13,
//     breed: "Silesian",
//     colour: "bay"
// }

// console.log(showProps(horse));

// task 3

// class Person {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName(){
//         console.log(this.name + " " + this.surname);
// }
// }

// class Student extends Person{
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//             }
//     showFullName(middleName){
//         console.log(this.name + " " + middleName + " " + this.surname)
//     }
//     showCourse(){
//         const currentYear = new Date().getFullYear();
//         const course = currentYear - this.year + 1;
//         if (course < 1 || course > 6){
//             console.log("Wrong course year");
//         } else {
//             console.log("Current course: " + course);
//         }
//     }
// }

// let student = new Student("Maria", "Skłodowska-Curie", 2019);
// console.log(student);
// console.log(student.showFullName("Anna"));
// student.showCourse();

// task 4

class Worker {
    #experience = 1.2;
  
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
  
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    showSalaryWithExperience() {
      const salaryWithExp = this.dayRate * this.workingDays * this.#experience;
      console.log(`${this.fullName} salary: ${salaryWithExp}`);
    }
  
    get showExp() {
      return this.#experience;
    }
  
    set setExp(value) {
      this.#experience = value;
    }
  }
  
  let worker1 = new Worker("John Wick", 20, 23);
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  
  let worker2 = new Worker("John Smith", 48, 22);
  worker2.showSalary();
  console.log("New experience: " + worker2.showExp);
  worker2.showSalaryWithExperience();
  worker2.setExp = 1.5;
  console.log("New experience: " + worker2.showExp);
  worker2.showSalaryWithExperience();
  
  let worker3 = new Worker("Andrew Johnson", 29, 23);
  worker3.showSalary();
  console.log("New experience: " + worker3.showExp);
  worker3.showSalaryWithExperience();
  worker3.setExp = 1.5;
  console.log("New experience: " + worker3.showExp);
  worker3.showSalaryWithExperience();
  
  let workers = [worker1, worker2, worker3];
  workers.sort((a, b) => (a.dayRate * a.workingDays * a.showExp) - (b.dayRate * b.workingDays * b.showExp));
  
  console.log("Sorted salary:");
  workers.forEach(worker => {
    console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.showExp}`);
  });

