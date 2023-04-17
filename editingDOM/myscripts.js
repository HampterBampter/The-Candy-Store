let list = document.getElementById('list');
let items = list.getElementsByTagName('li');
let apple = items[1];
apple.innerHTML = 'Granny Smith Apples';

list.removeChild(items[3]);

let itemNew = document.createElement('li');
itemNew.innerHTML = 'kombucha';
list.append(itemNew);

list.innerHTML = '';
listProtein = ['protein bars', ' almonds', ' peanut butter'];
for (let i = 0; i < listProtein.length; i++) {
    let itemNewProtein = document.createElement('li');
    itemNewProtein.innerHTML = listProtein[i];
    list.append(itemNewProtein);
}


let important = list.childNodes[1];
important.classList.add('important');

let getImportant = document.getElementsByTagName('important');
console.log(getImportant);

