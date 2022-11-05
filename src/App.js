import {useState} from 'react';
import menu from './data'
import Button from './components/Button';
import MenuItem from './components/MenuItem';

function App() {
const [items,SetItems]=useState(menu)

const filterMenu=(mealsTime)=>{

  let newItems=[]
  switch (mealsTime) {
    case 'all':
      SetItems(menu)
      break;
    case 'breakfast':
       newItems=menu.filter((item)=>item.category==='breakfast' )
      SetItems(newItems)
      console.log('br')
      break;
    case 'lunch':
       newItems=menu.filter((item)=>item.category==='lunch');
      SetItems(newItems)
      break;
    case 'shakes':
       newItems=menu.filter((item)=>item.category==='shakes')
      SetItems(newItems)
      break;
    default:
      break;
  }
}
  return (
    <main>
      <section className="container">
        <header className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </header>
        <nav>
        <Button text={'All'} handlerFn={()=>filterMenu('all')}/>
        <Button text={'BreakFast'}  handlerFn={()=>filterMenu('breakfast')}/>
        <Button text={'Lunch'}  handlerFn={()=>filterMenu('lunch')}/>
        <Button text={'Shakes'}  handlerFn={()=>filterMenu('shakes')}/>
        </nav>
        <section className="food-container">
          {
            items.map((item)=>{
              const {id,title,price,img,desc}=item
              return <MenuItem key={id} title={title} price={price} img={img} desc={desc}/>
            })
          }
          
        </section>
      </section>
    </main>
  );
}

export default App;
