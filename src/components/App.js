import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';









function App() {
  // Responsible for resupplying the items
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems)=>[...prevItems, item]);
  }

  function handleDeleteItems(id) {
    setItems((prevItems)=>prevItems.filter((item)=>item.id !== id));
  }

  function handleUpdateItems(id) {
    setItems((prevItems)=>prevItems.map(
    (item) => item.id === id ? {...item, packed: !item.packed} : item
    ));
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems}/>
      <PackingList 
      items={items}
      onDeleteItem={handleDeleteItems}// implemnting prop name
      onUpdateItem={handleUpdateItems}// implemnting prop name
      />
      <Stats 
      items={items}
      />
    </div>
  );
}

export default App;