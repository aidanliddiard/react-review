import './Cats.css';

export default function CatListItem({ name, type, url }) {
  return (
    <div className="cat-list-item">
      <h3>{name}</h3>
      <img alt={name} width="100" src={url} />
      <p>{type}</p>
    </div>
  );
}
