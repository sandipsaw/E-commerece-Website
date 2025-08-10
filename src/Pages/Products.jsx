import React, { useContext, useState } from "react";
import { productcontext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data] = useContext(productcontext);
  const [search, setsearch] = useState("")
  console.log(search);

  // console.log(data);

  if (!data) return <p>loading..</p>;

  const fiteredData=data.filter((data) => data.name.toLowerCase().includes(search.toLowerCase())  )

  const render2 = fiteredData.map((product) => (
    
    <ProductCard product={product} key={product.id} />
  ));


  const render = data.map((product) => (
    
    <ProductCard product={product} key={product.id} />
  ));


  return (
    <div className="flex flex-col p-6 h-[100%]">
      <input
       
        onChange={(e)=> setsearch(e.target.value)}
        className="w-[500px] mx-auto border-1 px-4 "
        placeholder="search "
        type="search"
      />

      
      <div className="flex flex-wrap gap-6 w-screen p-7"> {search ? render2 : render}</div>


    </div>
  );
};

export default Products;
