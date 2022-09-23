let myName = "Spencer";
let age = 26;
let year = 2022;

const header = `
    <h1>
         ${myName}'s Website
    </h1>
`;
const section = `
    <section> 
        <p> I am ${age} years old.</p>
    </section>
`;

const footer = `
    <footer>
        &copy; ${year}
    </footer>
`;

document.body.innerHTML = header + section + footer;

document.querySelector("body").style.color = "red";






// document.querySelector("body").style.backgroundColor = "lightblue";