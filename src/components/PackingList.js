import Item from './Item';

//Parent component to Item component
//responsible for supplying data to Item component
function PackingList({items, onDeleteItem, onUpdateItem}) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item packingItem={item} 
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      </div>
    );
  }

  export default PackingList;