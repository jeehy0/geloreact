import Pizza from "./Pizza.js";
import { pizzaData } from "./Pizza.js";

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian Cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </div>

      {/* <div className="pizzas">
          <Pizza
            name="Focaccia"
            description="Bread with italian olive oil and rosemary"
            img="./pizzas/focaccia.jpg"
            qty="6"
          />
          <Pizza
            name="Pizza Margherita"
            description="Tomato and Mozarella"
            img="./pizzas/margherita.jpg"
            qty="10"
          />
          <Pizza
            name="Pizza Spinaci"
            description="Tomato, mozarella, spinach, and ricotta cheese"
            img="./pizzas/spinaci.jpg"
            qty="16"
          />
          <Pizza
            name="Pizza Funghi"
            description="Tomato, mozarella, mushrooms, and onion"
            img="./pizzas/funghi.jpg"
            qty="12"
          />
          <Pizza
            name="Pizza Salamino"
            description="Tomato, mozarella, and pepperoni"
            img="./pizzas/salamino.jpg"
            qty="15"
          />
          <Pizza
            name="Pizza Prosciutto"
            description="Tomato, mozarella, ham, aragula, and burrata cheese"
            img="./pizzas/prosciutto.jpg"
            qty="18"
          />
        </div> */}
    </div>
  );
}

export default Menu;
