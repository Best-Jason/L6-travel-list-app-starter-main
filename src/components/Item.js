//child component to PackingList
//template
function Item({packingItem, onDeleteItem, onUpdateItem}) {
    return <li>
      <input 
      type="checkbox"  //check box  //checked="checkbox" to turn it to true/false
      value={packingItem.packed} 
      onChange={()=>onUpdateItem(packingItem.id)}
      />
      
      <span style = {packingItem.packed ? {textDecoration:"line-through"} : {}}>
         {packingItem.description} ({packingItem.quantity})
         </span>
         <button onClick={()=>onDeleteItem(packingItem.id)}>❌</button>
         </li>;
  }

  export default Item;