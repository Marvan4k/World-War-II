import { useState } from 'react';

const ContentSection = () => {
  const [activeTab, setActiveTab] = useState('constructor');

  const content = {
    constructor: {
      title: 'Конструктор блоков',
      elements: [
        {
          type: 'text',
          content: 'Создайте свои собственные блоки с текстами и изображениями. Легко и просто! Вы можете добавлять и делиться своими находками с друзьями'
        },  
      ]
    },
    maps: {
      title: 'Интерактивные карты',
      text: 'Исследуйте ключевые сражения и перемещения войск с помощью подробных интерактивных карт военных действий.',
    },
    facts: {
      title: 'Исторические факты',
      text: 'Погрузитесь в удивительные и малоизвестные факты о Великой Отечественной войне, подкрепленные архивными документами.',
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4 mb-6">
        <button onClick={() => setActiveTab('constructor')} className={`px-4 py-2 rounded-lg transition-colors ${ activeTab === 'constructor' ? 'bg-blue-600 text-white': 'bg-white text-gray-700 hover:bg-blue-100'}`} >
          Конструктор блоков
        </button>
        <button onClick={() => setActiveTab('maps')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'maps' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-100'}`}>
          Интерактивные карты
        </button>
        <button onClick={() => setActiveTab('facts')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'facts' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-100' }`}>
          Исторические факты
        </button>
      </div>

      {activeTab === 'constructor' ? (
        <div className="animate-fadeIn space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <button className="w-full py-4 px-8 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Создать блок
            </button>
            <p className="text-gray-700 text-lg">
              {content.constructor.elements[0].content}
            </p>
            <>
              <p className="text-gray-600 mb-4">
                
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Подробнее
              </button>
            </>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-800">
            {content[activeTab].title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {content[activeTab].text}
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Подробнее
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentSection;