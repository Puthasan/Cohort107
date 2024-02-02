class Learner {
  #grades = [];
  #name = {
    first: "",
    last: "",
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

  get name() {
    return `${this.#name.first} ${this.#name.last}`;
  }

  get age() {
    return this.#age;
  }

  // pushes a new grade to the array
  set grades(grade) {
    grade = Number(grade);

    if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
    }
  }

  // return the grades array
  get grades() {
    return this.#grades;
  }

}

const learner1 = new Learner("Leeroy", "Jenkins", 18);

console.log(learner1.name);
console.log(learner1.age);

learner1.grades = 100;
learner1.grades = 90;
learner1.grades = 70;

console.log(learner1.grades);