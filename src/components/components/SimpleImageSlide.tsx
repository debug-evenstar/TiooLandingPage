import SimpleImageSlider from "react-simple-image-slider";
import slide1 from "../../images/sliderimg/slide1.png";
import slide2 from "../../images/sliderimg/slide2.png";

const images = [{ url: slide1 }, { url: slide2 }];

const SimpleImageSlide = () => {
  return (
    <div>
      <SimpleImageSlider
        bgColor={"none"}
        width={496}
        height={304}
        images={images}
        showBullets={true}
        showNavs={false}
        slideDuration={0.5}
        autoPlay={true}
        autoPlayDelay={2.0}
      />
    </div>
  );
};

export default SimpleImageSlide;
