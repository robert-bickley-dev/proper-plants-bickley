import { useState } from "react";
import PLANTS from "./data.js";
import Plants from "./plants/Plants.jsx";

export default function App() {
  const [cart, setCart] = useState();

  return (
    <main>
      <section>
        <Plants />
        <Plant />
      </section>
      <section>
        <Cart />
        <CartItem />
      </section>
    </main>
  );
}
