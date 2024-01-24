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
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src="./pizzas/focaccia.jpg"></img>
      <div className="pizza">
        <h3>Focaccia</h3>
        <p>Bread with italian olive oil and rosemary.</p>
        <span>6</span>
      </div>
    </div>
  );
}

function Button() {
  return <button className="btn">Order</button>;
}
