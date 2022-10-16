// Create a new codepen
// Congrats, you got a new dog!
// Create an object named "dog"
// Name and describe your dog
// Add a property to your dog object called "name" and assign a name
// Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
// Let's teach it some tricks
// Give your dog a property called "speak" and assign a function that will alert "woof!"
// Add another method to teach your dog one more trick
// BONUS: Display your dog object values in HTML

// const Dog = {
//     name: 'sparky',
//     legs: 4,
//     color: 'brown',

// }

function Dog(name,legs,color,bark) {
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.bark = function() {
        console.log(bark);
    }
}

const golden = new Dog('sparky', 3, 'grey','BORK');
const poodle = new Dog('spot', 4, 'white');
console.log(golden);
console.log(poodle);

golden.bark();

function createItem(tag, content) {
    const elementName = document.createElement(tag);
    document.body.append(elementName);
    elementName.innerHTML = content;
}

createItem('h1', Object.values(golden));
createItem('h2', 'Yo whats up');
createItem('input');