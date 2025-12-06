import React, { useState } from "react";

interface MirrorModalProps {
  quote: string;
}

const MirrorModal: React.FC<MirrorModalProps> = ({
  quote
}) => {
  const getQuote = () => {
    return quote;
  }

  return (
    <div>
        <button onClick={getQuote}>mirror mirror on the wall...</button>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "6px",
  }
};

export default MirrorModal;