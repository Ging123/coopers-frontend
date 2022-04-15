import image from "./images/house.jpg";
import image2 from "./images/apartment-3564955_1280.jpg";
import image3 from "./images/40601914752_b116f2cce3_b.jpg";
import image4 from "./images/the-interior-of-the-architecture-mood-lighting.jpg";
import changeImagesAfterTime from "./changeImagesAfterTime";
import { useEffect } from "react";
import "./styles.scss";

const SlideWrapper = () => {
  const src = [ image, image2, image3, image4 ];

  useEffect(() => {
    const interval = setInterval(changeImagesAfterTime, 5000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className='slide-wrapper'>
      { src.map(createImage) }
    </div>
  );
}

function createImage(src:string, index:number) {
  return (
    <img
      alt="it wasn't possible to load"
      className={index === 0 ? "show" : "hide"}
      key={ index }
      src={ src }
    />
  );
}

export default SlideWrapper;