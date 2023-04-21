let results = document.getElementById('results');

let clear = function() {
    results.innerHTML = '';
}

let pasteResults = function(data){
    let newRes = document.createElement('p');
    newRes.innerText = json.stringify(data);
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
    fetch('http://jsonplaceholder.typicode.com/posts'), {
        method: 'POST',
        headers: {
            'contentType': 'application/json; charset=UTF-8'
        },
        body: json.stringify({
            name: 'User 1'
        })
    }
.then((res) => res.json())
.then((data) => pasteResults(data))
.catch((error) => console.log(`'error:' ${error}`))
}

let replaceTwelve = function(){
    clear();
    fetch('http://jsonplaceholder.typicode.com/posts/12'), {
        method: 'PUT',
        headers: {
            'contentType': 'application/json; charset=UTF-8'
        },
        body: json.stringify({
            name: 'User 1'
        })
    }
.then((res) => res.json())
.then((data) => pasteResults(data))
.catch((error) => console.log(`'error:' ${error}`))
}

let updateTitle = function(){
    clear();
    fetch('http://jsonplaceholder.typicode.com/posts'), {
        method: 'PATCH',
        headers: {
            'contentType': 'application/json; charset=UTF-8'
        },
        body: json.stringify({
            name: 'User 1'
        })
    }
.then((res) => res.json())
.then((data) => pasteResults(data))
.catch((error) => console.log(`'error:' ${error}`))
}

let deletePost = function(){
        clear();
        fetch('http://jsonplaceholder.typicode.com/posts/12'), {
            method: 'DELETE',
        }
    .then((res) => res.json())
    .then((data) => pasteResults(`successfully deleted ${data}`))
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