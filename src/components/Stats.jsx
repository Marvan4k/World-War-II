export default function Stats() {
  return (
    <div className="flex justify-around">
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl">80</p>
            <p className="text-black text-3xl">лет памяти</p>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl">26 миллионов</p>
            <p className="text-black text-3xl">погибших</p>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-[#ef233c] font-[sans-serif] text-8xl">70</p>
            <p className="text-black text-3xl">тысяч сёл</p>
        </div>
    </div>
  );
}