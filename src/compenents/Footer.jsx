import React from "react";
import "../compenents/footer.css";

const Footer = () => {
  const Activision =
    "https://www.callofduty.com/content/dam/atvi/global/studio-logos/activision-footer.png";
  const Infinityward =
    "https://www.callofduty.com/content/dam/atvi/callofduty/hub/touch-ui/common/footer-logo-infinity-ward.svg";

  const Pegi =
    "https://www.callofduty.com/content/dam/atvi/global/ratings/pegi/pegi-18.jpg";

  const FRlogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/2560px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png";
  return (
    <div className="container-footer">
      <div className="content-footer">
        <div className="logos">
          <img src={Activision} alt="" className="logo-act" />
          <img src={Infinityward} alt="" className="logo-inf" />
        </div>
        <div className="mid-logo">
          <img src={Pegi} alt="" className="logo-pegi" />
        </div>

        <div className="footer-description">
          <img src={FRlogo} alt="" className="logo-fr" />
          <a href="">MENTIONS LÉGALES</a>
          <a href="">CONDITIONS D'UTILISATION</a>
          <a href="">ASSISTANCE</a>
          <a href="">POLITIQUE DE CONFIDENTIALITÉ</a>
          <a href=""> POLITIQUE D'UTILISATION DES COOKIES</a>
          <a href="">PARAMÈTRES DES COOKIES</a>

          <p>
            © 2021 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, MODERN
            WARFARE, CALL OF DUTY MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL
            OF DUTY GHOSTS, CALL OF DUTY ADVANCED WARFARE, CALL OF DUTY INFINITE
            WARFARE, et le logo CALL OF DUTY WORLD LEAGUE sont des marques
            commerciales d'Activision Publishing, Inc. Toutes les autres marques
            et tous les autres noms de marque appartiennent à leurs
            propriétaires respectifs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
