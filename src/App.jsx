import cartIcon from './assets/icon-cart.svg';
import imageProduct from './assets/image-product-mobile.jpg';
import imageProductDesktop from './assets/image-product-desktop.jpg';

function App() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-center">
      <article className="flex w-full max-w-[343px] flex-col overflow-hidden rounded-lg bg-card-white md:max-w-[600px] md:flex-row">
        <figure className="md:w-1/2">
          <picture>
            <source media="(min-width: 768px)" srcSet={imageProductDesktop} />
            <img
              src={imageProduct}
              alt="Perfume bottle of Gabrielle Essence by Chanel Paris"
              className="h-full w-full object-cover"
            />
          </picture>
        </figure>
        <div className="flex flex-col gap-card-300 p-card-400 md:w-1/2">
          <p className="text-preset-4 text-card-grey uppercase">Perfume</p>
          <h1 className="text-preset-1">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-preset-3 text-card-grey">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-card-200">
            <span className="text-preset-1 text-card-green-500">$149.99</span>
            <s className="text-preset-5 text-card-grey">$169.99</s>
          </div>
          <button className="flex cursor-pointer flex-row items-center justify-center gap-card-100 rounded-[8px] bg-card-green-500 p-card-200 text-preset-2 text-card-white transition-colors duration-200 hover:bg-card-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-card-green-500">
            <img
              src={cartIcon}
              alt=""
              aria-hidden="true"
              className="h-[18px] w-[18px]"
            />
            Add to Cart
          </button>
        </div>
      </article>
    </main>
  );
}

export default App;
