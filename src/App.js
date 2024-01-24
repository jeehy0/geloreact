import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Button />
    </div>
  );
}

export default App;

function Header() {
  return (
    <div className="header">
      <h1>FAST REACT PIZZA CO</h1>
    </div>
  );
}

function Footer() {
  const time = new Date().getHours;
  console.log(time);

  if (time >= 12 && time < 22) {
    return (
      <footer className="footer" style={{ textAlign: "center", color: "red" }}>
        We are OPEN. We're open from 12:00 to 22:00. Come visit us or order
        online.
      </footer>
    );
  } else {
    return (
      <footer className="footer" style={{ textAlign: "center", color: "red" }}>
        We are CLOSED. We're open from 12:00 to 22:00. Come visit us or order
        online.
      </footer>
    );
  }
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian Cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <div className="pizzas">
        <Pizza
          name="Focaccia"
          description="Bread with italian olive oil and rosemary"
          img="./pizzas/focaccia.jpg"
          qty="6"
        />
        <Pizza
          name="Pizza Margheritas"
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
      </div>
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.img} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.qty}</span>
      </div>
    </div>
  );
}

function Button() {
  return <button className="btn">Order</button>;
}
