import * as Styled from "./style";

import { Link } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { useState } from "react";
import { sliderItems } from "../../date";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Styled.Container>
      <Styled.Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Styled.Arrow>
      <Styled.Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Styled.Slide bg={item.bg} key={item.id}>
            <Styled.ImgContainer>
              <Styled.Image src={item.img} />
            </Styled.ImgContainer>
            <Styled.InfoContainer>
              <Styled.Title>{item.title}</Styled.Title>
              <Styled.Desc>{item.desc}</Styled.Desc>
              <Link to={`/products`}>
                <Styled.Button>SHOW NOW</Styled.Button>
              </Link>
            </Styled.InfoContainer>
          </Styled.Slide>
        ))}
      </Styled.Wrapper>

      <Styled.Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Styled.Arrow>
    </Styled.Container>
  );
};
