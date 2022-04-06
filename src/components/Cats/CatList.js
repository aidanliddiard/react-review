import React from 'react';
import CatListItem from './CatListItem';

export default function CatList({ cats }) {
  return (
    <div className="cat-list">
      {cats.map((cat) => (
        <CatListItem key={cat.id} {...cat} />
      ))}
    </div>
  );
}
