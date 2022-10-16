// Let's say you're a car manufacturer and need to create many cars to build your inventory
// Create a class called "car"
// Add some properties like "make", "model", "year", "color", etc
// Use your car class to construct 4 (or more) different cars
// console log your code so you can see the results!
// BONUS: Display the details for each of your cars in your HTML

const Car = class car {
    constructor(make,model,year,color,src) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.image = src;
    }
}

const bmw = new Car('BMW','M3','2005','grey','https://www.carscoops.com/wp-content/uploads/webp/2022/01/BMW-E46-M3-2a-768x416.webp');
const toyota = new Car('Toyota','Corolla S','2013','red','https://mysterio.yahoo.com/mysterio/api/84DC7774710CFBE13F43FC5E610958D8325E5A953A5A92A2C5E836DBE07F7422/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC30TOC041B121001.jpg');
const subaru = new Car('Subaru','XV Crosstrek','2013','Sage','http://www.cars101.com/subaru/crosstrek/crosstrek13-side15.jpg');
const honda = new Car('Honda','Civic','2022','lightblue','https://images.hgmsites.net/hug/2022-honda-civic-sdn_100810827_h.jpg');

carArr = [bmw,toyota,subaru,honda];

let newCar;

for (let item of carArr) {
    displayCar(item);
}

function displayCar(item) {
    const img = document.createElement('img');
    document.body.append(img);
    img.src = item.image;
    img.setAttribute('style','width: 50%;')

    const h3 = document.createElement('h3');
    document.body.append(h3);
    h3.innerHTML = `
    Car: ${item.make} <br>
    Model: ${item.model} <br>
    Year: ${item.year} <br>
    Color: ${item.color} <br>`;
}