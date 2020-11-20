var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();




const fetchAPI = () => {
  const data = P.getPokemonByName('eevee') // with Promise
  .then(function(response: object) {
    console.log(response);
    return response
  })
  .catch(function(error: object) {
    console.log('There was an ERROR: ', error)
    return error;
  });

  return data

}

export default fetchAPI