import cartIcon from './assets/icon-cart.svg';
import imageProduct from './assets/image-product-mobile.jpg';

function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      <figure>
        <img
          src={imageProduct}
          alt="Perfume bottle of Gabrielle Essence by Chanel Paris"
        />
      </figure>
      <p>Perfume</p>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <p>$149.99</p>
      <p>$169.99</p>
      <button>
        <img src={cartIcon} alt="Shopping cart icon" />
        Add to Cart
      </button>
    </main>
  );
}

export default App;
