let h1 = document.querySelector('h1')
let container = document.getElementById('container')
let list = document.querySelector('ul')
let base_url="http://numbersapi.com/"
let favorite_num = Math.floor(Math.random() * 100)
let favNumbers = [7, 11, 22];

//1
function FavNumber(){
    axios.get(`${base_url}${favorite_num}?json`)
    .then(data => console.log(data.data.text))
    .catch(error => console.log(error))
}
FavNumber()

// 2.

$.getJSON(`${base_url}${favNumbers}?json`).then(data => {
  console.log(data);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${base_url}${favorite_num}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
