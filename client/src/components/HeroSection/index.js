import React, { useState } from "react";
// import { Button } from "react-scroll";
import Video from "./video.mp4";
import { ButtonT } from "./ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <span style={{ color: "cyan" , fontSize: "60px"}}> Consistent Cars</span>
        </HeroH1>
        <HeroP style={{ color: "white" , fontSize: "25px"}}>
          IS CONVENIENT TOO
        </HeroP>
        <HeroBtnWrapper>
          <ButtonT
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={() => {
              window.scrollTo({ top: 570, behavior: "smooth" });
            }}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonT>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
