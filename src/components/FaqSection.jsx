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
      question: 'Как удалить созданный блок?',
      answer: 'Напишите администраторам на этот email: viteaaaj@gmail.com с просьбой удаления вашего поста. Прикрепите скрин вашего поста и email, с которого его создавали'
    }
  ];

  return (
    <div className="mx-auto p-6 shadow-md min-h-[400px]  max-w-[1280px] w-full">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Часто задаваемые вопросы</h2>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="rounded-lg transition-all duration-200 bg-[#25A18E]">
            <button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="w-full rounded-lg px-4 py-3 text-left flex justify-between items-center hover:bg-[#1d8273]">
              <span className="font-medium text-white">{item.question}</span>
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
              <div className="px-4 py-3 bg-[#1d8273] border-t">
                <p className="text-white leading-relaxed">
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