import { useEffect, useState } from 'react';
import { fetchCats } from '../services/cats';
import CatList from '../components/Cats/CatList';

export default function Problem2() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCats();
      setCats(data);
    };
    fetchData();
  }, []);

  return (
    <div className="problem-container">
      <h2>Problem 2: Loading Data with useEffect</h2>
      <div className="description">
        Your Supabase API URL and Key have been provided for you.
        <ol>
          <li>
            Add a useEffect to load the cats using the <code>fetchCats</code> function in the
            services folder.
          </li>
          <li>
            Set the data in state and pass it to the <code>CatList</code> component.
          </li>
          <li>
            Stretch: Add a filter for the Cat type -- generate the list of types using the data
            rather than hard coding it
          </li>
        </ol>
      </div>
      <div className="cats-container">
        <CatList cats={cats} />
      </div>
    </div>
  );
}
