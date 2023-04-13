const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

let searchJose = users.find(user => user.firstName = 'Jose');

let listPremiumMembers = users.filter(user => user.isPremiumMember);

let listUserLastNames = users.map(user => user.lastName);

let userOver10 = users.filter(user => user.logins >= 10);
let listFirstNamesUserOver10 = userOver10.map(user => user.firstName + ' ' + user.lastName);

let listLogins = users.map(user => user.logins);
let totalLogins = listLogins.reduce(function(login, total){
   return total + login;
});

console.log(searchJose);
console.log(listPremiumMembers);
console.log(listUserLastNames);
console.log(listFirstNamesUserOver10);
console.log(totalLogins);
