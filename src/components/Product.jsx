import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import Modal from "./Modal";

const Product = ({ product }) => {
  const { addItemToCart, openModal, closeModal, isModalOpen, productInModal } =
    useCart();

  return (
    <div>
      <button
        onClick={() => openModal(product)}
        className="bg-white p-4 rounded shadow"
      >
        <h2 className="text-lg font-semibold mb-2 text-gray-600">
          {product.title}
        </h2>
        <img src={product.thumbnail} className="w-full h-80 rounded-md" />
        <p className="text-gray-600">${product.price}</p>
      </button>

      <button onClick={() => addItemToCart(product)} className="text-red-600">
        Add to cart
      </button>

      {isModalOpen && (
        <Modal isOpen={true} onClose={closeModal}>
          <h2 className="text-lg font-semibold mb-2 text-gray-600">
            {productInModal.title}
          </h2>
          <img
            src={productInModal.thumbnail}
            className="w-full h-80 rounded-md"
          />
          <p className="text-gray-600">${productInModal.price}</p>   
          <p className="text-gray-600">Flat Discount: ${productInModal.discountPercentage}</p>   
          <p className="text-gray-600">Discounted Price: ${productInModal.price-productInModal.discountPercentage }</p>  
        </Modal>
      )}
    </div>
  );
};

export default Product;
