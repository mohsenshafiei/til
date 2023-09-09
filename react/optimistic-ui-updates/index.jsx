import React, { useState } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // Assume these items are initially fetched from the server
  ]);

  const handleRemove = async (id) => {
    // Optimistically remove item from UI
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);

    try {
      // Then try to delete the item on the server
      await axios.delete(`/api/items/${id}`);
    } catch (error) {
      // If the deletion failed, add the item back to the list and show an error message
      setItems([...newItems, items.find(item => item.id === id)]);
      console.error('Failed to delete item: ', error);
    }
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

ReactDOM.render(<ItemList />, document.getElementById('root'));
