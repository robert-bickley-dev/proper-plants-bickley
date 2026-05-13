import { useState } from "react";
import { PLANTS } from "../data.js";
import { Plant } from "./Plant.jsx";
import "./plants.css";

export default function Plants({ setCart }) {
  const [plants] = useState(PLANTS);

  return (
    <section>
      <h2>Plants</h2>
      <ul className="plants">{plants.map((plant) => Plant)}</ul>
    </section>
  );
}
