import { useState } from "react";
import reactLogo from "./assets/react.svg";
import p1 from "./assets/images/logo.svg"
import p2 from "./assets/images/Vector.png";
import p3 from "./assets/images/Group 348.png";
import p4 from "./assets/images/Group 350.png";
import p5 from "./assets/images/Group 346.png";
import p6 from "./assets/images/Group 339.png";
import p7 from "./assets/images/Group 334.png";
import p8 from "./assets/images/Active Button.png";
import p9 from "./assets/images/Group 341.png";
import p10 from "./assets/images/Group 312.png";
import p11 from "./assets/images/Group 319.png";
import p12 from "./assets/images/Group 320.png";
import p13 from "./assets/images/Group 321.png";
import p14 from "./assets/images/Group 322.png";
import p16 from "./assets/images/Group 372.png";
import p17 from "./assets/images/Group 323.png";
import p18 from "./assets/images/Rectangle 189.png";
import p21 from "./assets/images/Rectangle 190.png";
import p22 from "./assets/images/Rectangle 191.png";
import p23 from "./assets/images/Rectangle 192.png";
import p19 from "./assets/images/Group 334.png";
import p20 from "./assets/images/Group 543.png";


import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section>
        <div className="hero">
          <div className="image"></div>
          <div className="hero-left">
            <div className="logo">
              <img className="logo-img" src={p1} alt="" />
              <div className="logo-menu">
                <img className="menu" src={p2} alt="" />
              </div>
            </div>
            <div className="left-group">
              <img
                className="left-group-img"
                src={p3}
                alt=""
              />
              <img
                className="left-group-img"
                src={p4}
                alt=""
              />
              <img
                className="left-group-img"
                src={p5}
                alt=""
              />
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-right-layer">
              <div className="right-top">
                <img src={p6} alt="" />
              </div>
              <div className="right-down">
                <div className="all">
                  <div className="all-left">
                    <h1>The Lord of The Rings</h1>
                    <div className="all-left-first">
                      <img src={p7} alt="" />
                      <p>
                        The Lord of the Rings is a trilogy of epic fantasy
                        adventure films directed.
                      </p>
                      <div className="all-btn">
                        <img src={p8} alt="" />
                        <img src={p9} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="all-right">
                            <div className="item-back">
                                <img className="img" src={p10} alt=""/>
                                <img className="img" src={p11} alt=""/>
                                <img className="img" src={p12} alt=""/>
                                <img className="img-button" src={p16} alt=""/>
                                <img className="img" src={p13} alt=""/>
                                <img className="img" src={p14} alt=""/>
                                <img className="img" src={p17} alt=""/>
                            </div>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="show">
    <div className="show1">
        <div className="img-div">
            <div className="img1div">
                <div className="img2div">
                    <img src={p18} alt=""/>
                    <h3 className="div2p">SAMELILLL SRONLE</h3>
                    <img className="imgimg" src={p19} alt=""/>
                    <p className="div2p">Action Comedy</p>
                </div>  
                <div className="img2div">
                    <img src={p21} alt=""/>
                    <h3 className="div2p">SAMELILLL SRONLE</h3>
                    <img className="imgimg" src={p19} alt=""/>
                    <p className="div2p">Action Comedy</p>
                </div>  
                <div className="img2div">
                    <img src={p22} alt=""/>
                    <h3 className="div2p">SAMELILLL SRONLE</h3>
                    <img className="imgimg" src={p19} alt=""/>
                    <p className="div2p">Action Comedy</p>
                </div>  
                <div className="img2div">
                    <img src={p23} alt=""/>
                    <h3 className="div2p">SAMELILLL SRONLE</h3>
                    <img className="imgimg" src={p19} alt=""/>
                    <p className="div2p">Action Comedy</p>
                </div>  
             
                
              
            </div>
        </div>
    </div>
   </section>
   <section className="newest ">
    <div className="newdiv">
        <img src={p20} alt=""/>
    </div>
   </section>
    </div>
  );
}

export default App;
