
const img = document.createElement("img");
document.body.append(img);
const h3 = document.createElement("h3");
document.body.append(h3);

fetch(`https://fakestoreapi.com/products`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        // let num = 0;
        // let intervalId = setInterval(() => {
        //     if (num < data.length) {
        //         img.src = data[num].image;
        //         h3.innerHTML = `Price: ${data[num].price} <br>
        //             Quote: ${data[num].description}`;
        //         num++;
        //     } else {
        //         clearInterval(intervalId);
        //     }
        // }, 500);

        // data.forEach( (product) => { 
        //     const img = document.createElement('img');
        //     img.src = product.image;
        //     document.body.append(img);
            
        //     const h3 = document.createElement('h3');
        //     h3.innerHTML = `Price: ${product.price} <br>
        //                     Quote: ${product.description}`;
        //     document.body.append(h3);
        // })

        data.forEach( (product, i) => { 
            setTimeout(() => {
                 img.src = product.image;
                 h3.innerHTML = `Price: ${product.price} <br>
                                 Quote: ${product.description}`;
             }, i*1000);
        })
    });











// let url = `https://fakestoreapi.com/products`;
// let i = 0;
// let arr = [];
// const img = document.createElement('img');
// document.body.append(img);
// const h3 = document.createElement('h3');
// document.body.append(h3);

// for (let i=0;i<16;i++) {

//     setInterval(() => {
    
//     fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         arr = data;
//         console.log(arr);
//         img.src = arr[i].image;
//         console.log("this is the first message")
//         img.src = arr[i].image;

//         h3.innerHTML = `Price: ${arr[i].price} <br>
//         Quote: ${arr[i].description}`
        
//     })
//     }, 8000);
// }





// for (let i=0;i<16;i++) {

//     setInterval(() => {
//         console.log("this is the first message")
//         img.src = arr[i].image;
        

//         h3.innerHTML = `Price: ${arr[i].price} <br>
//         Quote: ${arr[i].description}`
        
//     }, 5000);
// }



// (function(i){
    //     setTimeout(function(){
    //         console.log("this is the first message")
    //         img.src = arr[i].image;
            
    
    //         h3.innerHTML = `Price: ${arr[i].price} <br>
    //         Quote: ${arr[i].description}`
    //     }, 3000);
    // })(i);