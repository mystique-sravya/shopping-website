import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";

function Carousel() {
  const carouselData = [
    {
      id: 1,
      title: "New Arrivals",
      imageUrl:
        "https://res.cloudinary.com/dzcrtuhn5/image/upload/v1703010331/new-arrivals_cecg9s.jpg",
    },
    {
      id: 2,
      title: "Discount",
      imageUrl:
        "https://res.cloudinary.com/dzcrtuhn5/image/upload/v1703010331/discounts_ogkoev.jpg",
    },
    {
      id: 3,
      title: "Christmas Sale ",
      imageUrl:
        "https://res.cloudinary.com/dzcrtuhn5/image/upload/v1703010332/christmas-sale_cekkm1.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 5, // Adjust the speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.imageUrl} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
