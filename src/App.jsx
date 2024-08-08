import { useState, useEffect } from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { db } from "./data/db";

export default function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data, setData] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5
  const MIN_ITEMS = 1

  useEffect(() => { //cada que cambie se ejecutara este useEffect para solucionar tema de asincronia del state
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  function addToCart(item) {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);
    if(item.quantity >= MAX_ITEMS) return
    if (itemExists >= 0) {
      const newCart = [...cart];
      newCart[itemExists].quantity++;
      setCart(newCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(guitar  => guitar.id !== id))
  }

  function increaseQuantity(id) {
    const updateCart = cart.map(item => {
      if(item.id === id && item.quantity < MAX_ITEMS){
        return{
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  function decreaseQuantity(id) {
    console.log('decrementar');
    const updateCart = cart.map(item => {
      if(item.id === id && item.quantity > MIN_ITEMS) {
        return{
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  function clearCart () {
    setCart([]);
  }
 

  return (
    <>
      <Header
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity= {decreaseQuantity}
        clearCart = {clearCart}
        cart={cart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
              auth={true}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}
