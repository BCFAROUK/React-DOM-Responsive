import React from "react";
import "../../compenents/home/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  const Image1 =
    "https://www.callofduty.com/content/dam/activision/callofduty/mw3/master/drops/screencaptures/drop_12_005.jpg";
  const Image2 = "https://mp1st.com/wp-content/uploads/2011/09/load.jpg";
  const Image3 =
    "https://www.gamalive.com/images/screen/17268-call-of-duty-modern-warfare-3-dlc-collection-1.jpg";

  return (
    <div className="container-home">
      <div className="head-page">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 image-size"
              src="http://www.cod-france.com/guides-cod/cod8/images/screenshots/mw3_1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="colored-h3">
                <h3>COMBAT EQUIPMENT</h3>
              </div>
              <p>
                Killstreaks have been replaced by point streaks rewarding both
                kills and objective achievement. They fall into three different
                combat gear categories: Assault, Support, and Specialist.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image-size"
              src="https://www.callofduty.com/content/dam/activision/callofduty/mw3/master/drops/screencaptures/drop_12_005.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="colored-h3">
                <h3>SKILLS</h3>
              </div>
              <p>
                Your weapons improve the more you use them, giving you access to
                additional attachments, reticles and camouflages, as well as new
                skills. These allow you to equip your weapons with useful
                attributes, such as Recoil to reduce bouncing or Impact for
                increased penetration capability.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image-size"
              src="https://j5p5w8p7.rocketcdn.me/wp-content/uploads/2012/02/modern-warfare-3-dlc-ps31.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="colored-h3">
                <h3>MODES & CARTES</h3>
              </div>
              <p>
                The sixteen multiplayer maps have been designed for natural
                movement and intense combat. Each environment presents its own
                difficulties and atmosphere that give each game a renewed
                appeal. And in addition to the classics, discover new game modes
                are emerging.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="middle-page">
        <div className="mw3-cards">
          <div className="mw3-content">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/42690/c3330a875925437d8216949b6571f6e941ba0679.jpg"
              alt=""
            />

            <h3>Call of Duty: Modern Warfare 3 - Multiplayer</h3>
          </div>

          <div className="mw3-stats">
            <div className="mw3-table">
              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Call of Duty®: Modern Warfare® 3</td>
                  </tr>
                  <tr>
                    <td>Developer</td>
                    <td>
                      <a href="#">Infinity Ward</a>,{" "}
                      <a href="#">Sledgehammer</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Supported Systems </td>
                    <td>
                      <i className="fa fa-windows">
                        {" "}
                        Windows 11, 10, 8.1, 8.0, 7 & XP
                      </i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="mw3-ingame">
              {["Dark"].map((variant) => (
                <Card
                  style={{ width: "18rem" }}
                  className="mb-2"
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                >
                  <Card.Img
                    variant="top"
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/42690/header.jpg?t=1659146821"
                  />

                  <Card.Body>
                    <Card.Title>
                      <h1>219</h1>
                    </Card.Title>
                    <Card.Text>
                      <p>In-Game</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
