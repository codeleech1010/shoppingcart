// import React, { useState } from "react";
import React from "react";
import { useCart } from "../contexts/CartContext";
import Modal from "./Modal";

const Product = ({ product }) => {
  const { addItemToCart, openModal, closeModal, isModalOpen, productInModal, cartMsg, isButtonDisabled } = useCart();

  const handleAddItemFromModalToCart = () => {
    addItemToCart(productInModal);
  };

  return (
    <div className="mb-8 sm:w-auto md:w-auto lg:w-auto xl:w-auto">
      <button
        onClick={() => openModal(product)}
        className="bg-white p-4 rounded shadow w-auto"
        >
        <img src={product.thumbnail} className="w-auto h-72 object-bottom rounded-md" alt={product.title} />
        <h2 className="text-lg font-semibold text-gray-600">
          {product.title}
        </h2>
        <p className="text-gray-600 line-through">${product.price}</p>
        <p className="text-red-500">Discounted price: ${product.price - product.discountPercentage}</p>
      </button>

      <button
        onClick={() => addItemToCart(product)}
        disabled={isButtonDisabled[product.id]}
        className={`w-full mt-2 px-4 py-2 rounded ${isButtonDisabled[product.id] ? 'text-red-900' : 'text-red-600'}`}
      >
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
            alt={productInModal.title}
          />
          <p className="text-gray-600">${productInModal.price}</p>
          <p className="text-gray-600">
            Flat Discount: ${productInModal.discountPercentage}
          </p>
          <p className="text-red-600">
            Discounted Price: ${productInModal.price - productInModal.discountPercentage}
          </p>
          <button
            onClick={() => handleAddItemFromModalToCart(productInModal)}
            disabled={isButtonDisabled[productInModal.id]}
            className={`w-full mt-2 px-4 py-2 rounded ${isButtonDisabled[productInModal.id] ? 'text-red-900' : 'text-red-600'}`}
          >
            Add to cart
          </button>
          {cartMsg[productInModal.id] && (
            <p className="text-green-500">{cartMsg[productInModal.id]}</p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Product;
