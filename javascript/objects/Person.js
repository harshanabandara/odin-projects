function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello, I'm "+this.name);
    }
}

const lahiru = new Person("Lahiru",25)
lahiru.greet();