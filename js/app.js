const container = document.querySelector(".container")
const coffees = [
  { name: "Latte", image: "../images/coffee1.jpg" },
  { name: "Expresso", image: "../images/coffee2.jpg" },
  { name: "Machiatto", image: "../images/coffee3.jpg" },
  { name: "Capuccino", image: "../images/coffee4.jpg" },
  { name: "Mocha", image: "../images/coffee5.jpg" },
  { name: "Filtrado", image: "../images/coffee6.jpg" },
  { name: "Pingado", image: "../images/coffee7.jpg" },
  { name: "Ristretto", image: "../images/coffee8.jpg" },
  { name: "Lungo", image: "../images/coffee9.jpg" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}