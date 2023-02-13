import { useEffect, useState } from "react";
import Card from "./components/card";
import Banner from "./assets/banner.jpg";
import { Loading } from "./components/loading";

import "./app.css";

function App() {
   const [products, setProducts] = useState([]);
   const [isloading, setIsloading] = useState(true);
   const [category, setCategory] = useState("");

   useEffect(() => {
      getProducts();
   }, []);

   useEffect(() => {
      if (products.length > 1) setIsloading(false);
   }, [products]);

   const getProducts = () => {
      setCategory("all");
      setIsloading(true);
      fetch("https://dummyjson.com/products?limit=48")
         .then((resp) => resp.json())
         .then((resp) => {
            setProducts(resp.products);
            setIsloading(true);
         });
   };

   const getProductsByCategory = (category) => {
      setProducts([]);
      setIsloading(true);
      fetch(`https://dummyjson.com/products/category/${category}`)
         .then((resp) => resp.json())
         .then((resp) => {
            setCategory(category);
            setProducts(resp.products);
            setIsloading(false);
         });
   };

   return (
      <div className="mt-2">
         <section className="hero has-background-grey-lighter mb-3 is-mobile">
            <div className="hero-body p-1">
               <img className="image is-3by1 pt-0" src={Banner} alt="" />
            </div>
         </section>
         <div className="tabs is-small is-centered is-mobile">
            <ul>
               <li className={category === "all" ? "is-active" : ""} onClick={() => getProducts()}>
                  <a>Todas as Categorias</a>
               </li>
               <li className={category === "smartphones" ? "is-active" : ""} onClick={() => getProductsByCategory("smartphones")}>
                  <a>Smartphones</a>
               </li>
               <li className={category === "laptops" ? "is-active" : ""} onClick={() => getProductsByCategory("laptops")}>
                  <a>Notebooks</a>
               </li>
               <li className={category === "fragrances" ? "is-active" : ""} onClick={() => getProductsByCategory("fragrances")}>
                  <a>Fragrâcias</a>
               </li>
               <li className={category === "skincare" ? "is-active" : ""} onClick={() => getProductsByCategory("skincare")}>
                  <a>Cosméticos</a>
               </li>
               <li className={category === "groceries" ? "is-active" : ""} onClick={() => getProductsByCategory("groceries")}>
                  <a>Alimentação</a>
               </li>
               <li className={category === "home-decoration" ? "is-active" : ""} onClick={() => getProductsByCategory("home-decoration")}>
                  <a>Decoração</a>
               </li>
            </ul>
         </div>
         {isloading ? (
            <div className="columns is-mobile is-multiline is-vcentered is-centered" style={{ height: "50vh" }}>
               <Loading />
            </div>
         ) : (
            <div className="columns is-mobile is-multiline is-centered">
               {products?.map((product) => (
                  <div className="column is-narrow" key={product.title}>
                     <Card product={product} />
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}

export default App;
