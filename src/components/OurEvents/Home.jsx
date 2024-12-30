import "../../App.css";
import OurEvents1 from "./ourEvents1";
import React from "react";
import CpImage from "./Cp.jpg";
import "./text1.css";
import pImage from "./person.jpg";
import CocImage from "./Coc.jpg";
import wImage from "./WOC.jpg";
import FlImage from "./flames.jpg";
import wmcImage from "./wmc.jpg";
import { Coffee, Bed } from "lucide-react";

const Home = () => {
  return (
    <div>
      <div>
        <OurEvents1 />
      </div>
      <div>
        <img src={CpImage} className="cp-Image" />
      </div>
      <div>
        <img src={pImage} className="p-Image" />
      </div>
      <div>
        <img src={CocImage} className="coc-Image" />
      </div>
      <div>
        <img src={wImage} className="w-Image" />
      </div>
      <div>
        <img src={FlImage} className="fl-Image" />
      </div>
      <div>
        <img src={wmcImage} className="wmc-Image" />
      </div>
      <div className="code">CODE &lt;/&gt;</div>
      <div className="sleep">SLEEP</div>
      <div className="coffee">COFFEE</div>
      <div className="cof">
        <Coffee size={50} />
      </div>
      <div className="bed">
        <Bed size={50} />
      </div>
    </div>
  );
};
export default Home;
