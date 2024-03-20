import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <p>
          {text.length > maxLength ? text.slice(0, maxLength) + "..." : text}
          <button onClick={toggleTruncate} className="text-blue-500">
            Read more
          </button>
        </p>
      ) : (
        <p>
          {text}
          <button onClick={toggleTruncate} className="text-blue-500">
            Read less
          </button>
        </p>
      )}
    </div>
  );
};

export default ReadMore;
