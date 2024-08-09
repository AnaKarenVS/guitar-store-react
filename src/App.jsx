import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";

export default function App() {

  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart()

  return (
    <>
      <Header
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity= {decreaseQuantity}
        clearCart = {clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        cart={cart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
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
