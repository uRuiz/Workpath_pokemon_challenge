import './Header.css';

const Header = ({ cartItems }) => (
  <header className="header">
    <h1>THE POKEMON STORE</h1>
    <div className="header-cart">
      <p>Cart </p>
      <p className="badge">{cartItems}</p>
    </div>
  </header>
);

export default Header;
