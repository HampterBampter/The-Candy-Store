class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.favoriteFoods = favoriteFoods;
    }
}
Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
Person.prototype.toString = function () {
    return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}
Person.prototype.family = [];

Person.prototype.addToFamily = function (familyMember) {
    if (familyMember instanceof Person) {
        if (this.family.includes(familyMember)) {
        }
        else {
            this.family.push(familyMember);
            }
    }
    return this.family.length;
}

    let glamSally = new Person('Sally', 'Glam', 'Lilac', 1, ['Mealworms', 'Sunflower Seeds', "Peanuts"]);
    let Aldo = new Person('Aldi', 'To', 'Blue', 21, ['Tacos', 'Sushi', 'Cheesecake'])
    let Monito = new Person('Monito', 'Kong', 'Yellow', '3', ['Bananas', 'Cheese', 'Chocolate Balls'])
    
    console.log(glamSally.toString());
    console.log(glamSally.addToFamily(Aldo));
    console.log(glamSally.addToFamily(Aldo));
    console.log(glamSally.addToFamily(Monito));
    console.log(glamSally.addToFamily('Chomi'));
    
