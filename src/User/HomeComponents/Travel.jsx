import React from "react";

function Travel() {
  // Sample data for articles (you can replace it with actual data)
  const articles = [
    {
      id: 1,
      imageUrl:
        "https://vijaykarnataka.com/thumb/111758020/reason-why-you-should-visit-kasol-in-august-2024-111758020.jpg?imgsize=150790&width=700&height=394&resizemode=75",
      title: "ಆಗಸ್ಟ್ ತಿಂಗಳಿನಲ್ಲಿ ಕಸೋಲ್‌ ಪ್ರವಾಸ ಮಾಡಲು ಇಲ್ಲಿವೆ 5 ​​ಕಾರಣಗಳು",
      description:
        "ಅಲ್ಲಿನ ಹವೆಯು ಖಚಿತವಾಗಿದ್ದರೂ, ಕಸೋಲ್‌ನಲ್ಲಿ ನಿಮಗೆ ಸುಂದರ ಮೇರೆ ಬೇಡಾದ ಮರಗಳ ಮುಂದೆ ಸುಂದರವಾಗಿದ್ದಾರೆ.",
    },
    {
      id: 2,
      imageUrl:
        "https://static.langimg.com/thumb/111715105/vijay-karnataka-111715105.jpg?imgsize=303644&width=540&height=304&resizemode=75",
      title: "ಹನಿಮೂನ್‌ ಮಾಡಲು ನೈನಿತಾಲ್‌ ಬೆಸ್ಟ್! ಯಾಕೆ ಅಂತ ಇಲ್ಲಿ ತಿಳಿಯಿರಿ",
      description:
        "ಈ ಪರ್ವತ ನಗರಿಯು ನೈನಿತಾಲ್‌ನಲ್ಲಿ ಹಾರಾಡುತ್ತದೆ ಮತ್ತು ಅಲ್ಲಿ ಹನಿಮೂನ್‌ನ್ನು ಮಾಡಲು ಅನುಕೂಲ ಮತ್ತು ಸುಲಭವಾಗಿದೆ.",
    },
    {
      id: 3,
      imageUrl:
        "https://vijaykarnataka.com/thumb/111609060/avoid-these-6-indian-forts-trekking-in-monsoon-111609060.jpg?imgsize=52922&width=700&height=394&resizemode=75",
      title: "ಮಳೆಗಾಲದಲ್ಲಿ ಅಪ್ಪಿ-ತಪ್ಪಿಯೂ ಈ ಕೋಟೆಗಳಿಗೆ ಟ್ರೆಕ್ಕಿಂಗ್‌ ಮಾಡಬೇಡಿ..!",
      description:
        "ಈ ಮಳೆಗಾಲದಲ್ಲಿ ಕೋಟೆಗಳಿಗೆ ಟ್ರೆಕ್ಕಿಂಗ್‌ ಮಾಡುವುದು ಅತ್ಯಂತ ಹಾನಿಕರವಾದರೂ ಹೀಗೆ ಮಾಡಲು ಮಾಡಲು ಅಂದವಾಗಿದೆ.",
    },
    {
      id: 4,
      imageUrl:
        "https://vijaykarnataka.com/thumb/111573390/visit-these-7-places-in-south-india-during-the-rainy-season-111573390.jpg?imgsize=188438&width=700&height=394&resizemode=75",
      title:
        "ಮಳೆಗಾಲದಲ್ಲಿ ದಕ್ಷಿಣ ಭಾರತದ ಈ 7 ಸ್ಥಳಗಳಿಗೆ ಜನರು ಹೆಚ್ಚಾಗಿ ಪ್ರವಾಸ ಯೋಜಿಸುತ್ತಾರೆ...ಅವು ಹೀಗಿವೆ…",
      description:
        "ದಕ್ಷಿಣ ಭಾರತದಲ್ಲಿ ಮಳೆಗಾಲದಲ್ಲಿ ಸಂತುಷ್ಟಿಯಾದ ದೇಶಗಳಲ್ಲಿ ಈ 7 ಸ್ಥಳಗಳು ಜನರ ಅಭಿಮಾನವನ್ನು ಪ್ರಕಟಿಸುತ್ತವೆ.",
    },
    {
      id: 5,
      imageUrl:
        "https://vijaykarnataka.com/thumb/110455047/110455047.jpg?imgsize=98084&width=700&height=394&resizemode=75",
      title: "ರಾಯಚೂರು: ಓಡಾಟ ನಿಲ್ಲಿಸಿದ ರೈಲು; ದೂರದ ಊರುಗಳಿಗೆ ಬಸ್‌ನಲ್ಲಿ ಪ್ರಯಾಣ",
      description:
        "ರಾಯಚೂರಿನಲ್ಲಿ ಬಹುಪಾಲು ರೈಲು ನಿಲ್ಲುವಂತೆ ಮಾಡಿಕೊಳ್ಳಲಾಯಿತು. ದೂರದ ಊರಿನ ವ್ಯಾಪಾರ ಪ್ರಯಾಣಿಕರಿಗೆ ಮಾತ್ರ ಬಸ್‌ ಸೇವೆ ದೊರಕುವುದಿಲ್ಲ.",
    },
  ];

  return (
    <>
      <div className="md:w-11/12 h-fit w-screen md:m-auto font-sans md:p-0 p-5">
        <h1 className="font-semibold text-3xl my-7">
          Travel <span className="font-medium">⮞</span>
        </h1>
        <div className="md:flex md:space-x-4 md:space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="lg:w-80 space-y-1">
              <img src={article.imageUrl} alt="" className="" />
              <p className="text-sm text-gray-500 font-semibold">
                primary industries
              </p>
              <h1 className="md:text-xl text-base font-bold">
                {article.title}
              </h1>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Travel;
