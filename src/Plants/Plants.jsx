import Plant from "./Plant.jsx";
import "./plants.css";

export default function Plants({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
