import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import img1 from "../assets/img/astronaut.jpg";
import img2 from "../assets/img/astronaut2.jpg";
import img3 from "../assets/img/astronaut3.jpg";
import img4 from "../assets/img/astronaut4.jpg";
import img5 from "../assets/img/astronaut5.jpg";
import next from "../assets/img/next.png";
import prev from "../assets/img/prev.png";

const img = [
  {
    id: 1,
    image: `${img1}`,
  },
  {
    id: 2,
    image: `${img2}`,
  },
  {
    id: 3,
    image: `${img3}`,
  },
  {
    id: 4,
    image: `${img4}`,
  },
  {
    id: 5,
    image: `${img5}`,
  },
];

const Carousel = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef(null);
  const [slideX, setSlideX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      const width = imageRef.current.offsetWidth;
      setImageWidth(width);
    }
  }, []);

  const toPrev = () => {
    setSlideX((slideX) => (slideX < 0 ? slideX + imageWidth : slideX));
    setActiveIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
  };

  const toNext = () => {
    setSlideX((slideX) => (slideX > -imageWidth * (img.length - 1) ? slideX - imageWidth : 0));
    setActiveIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setSlideX(-index * imageWidth);
    setActiveIndex(index);
  };

  return (
    <BG>
      <div className="title">CAROUSEL</div>
      <SlideWrapper>
        <PrevBtn onClick={()=>{toPrev()}} />
        <Row>
          <Wrap style={{ transform: `translateX(${slideX}px)` }}>
            {img.map((item) => (
              <Card key={item.id}>
                <img ref={imageRef} src={item.image} alt="Astronaut" loading="lazy" />
              </Card>
            ))}
          </Wrap>
        </Row>
        <NextBtn onClick={()=>{toNext()}} />
      </SlideWrapper>
      <Indicators>
        {img.map((item, index) => (
          <IndicatorDot
            key={item.id}
            active={activeIndex === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Indicators>
    </BG>
  );
};

export default Carousel;

const BG = styled.div`
  background-color: #edeeff;
  height: 100vh;
  text-align: center;
  .title {
    padding-top: 30px;
    font-weight: bold;
    font-size: 2.2rem;
    font-family: var(--font-Playfair-Display);
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 70vw;
  height: 77vh;
  overflow-x: hidden;
`;

const Wrap = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  transition: 0.5s;
  float: left;
`;

const Card = styled.div`
  width: 70vw;
  height: 70vh;
  img {
    width: 100%;
    height: 70vh;
    background-size: cover;
  }
`;

const Button = styled.button`
  margin: 10px;
  border: none;
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  cursor: pointer;
`;

const PrevBtn = styled(Button)`
  background-image: url(${prev});
`;

const NextBtn = styled(Button)`
  background-image: url(${next});
`;

const Indicators = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 10px;
  padding: 0;
`;

const IndicatorDot = styled.li`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#000" : "#ccc")};
  margin: 0 5px;
  cursor: pointer;
`;
