class parent{
    constructor(){
        this.fatherName = 'dipak';
    }
}

class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFulName(){
        return this.name + ' ' + this.fatherName;
    }
    
}
const baby = new child("ankan");
const baby2 = new child("lahiri");
console.log(baby);
console.log(baby2);
console.log(baby.getFulName());