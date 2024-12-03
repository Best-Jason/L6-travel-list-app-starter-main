
function Stats({items}) {
    const numItems = items.length;
    const numPackedItems = items.filter((item)=>item.packed).length;
    const percentage = Math.round((numPackedItems / numItems) * 100)
    return (
      <footer className="stats">
        {numPackedItems !== numItems?  (
        <em>
          You have {numItems} items in the list. You already packed {numPackedItems} ({percentage}%).
        </em>
    ) : (
        <em>
          You got everything.
          </em>
    )}
      </footer>
   );
  }

  export default Stats;