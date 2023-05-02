//sample posts (data to be replaced)
let posts = [
    { title: 'title1', body: 'body1', tag: 'funny' },
    { title: 'title2', body: 'body2', tag: 'art' },
    { title: 'title3', body: 'body3', tag: 'art' }]

//function creates a new array of 'posts' that match the 'keyword',
//and updates the html with the new array 
let searchPosts = function (event){
    event.preventDefault();
    let postMatch = [];
    let listPosts = document.getElementById('listPosts');
    let keyword = document.getElementById('keyword').value;
    listPosts.innerHTML=""
    
    for (let post of posts) {
    if (post.tag.includes(keyword)) {
        postMatch.push(post);

        let listItem = document.createElement('p');
        listItem.innerHTML = `<h2 id = "searchhistory">${post.title}</h2><p>${post.body}</p>`;
        listPosts.appendChild(listItem);
    }
}
console.log(postMatch);
}

let searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', searchPosts);
 