let results = document.getElementById('results');

let clear = function() {
    results.innerHTML = '';
}

let pasteResults = function(data){
    let newRes = document.createElement('p');
    newRes.innerText = JSON.stringify(data);
    results.appendChild(newRes);
}

let getAll = function(){
    clear();
    fetch('http://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => pasteResults(data))
.catch((error) => console.log(`'error:' ${error}`))
}

let getIdTen = function(){
    clear();
    fetch('http://jsonplaceholder.typicode.com/posts/10')
.then((res) => res.json())
.then((data) => pasteResults(data))
.catch((error) => console.log(`'error:' ${error}`))
}


let newPost = function(){
    clear();
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'contentType': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title: 'Day in the life of a hamster @GlamSally',
            body: "I woke up this morning feeling hungry, and decided to go for a walk in search of FRESH food. Fresh food just tastes sooo much better than leftovers. Today was a good day, as there were worms and sunflower seeds everywhere I went. Once I was feeling satisfied, I started stuffing my cheek pouches. It was hard work carrying it all, because all that food was becoming unbelievably heavy. I was about to give up, but luckily one of my followers spotted me struggling and helped carry the load. Once I returned to my cozy den, I unloaded today's haul into my pile of food. I'm going to have to create a second room to store it all. Does anyone want to help out with that? As payment, you will receive a shoutout on my Instagram <3",
        })
    })
.then((res) => res.json())
.then((data) => pasteResults(data))
.catch((error) => console.log(`'error:' ${error}`))
}

let replaceTwelve = function(){
    clear();
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        headers: {
            'contentType': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            userId: 2,
            id: 12,
            title: 'UPDATE Day in the life of a hamster @GlamSally',
            body: "You know that follower from last week who helped carry my food home? They came to my house today to help create a second food storage area, but they wanted some of the seeds as payment, as if an Instagram shoutout isn't enough. I can't believe it!",
        })
    })
.then((res) => res.json())
.then((data) => pasteResults(data))
.catch((error) => console.log(`'error:' ${error}`))
}

let updateTitle = function(){
    clear();
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'PATCH',
        headers: {
            'contentType': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title: 'Anyone available next week? @GlamSally',
        })
    })
.then((res) => res.json())
.then((data) => pasteResults(data))
.catch((error) => console.log(`'error:' ${error}`))
}

let deletePost = function(){
        clear();
        fetch('http://jsonplaceholder.typicode.com/posts/12'), {
            method: 'DELETE',
        }
    .then(() => ('successfully deleted'))
    .catch((error) => console.log(`'error:' ${error}`))
}



let button1 = document.getElementById('button1')
    .addEventListener('click', getAll);
let button2 = document.getElementById('button2')   
    .addEventListener('click', getIdTen);
let button3 = document.getElementById('button3')
    .addEventListener('click', newPost);
let button4 = document.getElementById('button4')
    .addEventListener('click', replaceTwelve);
let button5 = document.getElementById('button5')
    .addEventListener('click', updateTitle);
let button6 = document.getElementById('button6')
    .addEventListener('click', deletePost);