export default function Stats() {
  return (
    <div className="flex justify-around items-center min-h-[400px] max-[1080px]:flex-col max-[1080px]:p-4 max-[1080px]:space-y-10">
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl font-bold italic max-[720px]:text-6xl max-[450px]:text-5xl">80</p>
            <p className="text-black text-3xl max-[450px]:text-2xl">лет памяти</p>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl font-bold italic  max-[720px]:text-6xl max-[450px]:text-5xl max-[450px]:text-center">26 миллионов</p>
            <p className="text-black text-3xl max-[450px]:text-2xl">погибших</p>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl font-bold italic  max-[720px]:text-6xl max-[450px]:text-5xl">70</p>
            <p className="text-black text-3xl max-[450px]:text-2xl">тысяч сёл</p>
        </div>
    </div>
  );
}