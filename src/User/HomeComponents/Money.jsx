import React from "react";

function Money() {
  // Data array containing objects with image, title, and description
  const moneyData = [
    {
      imageUrl:
        "https://images.tv9kannada.com/wp-content/uploads/2024/07/digital-india-2.jpg?w=1280",
      category: "primary industries",
      title:
        "ಜಿ20 ಡಿಜಿಟಲ್ ಪಬ್ಲಿಕ್ ಇನ್​ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಟ್ಯಾಸ್ಕ್ ಫೋರ್ಸ್​ನ ಅಂತಿಮ ವರದಿ ಬಿಡುಗಡೆ; ಭಾರತದ ಅದ್ವಿತೀಯ ಯಶಸ್ಸು ಈ ವರದಿಯಲ್ಲಿ ಹೈಲೈಟ್",
    },
    {
      imageUrl:
        "https://static.langimg.com/thumb/111708683/vijay-karnataka-111708683.jpg?imgsize=88428&width=540&height=304&resizemode=75",
      category: "primary industries",
      title:
        "ಎರಡು ತಿಂಗಳಿಂದ ಯಜಮಾನಿ ಖಾತೆಗೆ ಬಾರದ ಗೃಹಲಕ್ಷ್ಮಿ; ಗ್ಯಾರಂಟಿ ಹಣಕ್ಕಾಗಿ ಅಲೆದಾಟ",
    },
    {
      imageUrl:
        "https://vijaykarnataka.com/thumb/111636648/da-111636648.jpg?imgsize=102604&width=700&height=394&resizemode=75",
      category: "primary industries",
      title:
        "ಹಳೆ ಪಿಂಚಣಿ, 8ನೇ ವೇತನ ಆಯೋಗ, ಡಿಎ ಹಿಂಬಾಕಿ: ಬಜೆಟ್‌ಗೆ ಮುನ್ನ ಸರಕಾರಿ ನೌಕರರಿಂದ 7 ಬೇಡಿಕೆ",
    },
    {
      imageUrl:
        "https://images.tv9kannada.com/wp-content/uploads/2024/07/sbi-bank-3.jpg?w=1280",
      category: "primary industries",
      title:
        "ಎಸ್​ಬಿಐನಿಂದ ಒಂದು ತಿಂಗಳ ಅಂತರದಲ್ಲಿ ಎರಡನೇ ಬಾರಿ ಎಂಸಿಎಲ್​ಆರ್ ದರ ಹೆಚ್ಚಳ",
    },
    {
      imageUrl:
        "https://images.tv9kannada.com/wp-content/uploads/2024/07/inflation-2.jpg?w=1280",
      category: "primary industries",
      title:
        "ರೀಟೇಲ್ ಬಳಿಕ ಹೋಲ್​ಸೇಲ್ ಹಣದುಬ್ಬರ ಏರಿಕೆ ಸರದಿ; ಜೂನ್ ತಿಂಗಳಲ್ಲಿ ಶೇ. 3.4ರಷ್ಟು ಡಬ್ಲ್ಯುಪಿಐ ಇನ್​ಫ್ಲೇಶನ್",
    },
  ];

  return (
    <div className="md:w-11/12 h-fit w-screen md:m-auto font-sans md:p-0 p-5">
      <h1 className="font-semibold text-3xl my-7">
        Money <span className="font-medium">⮞</span>
      </h1>
      <div className="md:flex  md:space-x-4 md:space-y-0 space-y-4 ">
        {moneyData.map((item, index) => (
          <div key={index} className="lg:w-80 space-y-1">
            <img src={item.imageUrl} alt="" className="" />
            <p className="text-sm text-gray-500 font-semibold">
              {item.category}
            </p>
            <h1 className="md:text-xl text-base font-bold">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          src="https://tpc.googlesyndication.com/simgad/8924069116659826988"
          alt="img"
        />
      </div>
    </div>
  );
}

export default Money;
