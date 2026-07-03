import React from "react";

export default function BackToTopButton({ onClick }) {
  return (
    <button type="button" className="back-to-top" onClick={onClick}>
      ↑
    </button>
  );
}
