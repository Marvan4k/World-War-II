import { useState } from 'react';

const Builder = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  const content = {
    timeline: {
      title: 'Лента времени',
      text: 'Следите за ключевыми событиями Второй мировой войны с помощью нашей удобной ленты времени. Каждый момент — это возможность узнать что-то новое и интересное.',
    },
    constructor: {
      title: 'Конструктор блоков',
      text: 'Создавайте собственные исторические блоки, комбинируя различные элементы и материалы для персонализированного изучения истории.',
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
        <button
          onClick={() => setActiveTab('timeline')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'timeline'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-blue-100'
          }`}
        >
          Лента времени
        </button>
        <button
          onClick={() => setActiveTab('constructor')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'constructor'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-blue-100'
          }`}
        >
          Конструктор блоков
        </button>
        <button
          onClick={() => setActiveTab('maps')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'maps'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-blue-100'
          }`}
        >
          Интерактивные карты
        </button>
        <button
          onClick={() => setActiveTab('facts')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'facts'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-blue-100'
          }`}
        >
          Исторические факты
        </button>
      </div>

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
    </div>
  );
};

export default Builder;