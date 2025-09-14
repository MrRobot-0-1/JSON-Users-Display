const containerNode = document.querySelector(".container");
const buttonNode = document.querySelector(".load");

const url = "https://jsonplaceholder.typicode.com/users";

function getCard(name, username, email, phone, website) {
    return `
    <div class="card">
            <p class="name">${name}</p>
            <p class="username">${username}</p>
            <p class="email">${email}</p>
            <p class="phone">${phone}</p>
            <p class="website">${website}</p>
    </div>
    `;
};

async function getData() {
    containerNode.innerText = "Загружаем данные..."
    let result = "";
    const res = await fetch(url);
    const data = await res.json();

    for (let el of data) {
        result += getCard(el.name, el.username, el.email, el.phone, el.website)
    }

    containerNode.innerHTML = result;  
}


buttonNode.addEventListener("click", getData)



