export const Homepage = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <div>
          <img src="/src/images/ring.jpg" alt="ring" className="ring" />
          <div className="ringText">
            <h2>Jewelery tells a freat story</h2>
            <div className="ore">
              <div className="oreInfo">
                <span>Gold</span>
                <p>Her prevision acuteness had two why intention</p>
              </div>
              <div className="oreInfo">
                <span>Silver</span>
                <p>Her prevision acuteness had two why intention</p>
              </div>
            </div>
          </div>
        </div>
        {/* <button><a href="#">Explore</a></button> */}

        <div className="secondBlockMain">
          <div className="story">
            <h3>Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
              molestie at amet praesent tortor. Maecenas non tempus at consequat
              ac est varius. Tortor aliquet nulla consequat risus.
            </p>
          </div>
          <div className="playImg">
            <img
              src="/src/images/ring2.jpg"
              alt="ring"
              className="ring ring2"
            />
            <div className="play">
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.5 63C48.897 63 63 48.897 63 31.5C63 14.103 48.897 0 31.5 0C14.103 0 0 14.103 0 31.5C0 48.897 14.103 63 31.5 63ZM23.75 44.9904L47 32L23.75 19.0096V44.9904Z"
                  fill="#7A7A7A"
                />
              </svg>

              <span><a href="#">play Video</a></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container goldBlockContainer">
          <div className="goldBlock">
            <img src="/src/images/bracelet.jpg" alt="bracelet" />
            <div className="goldBlockInfo">
              <h4>Gold Woven Chain Bracelet In Black</h4>
              <p className="goldInfo">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
                molestie at amet praesent tortor. Maecenas non tempus at
                consequat ac est varius. Tortor aliquet nulla consequat risus.
              </p>
              <div className="sizePrice">
                <div className="size">
                  <p>Size</p>
                  <div className="size_block">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                </div>
                <div className="btnPrice">
                  <button className="addBtn">Add to Cart</button>
                  <span className="price">549.29</span>
                </div>
              </div>
            </div>
          </div>
          <div className="goldBlock goldBlock2 reverse">
            <img src="/src/images/ring3.jpg" alt="bracelet" />
            <div className="goldBlockInfo goldBlockInfoPosition">
              <h4>Gold Black Coral Ring</h4>
              <p className="goldInfo">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
                molestie at amet praesent tortor. Maecenas non tempus at
                consequat ac est varius. Tortor aliquet nulla consequat risus.
              </p>
              <div className="sizePrice">
                <div className="size">
                  <p>Size</p>
                  <div className="size_block">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                </div>
                <div className="btnPrice">
                  <button className="addBtn">Add to Cart</button>
                  <span className="price">320.29</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shopContainer">
        <div className="shopInfo">
          <img src="/src/images/ring4.jpg" alt="" />
          <div>
            <h4>J-Shop’s Best Collections</h4>
            <div>
              <span>Comfort</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
                molestie at amet praesent tortor. Maecenas non tempus at
                consequat ac est varius. Tortor aliquet nulla consequat
                risus.consequatconsequat
              </p>
            </div>
          </div>
        </div>
        <div className="shopInfo reverse">
          <img src="/src/images/chain.jpg" alt="gold" />
          <div>
            <h4>100% Gold</h4>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
                molestie at amet praesent tortor. Maecenas non tempus at
                consequat ac est varius. Tortor aliquet nulla consequat
                risus.consequatconsequat
              </p>
            </div>
          </div>
        </div>
        <div className="shopInfo">
          <img src="/src/images/Earring.jpg" alt="gold" />
          <div>
            <h4>Trendy</h4>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
                molestie at amet praesent tortor. Maecenas non tempus at
                consequat ac est varius. Tortor aliquet nulla consequat
                risus.consequatconsequat
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container emailContainer">
        <div className="brands">
          <span>
            <b>Trusted</b> by leading companies
          </span>
          <img src="/src/images/brands.png" alt="" />
        </div>
        <div className="emailBlock">
          <b>Join J-Shop’s Family</b>
          <div>
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Join Family</button>
          </div>
        </div>
      </div>
      <div className="container blogs">
        <h4>Our Blogs</h4>
        <div>
          <div>
            <img src="/src/images/hands.jpg" alt="gold" />
            <div>
              <span>For Beauty</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
                molestie at amet praesent tortor. Maecenas non tempus at
                consequat ac
              </p>
            </div>
          </div>
          <div>
            <img src="/src/images/had.jpg" alt="had" />
            <div>
              <span>Product Quality</span>

              <p>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
                molestie at amet praesent tortor. Maecenas non tempus at
                consequat ac
              </p>
            </div>
          </div>
          <div>
            <img src="/src/images/hands2.jpg" alt="hands" />
            <div>
              <span>For Comfort</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
                molestie at amet praesent tortor. Maecenas non tempus at
                consequat ac
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
