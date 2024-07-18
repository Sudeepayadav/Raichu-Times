import React from 'react';

function Business() {
  // Define an array of objects containing image URLs and headlines
  const newsItems = [
    {
      imageUrl:
        'https://vijaykarnataka.com/thumb/111632258/mb-patil-111632258.jpg?imgsize=143172&width=700&height=394&resizemode=75',
      headline:
        'ಜಪಾನ್, ಕೊರಿಯಾ ಕಂಪನಿಗಳಿಂದ ರಾಜ್ಯದಲ್ಲಿ ₹6,450 ಕೋಟಿ ಹೂಡಿಕೆ, ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು ಉದ್ಯೋಗ ಸೃಷ್ಟಿ'
    },
    {
      imageUrl:
        'https://vijaykarnataka.com/thumb/111604228/modi-naidu-nitish-111604228.jpg?imgsize=48620&width=700&height=394&resizemode=75',
      headline:
        'ಬಜೆಟ್‌ನಲ್ಲಿ ₹30,000 ಕೋಟಿ ಅನುದಾನಕ್ಕೆ ಜೆಡಿಯು ಬೇಡಿಕೆ, ಟಿಡಿಪಿಯಿಂದಲೂ ಡಿಮ್ಯಾಂಡ್‌, ಮೋದಿ ಸುಸ್ತು!'
    },
    {
      imageUrl:
        'https://images.tv9kannada.com/wp-content/uploads/2024/07/money-1.jpg?w=1280',
      headline:
        'ಹಣದ ಮೌಲ್ಯ ಇವತ್ತೇ ಬೇರೆ ನಾಳೆಯೇ ಬೇರೆ; ಭವಿಷ್ಯಕ್ಕೆ ಎಷ್ಟು ಹಣ ಬೇಕಾಗಬಹುದು? ಇಲ್ಲಿದೆ ಸಿಂಪಲ್ ಸೂತ್ರ'
    },
    {
      imageUrl:
        'https://images.tv9kannada.com/wp-content/uploads/2024/07/rupee-dollar-1.jpg?w=1280',
      headline:
        'ಭಾರತದ ಫಾರೆಕ್ಸ್ ರಿಸರ್ವ್ಸ್ 657 ಬಿಲಿಯನ್ ಡಾಲರ್​ಗೆ ಏರಿಕೆ; ಹೊಸ ದಾಖಲೆ ಬರೆದ ವಿದೇಶೀ ವಿನಿಮಯ ಮೀಸಲು ನಿಧಿ'
    },
    {
      imageUrl:
        'https://images.tv9kannada.com/wp-content/uploads/2024/07/credit-card-swipe.jpg?w=1280',
      headline:
        'ವಿದೇಶಗಳಲ್ಲಿ 7 ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ವೆಚ್ಚಕ್ಕೆ ಶೇ. 20 ಟಿಸಿಎಸ್; ಬಜೆಟ್​ನಲ್ಲಿ ಘೋಷಣೆ ಸಾಧ್ಯತೆ'
    }
  ];

  return (
    <div className="md:w-11/12 h-fit w-screen md:m-auto font-sans md:p-0 p-5">
      <h1 className="font-semibold text-3xl my-7">
        Business <span className="font-medium">⮞</span>
      </h1>
      <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 ">
        {newsItems.map((item, index) => (
          <div key={index} className="lg:w-80 space-y-1">
            <img src={item.imageUrl} alt="" className="" />
            <p className="text-xs text-gray-500 font-semibold uppercase">
              primary industries
            </p>
            <h1 className="md:text-xl text-base font-bold">{item.headline}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Business;
