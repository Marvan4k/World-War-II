import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: 'Как создать блок с текстом?',
      answer: 'Используйте конструктор блоков в личном кабинете. Выберите тип контента "Текст" и заполните необходимые поля.'
    },
    {
      question: 'Можно ли добавлять картинки?',
      answer: 'Да, в редакторе блоков доступна загрузка изображений. Поддерживаются форматы JPG, PNG и SVG.'
    },
    {
      question: 'Как работает лента времени?',
      answer: 'Лента времени автоматически упорядочивает события хронологически. Вы можете настроить периоды и добавить описания.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Часто задаваемые вопросы</h2>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border rounded-lg transition-all duration-200"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="font-medium text-gray-700">{item.question}</span>
              <span className={`transform transition-transform ${activeIndex === index ? 'rotate-45' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index 
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            }`}>
              <div className="px-4 py-3 bg-gray-50 border-t">
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;