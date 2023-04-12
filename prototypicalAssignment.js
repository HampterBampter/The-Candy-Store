class Person{
    constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.favoriteFoods = favoriteFoods;
    }
    Person.prototype.fullName(){
        console.log(this.firstName + this.lastName);
        return this.firstName + this.lastName;
    }
    Person.prototype.toString(){
        return `Name: ${this.fullName}`
    }
}
    
let glamSally = new Person('Sally', 'Glam', 'Lilac', '1', ['Mealworms', 'Sunflower Seeds']);
glamSally.fullName();


