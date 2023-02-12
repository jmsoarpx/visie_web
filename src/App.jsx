import { useEffect, useState } from "react";
import Card from "./components/card";

import "./app.css";

function App() {
   const [products, setProducts] = useState([]);
   const [isloading, setIsloading] = useState(true);

   useEffect(() => {
      getProducts();
   }, []);

   useEffect(() => {
      if (products.length > 1) setIsloading(false);
   }, [products]);

   const getProducts = () => {
      fetch("https://dummyjson.com/products?limit=48")
         .then((resp) => resp.json())
         .then((resp) => {
            setProducts(resp.products);
         });
   };

   return (
      <div className="mt-2">
         <section className="hero is-link">
            <div className="hero-body">
               <p className="title">Medium hero</p>
               <p className="subtitle">Medium subtitle</p>
            </div>
         </section>
         <p className="title is-5">Itens Similares que você parece gostar</p>
         <div className="columns is-mobile is-multiline is-centered">
            {products?.map((product) => (
               <div className="column is-narrow" key={product.title}>
                  <Card product={product} />
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;
