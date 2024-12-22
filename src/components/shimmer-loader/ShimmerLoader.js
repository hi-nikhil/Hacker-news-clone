import React from "react";
import "./ShimmerLoader.css";

const ShimmerLoader = () => {
  const placeholderItems = Array.from({ length: 10 });

  return (
    <div className="shimmer-wrapper">
      {placeholderItems.map((_, index) => (
        <div className="shimmer-item" key={index}>
          <div className="shimmer shimmer-title"></div>
          <div className="shimmer shimmer-meta"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerLoader;
