const characterSelect = document.getElementById('characterSelect');
const characterBio = document.getElementById('characterBio');
const submit = document.getElementById('submit');
let people = [];

let apiRequest1 = fetch('https://swapi.co/api/people/?page=1').then(function (response) {
  return response.json();
});

let apiRequest2 = fetch('https://swapi.co/api/people/?page=2').then(function (response) {
  return response.json();
});

let apiRequest3 = fetch('https://swapi.co/api/people/?page=3').then(function (response) {
  return response.json();
});

let apiRequest4 = fetch('https://swapi.co/api/people/?page=4').then(function (response) {
  return response.json();
});

let apiRequest5 = fetch('https://swapi.co/api/people/?page=5').then(function (response) {
  return response.json();
});

let apiRequest6 = fetch('https://swapi.co/api/people/?page=6').then(function (response) {
  return response.json();
});

let apiRequest7 = fetch('https://swapi.co/api/people/?page=7').then(function (response) {
  return response.json();
});

let apiRequest8 = fetch('https://swapi.co/api/people/?page=8').then(function (response) {
  return response.json();
});

let apiRequest9 = fetch('https://swapi.co/api/people/?page=9').then(function (response) {
  return response.json();
});

let combinedData = {
  "apiRequest1": {},
  "apiRequest2": {},
  "apiRequest3": {},
  "apiRequest4": {},
  "apiRequest5": {},
  "apiRequest6": {},
  "apiRequest7": {},
  "apiRequest8": {},
  "apiRequest9": {}
};

Promise.all([apiRequest1, apiRequest2, apiRequest3, apiRequest4, apiRequest5, apiRequest6, apiRequest7, apiRequest8, apiRequest9]).then(function (values) {
  combinedData["apiRequest1"] = values[0];
  combinedData["apiRequest2"] = values[1];
  combinedData["apiRequest3"] = values[2];
  combinedData["apiRequest4"] = values[3];
  combinedData["apiRequest5"] = values[4];
  combinedData["apiRequest6"] = values[5];
  combinedData["apiRequest7"] = values[6];
  combinedData["apiRequest8"] = values[7];
  combinedData["apiRequest9"] = values[8];
  console.log(combinedData);
  characterName();
}).catch(err => console.log(err));

function characterName() {
  let char1 = combinedData.apiRequest1.results;
  let char2 = combinedData.apiRequest2.results;
  let char3 = combinedData.apiRequest3.results;
  let char4 = combinedData.apiRequest4.results;
  let char5 = combinedData.apiRequest5.results;
  let char6 = combinedData.apiRequest6.results;
  let char7 = combinedData.apiRequest7.results;
  let char8 = combinedData.apiRequest8.results;
  let char9 = combinedData.apiRequest9.results;
  people = [...char1, ...char2, ...char3, ...char4, ...char5, ...char6, ...char7, ...char8, ...char9];
  console.log(people);
  render();
}

function render() {
  console.log('people', people);
  people.forEach(person => {
    const option = document.createElement('option');
    option.value = person.name;
    option.textContent = person.name;
    characterSelect.appendChild(option);
  });
}

function renderBio() {
  characterBio.textContent = '';
  const selectedCharacter = characterSelect.value;
  const selectedCharacterData = people.find(person =>
    person.name === selectedCharacter
  );
  // characterBio.textContent = selectedCharacterData.name;
  const heading = document.createElement('h1');
  heading.textContent = selectedCharacterData.name;
  characterBio.appendChild(heading);
  const birthYear = document.createElement('p');
  birthYear.textContent = `Birth Year: ${selectedCharacterData.birth_year}`;
  characterBio.appendChild(birthYear);
}

submit.addEventListener('click', renderBio);

//stars to twinkle in a random position
function randomPosition(element) {
  let x = document.body.offsetHeight - element.clientHeight;
  let y = document.body.offsetWidth - element.clientWidth;
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

window.onload = function () {
  function twinkleStar() {
    let div = document.getElementById('twinkle');
    div.classList.add('star');
    div.setAttribute("style", "position:absolute;");
    let xy = randomPosition(div);
    div.style.top = xy[0] + 'px';
    div.style.left = xy[1] + 'px';
  }
  setInterval(twinkleStar, 2000);
}