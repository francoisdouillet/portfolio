import React from "react";

const Background = () => {
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (mouseX - centerX) * 0.01;
    const moveY = (mouseY - centerY) * 0.01;

    const background = document.querySelector(".background");
    background.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="background"></div>
    </>
  );
};

export default Background;
