import React from "react";
import "./Properties.css";

const Properties = () => {
  return (
    <>
      <div className="Properties-container">
        <div className="Properties-paragraph">
          <h1 className="heading">PROPERTIES</h1>
          <p className="p1-h">
            We are dedicated to making your property journey as seamless and
            successful as possible Whatever vour real estate needs, we're here
            to help. you achieve your goals with confidence and ease.
          </p>
        </div>
        <div className="Container">
          <div className="First-container"></div>
          <div className="two-box">
            <div className="box1"></div>
            <div className="box2"></div>
          </div>

          <div className="imagewith2pinkbox">
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2543a13262134edb79bd1c553a113b82fca197d9c13b0514e2a38931dc0d93bf?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
              className="img"
            /> */}
            <style jsx>{`
        .img {
          aspect-ratio: 0.38;
          object-fit: contain;
          object-position: center;
          width: 100%;
          max-width: 380px;
          margin: 0 ;
          margin-left:1138px;
          height:270vh
          margin-top:0px
        }
          @media (max-width: 991px) {
    .img {
     margin-left: 560px;
        height: 200vh;
        width: 226px;
        margin-top: -568px;
    }
  }

  /* Media query for screens smaller than 768px (tablet size) */
  @media (max-width: 768px) {
    .img {
      margin-left: 300px;
      height: 150vh;
      max-width: 100%;
    }
  }

  /* Media query for screens smaller than 480px (mobile size) */
  @media (max-width: 480px) {
    .img {
        margin-left: 242px;
        height: 111vh;
        width: 29%;
    }
  }
      `}</style>
          {/* </div>
          <div className="two-pink">
            <div className="pinkbox1">
              <h3>
                Designing Dreams,Crafting
                <br />
                Comfort.Where Vision
                <br />
                Meets Home
              </h3>
            </div>
            <div className="pinkbox2">
              <h2>
                Transforming
                <br />
                Houses Into
                <br />
                Havens
              </h2>
            </div> */}
          </div>

          <div className="second-container">
            <div className="division">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
                className="imgagg"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
                className="imgagg"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f974093dddcf6a9a33ce78d1e392e0f84b3a47d5559f12c7a4f42883ffbb04?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
                className="imgagg"
              />
            </div>
          </div>
          <div className="div1">
            <div className="div-21">
              <div className="luxury-amenities-for-you">
                Luxury Amenities For You
              </div>
              <div className="div-31">
                <div className="div-41">
                  <div className="column">
                    <div className="div-51">
                      <div className="one">1</div>
                      <div className="pool">POOL</div>
                      <div className="lorem">
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.Libero placeat? Odit aliquam, maiores ducimus
                          perspiciatis cupiditate dolorum sit repellendus nulla?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column-2">
                    <div className="div-61">
                      <div className="two">2</div>
                      <div className="garden-parks">GARDEN & PARKS</div>
                      <div className="lorem">
                        <div className="para">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.Libero, placeat? Odit aliquam, maiores ducimus
                            perspiciatis cupiditate dolorum sit repellendus
                            nulla?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column-3">
                    <div className="div-71">
                      <div className="three">3</div>
                      <div className="sports-club">SPORTS CLUB</div>
                      <div className="lorem ">
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.Libero placeat? Odit aliquam, maiores ducimus
                          perspiciatis cupiditate dolorum sit repellendus nulla?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-3">
          <div className="three-boxes">
            <div className="first-box">
              <div className="interior-design">Interior Design</div>
              <div className="lorem1">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero, placeat? Odit aliquam, maiores ducimus{" "}
              </div>
              <button className="view-more">View More </button>
            </div>
            <div className="first-box">
              <div className="interior-design">Furniture</div>
              <div className="lorem1">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero, placeat? Odit aliquam, maiores ducimus{" "}
              </div>
              <button className="view-more">View More </button>
            </div>
            <div className="first-box">
              <div className="interior-design">Flooring</div>
              <div className="lorem1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero, placeat? Odit aliquam, maiores ducimus{" "}
              </div>
              <button className="view-more">View More </button>
            </div>
          </div>
        </div>
        <div className="find-container">
          <div className="find-perfect">
            <div className="find-Perf-head">
              <h1> Find The </h1>
              <h2>PERFECT HOME</h2>
              <h3>to celebrate a special moment</h3>
            </div>
            
            
            <div className="image">
            <div className="imaggg">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc37f21daa63284a88e3207a2f6ec8daa60e9492b4572a545abd6256f1ccf88?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cc37f21daa63284a88e3207a2f6ec8daa60e9492b4572a545abd6256f1ccf88?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cc37f21daa63284a88e3207a2f6ec8daa60e9492b4572a545abd6256f1ccf88?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cc37f21daa63284a88e3207a2f6ec8daa60e9492b4572a545abd6256f1ccf88?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cc37f21daa63284a88e3207a2f6ec8daa60e9492b4572a545abd6256f1ccf88?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cc37f21daa63284a88e3207a2f6ec8daa60e9492b4572a545abd6256f1ccf88?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cc37f21daa63284a88e3207a2f6ec8daa60e9492b4572a545abd6256f1ccf88?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cc37f21daa63284a88e3207a2f6ec8daa60e9492b4572a545abd6256f1ccf88?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
                className="immg"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
