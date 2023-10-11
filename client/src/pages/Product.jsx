import React from "react";
import { useParams } from "react-router";

function Product() {
  const param = useParams();
  console.log(param);

  // params ==> backend

  return <div>Product</div>;
}

export default Product;
