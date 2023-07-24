import React from "react";

export default function Hero({ HeroName }) {
  if (HeroName === "joker") {
    throw new Error("Not a hero");
  }
  return <div>{HeroName}</div>;
}
