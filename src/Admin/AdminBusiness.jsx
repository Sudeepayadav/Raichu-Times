import React from 'react';

const businessData = [
  {
    imgSrc: "https://vijaykarnataka.com/thumb/111632258/mb-patil-111632258.jpg?imgsize=143172&width=700&height=394&resizemode=75",
    alt: "Image 1",
    category: "primary industries",
    title: "ಜಪಾನ್, ಕೊರಿಯಾ ಕಂಪನಿಗಳಿಂದ ರಾಜ್ಯದಲ್ಲಿ ₹6,450 ಕೋಟಿ ಹೂಡಿಕೆ, ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು ಉದ್ಯೋಗ ಸೃಷ್ಟಿ",
  },
  {
    imgSrc: "https://vijaykarnataka.com/thumb/111604228/modi-naidu-nitish-111604228.jpg?imgsize=48620&width=700&height=394&resizemode=75",
    alt: "Image 2",
    category: "primary industries",
    title: "ಬಜೆಟ್‌ನಲ್ಲಿ ₹30,000 ಕೋಟಿ ಅನುದಾನಕ್ಕೆ ಜೆಡಿಯು ಬೇಡಿಕೆ, ಟಿಡಿಪಿಯಿಂದಲೂ ಡಿಮ್ಯಾಂಡ್‌, ಮೋದಿ ಸುಸ್ತು!",
  },
  {
    imgSrc: "https://images.tv9kannada.com/wp-content/uploads/2024/07/money-1.jpg?w=1280",
    alt: "Image 3",
    category: "primary industries",
    title: "ಹಣದ ಮೌಲ್ಯ ಇವತ್ತೇ ಬೇರೆ ನಾಳೆಯೇ ಬೇರೆ; ಭವಿಷ್ಯಕ್ಕೆ ಎಷ್ಟು ಹಣ ಬೇಕಾಗಬಹುದು? ಇಲ್ಲಿದೆ ಸಿಂಪಲ್ ಸೂತ್ರ",
  },
  {
    imgSrc: "https://images.tv9kannada.com/wp-content/uploads/2024/07/rupee-dollar-1.jpg?w=1280",
    alt: "Image 4",
    category: "primary industries",
    title: "ಭಾರತದ ಫಾರೆಕ್ಸ್ ರಿಸರ್ವ್ಸ್ 657 ಬಿಲಿಯನ್ ಡಾಲರ್​ಗೆ ಏರಿಕೆ; ಹೊಸ ದಾಖಲೆ ಬರೆದ ವಿದೇಶೀ ವಿನಿಮಯ ಮೀಸಲು ನಿಧಿ",
  },
  {
    imgSrc: "https://images.tv9kannada.com/wp-content/uploads/2024/07/credit-card-swipe.jpg?w=1280",
    alt: "Image 5",
    category: "primary industries",
    title: "ವಿದೇಶಗಳಲ್ಲಿ 7 ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ವೆಚ್ಚಕ್ಕೆ ಶೇ. 20 ಟಿಸಿಎಸ್; ಬಜೆಟ್​ನಲ್ಲಿ ಘೋಷಣೆ ಸಾಧ್ಯತೆ",
  },
  {
    imgSrc: "https://images.tv9kannada.com/wp-content/uploads/2024/07/money-1.jpg?w=1280",
    alt: "Image 3",
    category: "primary industries",
    title: "ಹಣದ ಮೌಲ್ಯ ಇವತ್ತೇ ಬೇರೆ ನಾಳೆಯೇ ಬೇರೆ; ಭವಿಷ್ಯಕ್ಕೆ ಎಷ್ಟು ಹಣ ಬೇಕಾಗಬಹುದು? ಇಲ್ಲಿದೆ ಸಿಂಪಲ್ ಸೂತ್ರ",
  },
  {
    imgSrc: "https://images.tv9kannada.com/wp-content/uploads/2024/07/rupee-dollar-1.jpg?w=1280",
    alt: "Image 4",
    category: "primary industries",
    title: "ಭಾರತದ ಫಾರೆಕ್ಸ್ ರಿಸರ್ವ್ಸ್ 657 ಬಿಲಿಯನ್ ಡಾಲರ್​ಗೆ ಏರಿಕೆ; ಹೊಸ ದಾಖಲೆ ಬರೆದ ವಿದೇಶೀ ವಿನಿಮಯ ಮೀಸಲು ನಿಧಿ",
  },
  {
    imgSrc: "https://images.tv9kannada.com/wp-content/uploads/2024/07/credit-card-swipe.jpg?w=1280",
    alt: "Image 5",
    category: "primary industries",
    title: "ವಿದೇಶಗಳಲ್ಲಿ 7 ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ವೆಚ್ಚಕ್ಕೆ ಶೇ. 20 ಟಿಸಿಎಸ್; ಬಜೆಟ್​ನಲ್ಲಿ ಘೋಷಣೆ ಸಾಧ್ಯತೆ",
  },
];

function AdminBusiness() {
  return (
    <div className="md:w-11/12 h-fit w-screen md:m-auto font-sans md:p-0 p-5">
      <h1 className="font-semibold text-3xl my-7">
        Business <span className="font-medium">⮞</span>
      </h1>
      <div className="flex gap-4">
        {businessData.map((item, index) => (
          <div key={index} className="w-80 space-y-1">
            <img src={item.imgSrc} alt={item.alt} className="" />
            <p className="text-xs text-gray-500 font-semibold uppercase">
              {item.category}
            </p>
            <h1 className="md:text-xl text-base font-bold">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminBusiness;
