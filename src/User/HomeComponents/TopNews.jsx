import React from "react";
import Inform from "./Inform";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopNews() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselsData = [
    {
      image:
        "https://images.tv9kannada.com/wp-content/uploads/2024/07/cm-siddaramaiah.jpg?w=1280",
      category: "Politics",
      title:
        "ಸರ್ಕಾರಿ ನೌಕರರಿಗೆ ಗುಡ್​ನ್ಯೂಸ್: ಆ.1 ರಿಂದ 7ನೇ ವೇತನ ಆಯೋಗದ ಶಿಫಾರಸು ಜಾರಿಗೊಳಿಸುವ ತೀರ್ಮಾನ ಪ್ರಕಟಿಸಿದ ಸಿಎಂ",
    },
    {
      image:
        "https://images.tv9kannada.com/wp-content/uploads/2024/07/youth.jpg?w=1280",
      category: "job",
      title: "ವಿಶ್ವ ಯುವ ಕೌಶಲ್ಯ ದಿನವನ್ನು ಆಚರಿಸುವುದು ಏಕೆ? ಏನಿದರ ಮಹತ್ವ?",
    },
    {
      image:
        "https://images.tv9kannada.com/wp-content/uploads/2024/07/digital-india-2.jpg?w=1280",
      category: "business",
      title:
        "ಜಿ20 ಡಿಜಿಟಲ್ ಪಬ್ಲಿಕ್ ಇನ್​ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಟ್ಯಾಸ್ಕ್ ಫೋರ್ಸ್​ನ ಅಂತಿಮ ವರದಿ ಬಿಡುಗಡೆ;",
    },
    {
      image:
        "https://images.tv9kannada.com/wp-content/uploads/2024/07/muharram.jpg?w=1280",
      category: "festival",
      title: "ಹಿಂದೂ ಹಾಗೂ ಮುಸ್ಲಿಮರ ಭಾವೈಕ್ಯತೆಯ ಹಬ್ಬವೇ ‘ಮೊಹರಂ’, ಏನಿದರ ಮಹತ್ವ?",
    },
    {
      image:
        "https://vijaykarnataka.com/thumb/110455047/110455047.jpg?imgsize=98084&width=700&height=394&resizemode=75",
      category: "travel",
      title: "ರಾಯಚೂರು: ಓಡಾಟ ನಿಲ್ಲಿಸಿದ ರೈಲು; ದೂರದ ಊರುಗಳಿಗೆ ಬಸ್‌ನಲ್ಲಿ ಪ್ರಯಾಣ",
    },
  ];

  return (
    <>
      <div className="slider-container w-11/12 mt-5 m-auto ">
        <h1 className="text-3xl font-bold">Top News</h1>
        <div className="-z-50 ">
          <Slider {...settings}>
            {carouselsData.map((carouselsData) => (
              <>
                <div className="mt-4 my-3 p-3 space-x-4 m-auto ml-6 md:ml-0">
                  <div className="card bg-base-100 w-80">
                    <figure>
                      <img
                        src={carouselsData.image}
                        // alt={item.name}
                        // className="w-[400px] rounded "
                        className="w-[400px] rounded hover:scale-105 duration-200"
                      />
                    </figure>
                    <div className="card-body w-fit m-auto mt-2">
                      <p>{carouselsData.category}</p>
                      <h2 className="card-title md:text-lg text-sm font-bold">
                        {carouselsData.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-10 w-full m-auto md:hidden">
        <a href="https://www.amazon.in/b?ie=UTF8&node=1389432031">
          {" "}
          <img
            src="https://www.shutterstock.com/image-vector/3d-vector-conceptual-illustration-mobile-260nw-1828126133.jpg"
            alt="img"
            className="md:h-fit"
          />
        </a>
      </div>
      <Inform />
    </>
  );
}

export default TopNews;
