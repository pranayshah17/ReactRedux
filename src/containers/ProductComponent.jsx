import React from "react";
import { useSelector } from "react-redux";

export default function ProductComponent() {
  // Retrieve products from the Redux store using useSelector hook
  const products = useSelector((state) => state.allProducts.products);

  // Check if products is an array and has data
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available.</div>;
  }

  // Render the component with product titles displayed in separate divs
  return (
    <div>
      {products.map((value) => {
        console.log(value);
        return (
          <div key={value.id}>
            <div className="card" style={{ width: "15rem" }}>
              <img src={value.image} alt={value.title} />
              <div className="content">
                <div className="header">{value.title}</div>
                <div className="meta price">${value.price}</div>
                <a href="#" class="btn btn-primary">
                  view Details
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//
