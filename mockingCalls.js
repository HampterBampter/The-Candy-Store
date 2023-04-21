let users = [
    { id: 1, name: 'HampterBampter', email: 'sennaasmith@gmail.com' },
    { id: 2, name: 'GlamSally', email: '2glam4u@gmail.com' },
];

let fetchUserById = function (userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find((user) => user.id == userId);
            if (user == null) {
                reject('Error: user does not exist');
            }
            else {
                resolve(user);
            }
        }, 1000);
    })
}

let userById = function (userId) {
    fetchUserById(userId)
        .then((resolved) => { console.log(resolved) })
        .catch((error) => { console.log(error) })
}

userById(1);
userById(2);
userById(3);
