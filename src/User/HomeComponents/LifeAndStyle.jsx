import React from 'react';

function LifeAndStyle() {
  const articles = [
    {
      src: 'https://images.tv9kannada.com/wp-content/uploads/2024/07/muharram.jpg?w=1280',
      alt: 'Image 1',
      category: 'primary industries',
      title: 'ಹಿಂದೂ ಹಾಗೂ ಮುಸ್ಲಿಮರ ಭಾವೈಕ್ಯತೆಯ ಹಬ್ಬವೇ ‘ಮೊಹರಂ’, ಏನಿದರ ಮಹತ್ವ?',
    },
    {
      src: 'https://images.tv9kannada.com/wp-content/uploads/2024/07/lifestylenews-in-kannada-.jpg?w=1280',
      alt: 'Image 2',
      category: 'primary industries',
      title: 'ಮನೆಯ ಸ್ವಚ್ಛತೆಗೂ ಇರಲಿ ಟೈಮ್ ಟೇಬಲ್, ಸ್ವಚ್ಛತೆ ಹೇಗಿರಬೇಕು? ಇಲ್ಲಿದೆ ನೋಡಿ',
    },
    {
      src: 'https://images.tv9kannada.com/wp-content/uploads/2024/07/whatsapp-image-2024-07-11-at-17.40.29_e85850a7.jpg?w=1280',
      alt: 'Image 3',
      category: 'primary industries',
      title: 'ಜುಲೈ 12 ರಂದೇ ವಿಶ್ವ ಪೇಪರ್ ಬ್ಯಾಗ್ ದಿನವನ್ನು ಆಚರಿಸುವುದು ಏಕೆ? ಇಲ್ಲಿದೆ ಮಾಹಿತಿ',
    },
    {
      src: 'https://images.tv9kannada.com/wp-content/uploads/2024/07/viral-news-in-kannnada-elepent-5.jpg?w=1280',
      alt: 'Image 4',
      category: 'primary industries',
      title: 'ಪೋಷಕರೇ ಮಕ್ಕಳ ಮುಂದೆ ಯಾವತ್ತೂ ಈ ರೀತಿ ನಡೆದುಕೊಳ್ಳಬೇಡಿ',
    },
    {
      src: 'https://images.tv9kannada.com/wp-content/uploads/2024/07/national-fish-farmers-day.jpg?w=1280',
      alt: 'Image 5',
      category: 'primary industries',
      title: 'ರಾಷ್ಟ್ರೀಯ ಮೀನು ಕೃಷಿಕರ ದಿನವನ್ನು ಭಾರತೀಯ ವಿಜ್ಞಾನಿಗಳಿಗೆ ಸಮರ್ಪಿಸುವುದು ಏಕೆ? ಇಲ್ಲಿದೆ ಮಾಹಿತಿ',
    },
  ];

  return (
    <>
      <div className="md:w-11/12 h-fit w-full md:m-auto font-sans md:p-0 p-5">
        <h1 className="font-semibold text-3xl my-7">
          Life And Style <span className="font-medium">⮞</span>
        </h1>
        <div className="md:flex md:space-x-4 md:space-y-0 space-y-4  border-gray-200">
          {articles.map((article, index) => (
            <div key={index} className="lg:w-80 space-y-2 md:border-gray-200 ">
              <img src={article.src} alt={article.alt} className="mb-2" />
              <p className="text-xs text-gray-500 font-semibold uppercase">
                {article.category}
              </p>
              <h1 className="md:text-xl text-base font-bold">
                {article.title}
              </h1>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default LifeAndStyle;
