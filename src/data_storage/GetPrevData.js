import React, { useEffect, useRef } from "react";

const GetPrevData = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default GetPrevData;
