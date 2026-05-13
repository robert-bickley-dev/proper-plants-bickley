export default function Plant({ plant, addToCart }) {
  return (
    <li className="plant">
      <p>plant.image</p>
      <h3>plant.name</h3>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
