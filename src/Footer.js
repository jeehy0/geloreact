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

export default Footer;
