import React from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Card(props) {
   const { product } = props;
   const defaltUrlImage = "https://bulma.io/images/placeholders/1280x960.png";
   //    const { product } = product;
   return (
      <div className="card card-size" key={product.id}>
         <div className="card-image">
            <figure className="image is-4by3">
               <img src={product?.thumbnail || defaltUrlImage} alt="" />
            </figure>
         </div>
         <div className="card-content p-2">
            <div className="columns is-mobile is-gapless mb-1">
               <div className="column is8 title-size">
                  <h1 className="title is-7 has-text-left has-text-weight-bold">{product?.title}</h1>
               </div>
               <div className="column is-4">
                  <p className="title is-7 has-text-right has-text-weight-bold">
                     {product?.price?.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                  </p>
               </div>
            </div>
            <p className="subtitle is-7 has-text-grey has-text-weight-semibold mb-2">{product?.brand}</p>
            <div className="columns is-mobile is-gapless is-vcentered">
               <div className="column is-6">
                  <Rating
                     initialRating={product?.rating}
                     emptySymbol={<AiOutlineStar color="green" fontWeight="bold" size={23} />}
                     fullSymbol={<AiFillStar color="green" fontWeight="bold" size={23} />}
                     readonly
                  />
               </div>
               <div className="column">
                  <p className="subtitle is-7 has-text-left has-text-grey has-text-weight-semibold">({product?.rating})</p>
               </div>
            </div>
         </div>
         <div className="card-footer ">
            <a className="button is-link is-outlined is-rounded ml-2">Info</a>
         </div>
      </div>
   );
}
