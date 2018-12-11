const characterSelect = document.getElementById('characterSelect');
const characterBio = document.getElementById('characterBio');
let people = [];
let urls = [
  'https://swapi.co/api/people/?page=1',
  'https://swapi.co/api/people/?page=2',
  'https://swapi.co/api/people/?page=3',
  'https://swapi.co/api/people/?page=4',
  'https://swapi.co/api/people/?page=5',
  'https://swapi.co/api/people/?page=6',
  'https://swapi.co/api/people/?page=7',
  'https://swapi.co/api/people/?page=8'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(res => Promise.all(res.map(r => r.json())))
  .then(res => {
    people = r.results;
    render();
    // console.log(res)
  })
  .catch(err => console.log(err));

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

characterSelect.addEventListener('change', renderBio);
