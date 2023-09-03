function Student(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
    this.phyMarks = phyMarks;
    this.chemMarks = chemMarks;
    this.mathMarks = mathMarks;
}
Student.prototype.total = function(){
    return this.phyMarks+this.chemMarks+this.mathMarks;
}
Student.prototype.grade = function () {
    let grd;
    if(this.total()>90)grd = 'A';
    else if(this.total()>80)grd = 'B';
    else grd = 'C';
    return grd;
}

var varsha = new Student(101, 'Nishtha', 21, 90, 95, 91);
console.log(nishtha)
console.log("nishtha.total() :",nishtha.total());
console.log("nishtha.grade() :",nishtha.grade());
console.log("nishtha.__proto__.total.call(nishtha) :",nishtha.__proto__.total.call(nishtha));
console.log("nishtha.__proto__.grade.call(nishtha) :",nishtha.__proto__.grade.call(nishtha));
console.log("nishtha instanceof Student : ", nishtha instanceof Student);
console.log("nishtha instanceof Object : ", nishtha instanceof Object);

var ashish = new Student(101, 'Ashish', 20, 96, 98, 78);
console.log(ashish)
console.log("ashish.total() :",ashish.total());
console.log("ashish.grade() :",ashish.grade());
console.log("ashish.__proto__.total.call(ashish) :",nishtha.__proto__.total.call(ashish));
console.log("ashish.__proto__.grade.call(ashish) :",nishtha.__proto__.grade.call(ashish));
console.log("ashish instanceof Student : ", ashish instanceof Student);
console.log("ashish instanceof Object : ", ashish instanceof Object);
