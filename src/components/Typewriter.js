import React, { useState, useEffect } from "react";

const Typewriter = ({
  text,
  minTypeSpeed,
  maxTypeSpeed,
  initDelay,
  className,
}) => {
  const [state, setState] = useState("");

  const clicketyClack = (text, minTypeSpeed, maxTypeSpeed, initDelay) => {
    let str = "";
    let typeSpeed = 0;

    text.split("").forEach((c) => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        str += c;
        setState(str);
      }, initDelay + typeSpeed);
    });
  };

  useEffect(() => {
    clicketyClack(text, minTypeSpeed, maxTypeSpeed, initDelay);
  }, [text, minTypeSpeed, maxTypeSpeed, initDelay]);

  return (
    <div className={className}>
      {state}
      <span>&nbsp;</span>
    </div>
  );
};

Typewriter.defaultProps = {
  text: "Give me something to type!",
  minTypeSpeed: 50,
  maxTypeSpeed: 90,
  initDelay: 700,
};

export default React.memo(Typewriter);
