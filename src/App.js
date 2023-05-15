import ProductList from "./component/ProductList";
import data from './data.json';
import './App.css';
import { useState } from 'react';

function App(){
  const [order,setOrder] = useState('date');
  const [items,setItems] = useState(data);
  // console.log(order)
  // console.log(item)

  const sortItems = items.sort(
    (a,b)=>{return b[order]-a[order]}
    )
  // const newClick = () =>{}
  // const bestClick = () =>{}
  function newClick(){
    setOrder('date')
  }
  function bestClick(){
    setOrder('rating')
  }
  const DelectItem = (id)=>{
    const newItem = items.filter((item)=>item.id !== id);
    setItems(newItem)
  }
  return (
    <div id="wrap">
      <div className="btn">
        {/* <button type="button" onClick={newClick}>최신순</button> */}
        <button type="button" onClick={() => setOrder('date')}>최신순</button>
        <button type="button" onClick={bestClick}>베스트순</button>
      </div>
      <ProductList items={sortItems} onDelete={DelectItem}/>
    </div>
  );
}

export default App;
