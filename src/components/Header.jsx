export default function Header() {
  return (
    <header className="bg-[#00161D] text-white fixed w-full">
      <nav className="max-w-[1280px] mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="hover:text-[#25A18E] py-2 transition-colors font-medium text-2xl">История</a>
        <div className="flex space-x-8 font-medium">
          <a href="#" className="hover:text-[#25A18E] py-2 transition-colors text-2xl">Лента времени</a>
          <a href="#" className="hover:text-[#25A18E] py-2 transition-colors text-2xl">Исторические факты</a>
          <a href="#" className="hover:text-[#25A18E] py-2 transition-colors text-2xl">Интерактивные карты</a>  
        </div>
        <button className="bg-[#25A18E] text-white px-6 py-2 rounded-sm hover:bg-[#1d8273] font-medium transition-colors cursor-pointer text-2xl">
          Авторизоваться
        </button>
      </nav>
    </header>
  );
}