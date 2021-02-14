import React from "react";
import Image from "react-bootstrap/Image";
import RestaurantLogo from "../../assets/RestaurantLogo.png";

export default function Restaurant() {
  return (
    <div>
      <a target="_blank" href="https://scastanedamunoz.github.io/Project-1/">
        <Image src={RestaurantLogo} thumbnail />
      </a>
    </div>
  );
}
