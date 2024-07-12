import { React,useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {

  const [cart,setCart]=useState([]);
  const [warning, setWarning]=useState(false)
  const [show, setShow]=useState(true)

  const handleClick=(item)=>{
    // console.log(item)
    let isPresent = false
    cart.forEach((product)=>{
      if(item.id===product.id){
        isPresent=true
      }
    })
    if(isPresent){
      // console.log('Item already present')
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
      return
    }
    setCart([...cart,item])
  }
  const handleChange = (item,d) => {
    let ind = -1;
    cart.forEach((data,index) => {
      if(data.id === item.id)
      ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount +=d;
    console.log(tempArr);

    if(tempArr[ind].amount === 0){
      tempArr[ind].amount =1;
      
    }
    setCart([...tempArr])
  }
  return (
    
    <div >
      <Navbar size={cart.length}  setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {warning && <div className='warning'>Item Already Exist</div>}
      
    </div>
  );
}

export default App;
