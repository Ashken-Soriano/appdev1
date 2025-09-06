let aboutMe = {
    name: "Ashken",
    age: 18,
    course: "BSIS",

    introduce: function() {
        console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

aboutMe.introduce(); 


aboutMe.hobby = "Playing Guitar, Coding but not really good.";

console.log(aboutMe.hobby); 