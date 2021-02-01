class Student{
    constructor (sId,sName){
        this.id = sId;
        this.name= sName;
        this.school = 'edubd';
    }
}
const student1 = new Student (12,'Rana');
const student2 = new Student (10,'jony');
console.log(student1,student2);