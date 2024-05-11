import { useEffect, useState } from "react";
import image1 from '../../../assets/images/libary-1.png';
import image2 from '../../../assets/images/library-2.png';
import image3 from '../../../assets/images/library-3.png';

const PhotoRobbin = () => {
  const [styles, setStyles] = useState<string[]>([
    "z-[300]",
    "z-[200] translate-x-28 -translate-y-20",
    "z-[100] translate-x-60 -translate-y-40",
  ]);


  const photos = [
    image1,image2,image3
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      const temp: string[] = styles.slice();
      const style = temp.pop();
      if (typeof style == "string") {
        temp.unshift(style);
      }
      setStyles(temp);
    }, 5000);

    return () => clearTimeout(interval);
  }, [styles]);

  const images = photos.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Image`}
      className={`transition-all duration-1000 shadow-xl w-10rem sm:w-[20rem] bg-white shadow absolute border rounded ${styles[index]}`}
    />
  ));

  return (
    <div className="relative w-full">
      <div className="flex absolute px-28 transition-all duration-1000">
        {images}
      </div>
    </div>
  );
};

export default PhotoRobbin;
