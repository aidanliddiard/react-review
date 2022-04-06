export async function fetchPokemon(page = 1) {
  const params = new URLSearchParams();

  params.set('page', page);

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
