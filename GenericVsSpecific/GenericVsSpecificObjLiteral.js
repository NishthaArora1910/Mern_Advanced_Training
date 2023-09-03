function createStudent(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    var student = {};
    student.rollNo = rollNo;
    student.name = name;
    student.age = age;
    student.phyMarks = phyMarks;
    student.chemMarks = chemMarks;
    student.mathMarks = mathMarks;
    student.total = function(){
        return this.phyMarks+this.chemMarks+this.mathMarks;
    }
    student.grade = function () {
        let grd ='';
        if((this.total()/3)>=90)grd = 'A';
        else if((this.total()/3)>=80 && (this.total()/3)<90)grd = 'B';
        else grd = 'C';
        return grd;
    }
    return student;
}
var nishtha = createStudent(101, 'Nishtha', 21, 90, 95, 91);
console.log(nishtha)
console.log(nishtha.total());
console.log(nishtha.grade());
console.log("nishtha instanceof createStudent : ", nishtha instanceof createStudent);
console.log("varsha instanceof Object : ", varsha instanceof Object);


var prachi = createStudent(101, 'pranjal', 23, 76, 93, 85);
console.log(pranjal)
console.log(pranjal.total());
console.log(pranjal.grade());
console.log("pranjal instanceof createStudent : ", pranjal instanceof createStudent);
console.log("pranjal instanceof Object : ", pranjal instanceof Object);

var ashish = createStudent(101, 'Ashish', 20, 96, 98, 78);
console.log(ashish)
console.log(ashish.total());
console.log(ashish.grade());
console.log("ashish instanceof createStudent : ", ashish instanceof createStudent);
console.log("ashish instanceof Object : ", ashish instanceof Object);
