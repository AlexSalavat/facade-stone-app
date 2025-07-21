import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: "12px",
        padding: "12px",
        textAlign: "center",
        width: "100%",
        maxWidth: "170px",
        margin: "auto",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      <img
        src={product.images[0]}
        alt={product.name}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "8px"
        }}
      />
      <div style={{ fontSize: "16px", fontWeight: "500" }}>{product.name}</div>
    </div>
  );
};

export default ProductCard;
