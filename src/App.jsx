import Product from "./Product.jsx"

import "./App.css"
function App() {
  return (
    <main className="products">
      <Product
        img={{
          src: "./images/icon-sedans.svg",
          alt: "icon-sedans"
        }}
        heading="SEDNAS"
        description="
        Choose a sedans for its affordibility and excellent fuel economy. Ideal for cruising in the cit or on your next road trip.
        "
      />
      <Product
        img={{
          src: "./images/icon-suvs.svg",
          alt: "icon-suvs"
        }}
        heading="SUVS"
        description="
      Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
      "
      />
      <Product
        img={{
          src: "./images/icon-luxury.svg",
          alt: "icon-luxury"
        }}
        heading="LUXURY"
        description="
      Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
      "
      />
    </main>
  )
}

export default App;