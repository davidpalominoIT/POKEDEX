

const poke_container = document.getElementById('poke_container');
const pokemons_number = 151;

//const POKE = document.getElementById('nombrepokemon';    ME FALTA VINCULAR LA INFORMACIÓN CON EL SEARCH

/*var nombrepokemon = document.getElementById('nombrepokemon');
nombrepokemon.addEventListener('enter', ()=>{
  getPokemon(nombrepokemon.value);
}); */

/*

pokeForm.addEventListener('submit', e =>{
  e.preventDefault();
  let searchPokemon = document.getElementById('pokemon').value;
  getPokemon(searchPokemon, true);
})*/


/*
function nombrepokemon(){
  document.querySelector("nombrepokemon").addEventListener("keydown", function (e){
  if (e.code === 'Enter'){
      newNote(e); //function that you run for add the content to the list
  }});

*/





const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};
const getPokemon = async id => {
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon); 
}
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const { id, name, sprites, types} = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
    
  </div>
  <div class="info"  onmousemove="uno('flex',1)"> 
    <span class="number "> N°${id}
    </span> 
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pokemonEl);
}

fetchPokemons();

function uno(_valor,id){
  if(id==1)
      document.getElementById("modal_uno").style.display=_valor;
   	
  window.onclick = function(event) {
  if (event.target == modal_uno) {
      modal_uno.style.display = "none";
    }

}
}




/*var myModalEl = document.getElementById('mySmallModalLabel')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  // do something...
})



function showModal() {
  document.getElementById('openModal').style.display = 'block';
}

function CloseModal() {
  document.getElementById('openModal').style.display = 'none';
}
*/



