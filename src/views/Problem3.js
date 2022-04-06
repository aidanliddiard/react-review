import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function Problem3() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="problem-container">
      <h2>Problem 3: Paginate Pokemon</h2>
      <div className="description">
        We are only loading 1 page of pokemon. Add pagination. Note you should not have to update
        any code in services -- it is already setup to take a page argument. As a stretch goal, add
        an infinite scroller by watching the scroll event.
        <p>
          <em>Try not to use your old deliverable as reference.</em>
        </p>
      </div>
      <div>
        {loading && <div className="loader"></div>}
        {pokemon.map((poke) => (
          <div key={poke.id}>
            <p>
              {poke.pokemon} ({poke.type_1}, {poke.type_2})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
