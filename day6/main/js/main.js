// const baseUrl = 'https://pokeapi.co/api/v2/pokemon/mewtwo';

// fetch(baseUrl)
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log (data);
//     const img = document.createElement('img');
//     img.src = data.sprites.front_default;
//     document.body.append(img);

//     const h3 = document.createElement('h3');
//     h3.innerHTML = `Name: ${data.name} <br>
//     Height: ${data.height}
//     Weight: ${data.weight}`;
//     document.body.append(h3);
// })

// const arr = ["homer","bart","lisa","marge"]

// character = arr[Math.floor(Math.random()*4)];
// console.log(character);
// let url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=${character}`;

// fetch(url)
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log (data);
//     const img = document.createElement('img');
//     img.src = data[0].image;
//     document.body.append(img);

//     const h3 = document.createElement('h3');
//     h3.innerHTML = `Name: ${data[0].character} <br>
//     Quote: ${data[0].quote}`

//     document.body.append(h3);
// })

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?character=maggie';
fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);

    const img = document.createElement('img');
    document.body.append(img);
    img.src = data[0].image;
   
    const h3 = document.createElement('h3');
    document.body.append(h3);
    h3.innerHTML = `Name: ${data[0].character} <br>
    Quote: ${data[0].quote}`;
    
})