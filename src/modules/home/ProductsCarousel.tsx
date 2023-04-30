import { Carousel } from "react-responsive-carousel";
import { carouselImages } from "./utils/mockedData";

export const ProductsCarousel = () => {
  const images = carouselImages.map((image) => {
    return (
      <img
        key={image.id}
        src={image.image}
        alt={image.alt}
        className="w-full h-96 object-cover"
      />
    );
  });

  return (
    <div className="w-full max-w-6xl mx-auto mb-5">
      <h1 className="title">Ofertas y promociones</h1>
      <div className="w-full max-w-6xl mx-auto mb-5 px-10 xl:px-0">
        <Carousel
          autoPlay
          dynamicHeight
          infiniteLoop
          interval={3000}
          showArrows
          showStatus={false}
          showThumbs={false}
        >
          {images}
        </Carousel>
      </div>
    </div>
  );
};
