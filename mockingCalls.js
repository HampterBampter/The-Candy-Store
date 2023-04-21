let users = [
    {id: 1, name: 'HampterBampter', email: 'sennaasmith@gmail.com'},
    {id: 2, name: 'GlamSally', email: '2glam4u@gmail.com'},  
];

let fetchUserById = function(userId){
    new promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find((user) => user.id == userId);
            if (user == null){
                reject('Error: user does not exist');
            }
            else{
                resolve(user);
            }
        }, 1000);
    })
}

console.log(fetchUserById(1));

