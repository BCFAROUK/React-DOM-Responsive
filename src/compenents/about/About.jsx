import React from "react";
import "../../compenents/about/about.css";

const About = () => {
  const Background =
    "https://cdn.quotesgram.com/img/48/93/10809623-19185-desktop-wallpapers-cod-mw3.jpg";
  return (
    <div className="container-about">
      <div className="about-background">
        <img src={Background} alt="" />
      </div>
      <div className="about-description">
        <h3>CALL OF DUTY</h3>
        <h1>MW3</h1>
        <p>
          Modern Warfare est de retour. La série de jeux d'action à la première
          personne la plus populaire de tous les temps revient avec la suite
          épique de Call of Duty®: Modern Warfare 2, récompensé de plusieurs
          titres de Jeu de l'Année.
        </p>
      </div>
    </div>
  );
};

export default About;
