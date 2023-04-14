const storeOwners = [
  {name: 'charles', stores: 1, location: ''},
  {name: 'sally', stores: 1, location: ''},
  {name: 'cassandra', stores: 1, location: ''},
  {name: 'Danny Shavez', stores: 1, location: 'in NM'},
];

// const listNumberOfStores = function () {
//   for (let i = 0; i < storeOwners.length; i++) {
//     let totalLocations = totalLocations + i;
//   }
//   return i;
// };

let locations = storeOwners.length;

function tellMeMyStores() {
  console.log("Hey, can you tell me how many stores you have?");
  if (locations > 0) {
    console.log("Of course, we have " + locations + " stores");
  }
}

function hasStore() {
  for (let i = 0; i < 3; i++) {
    people = Object.values(storeOwners[i]);
    let person = people[0];
    console.log("Yes, " + person + " has one");
  }
}

tellMeMyStores();
hasStore();

let man = storeOwners[3].name;
let whereHeLives = storeOwners[3].location;
console.log("Yes, " + man + " that lives " + whereHeLives + " owns one too.");

