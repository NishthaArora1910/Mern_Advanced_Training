function Student(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
    this.phyMarks = phyMarks;
    this.chemMarks = chemMarks;
    this.mathMarks = mathMarks;
    this.total = function(){
        return this.phyMarks+this.chemMarks+this.mathMarks;
    }
    this.grade = function () {
        let grd;
        if(this.total()>90)grd = 'A';
        else if(this.total()>80)grd = 'B';
        else grd = 'C';
        return grd;
    }
}

var nishtha = new Student(101, 'Nishtha', 21, 90, 95, 91);
console.log(nishtha)
console.log(nishtha.total());
console.log(nishtha.grade());
console.log("nishtha instanceof Student : ", nishtha instanceof Student);
console.log("nishtha instanceof Object : ", nishtha instanceof Object);

var pranjal = new Student(101, 'Pranjal', 23, 76, 93, 85);
console.log(pranjal)
console.log(pranjal.total());
console.log(pranjal.grade());
console.log("pranjal instanceof Student : ", pranjal instanceof Student);
console.log("pranjal instanceof Object : ", pranjal instanceof Object);

var ashish = new Student(101, 'Ashish', 20, 96, 98, 78);
console.log(ashish)
console.log(ashish.total());
console.log(ashish.grade());
console.log("ashish instanceof Student : ", ashish instanceof Student);
console.log("ashish instanceof Object : ", ashish instanceof Object);
