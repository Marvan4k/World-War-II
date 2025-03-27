export default function Stats() {
  return (
    <div className="flex justify-around items-center min-h-[400px]">
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl font-bold italic">80</p>
            <p className="text-black text-3xl">лет памяти</p>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl font-bold italic">26 миллионов</p>
            <p className="text-black text-3xl">погибших</p>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl font-bold italic">70</p>
            <p className="text-black text-3xl">тысяч сёл</p>
        </div>
    </div>
  );
}