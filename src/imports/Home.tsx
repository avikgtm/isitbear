import imgDuck from "../assets/360_F_764845724_6zL7rCEhxk9olCJJpPGNf8hRWTFqfHGZ.jpg";

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <div className="absolute bg-black h-[45px] left-[1264px] rounded-[10px] top-[34px] w-[147px]" />
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(50%-645.5px)] not-italic text-[20px] text-black text-center text-nowrap top-[40px] translate-x-[-50%]">Home</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(50%+456.5px)] not-italic text-[20px] text-black text-center text-nowrap top-[40px] translate-x-[-50%]">Leaderboard</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(50%+617.5px)] not-italic text-[20px] text-center text-nowrap text-white top-[43px] translate-x-[-50%]">Play</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[80px] text-black text-center text-nowrap top-[122px] translate-x-[-50%]">Is it duck?</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(50%-0.5px)] not-italic text-[40px] text-black text-center text-nowrap top-[702px] translate-x-[-50%]">How to play:</p>
      <ol className="absolute block font-['Comic_Sans_MS:Regular',sans-serif] leading-[0] left-[calc(50%-0.5px)] list-decimal list-inside not-italic text-[30px] text-black text-center text-nowrap top-[775px] translate-x-[-50%]" start="1">
        <li className="mb-0 ms-[45px]">
          <span className="leading-[normal]">Press play</span>
        </li>
        <li className="mb-0 ms-[45px]">
          <span className="leading-[normal]">Look at picture</span>
        </li>
        <li className="ms-[45px]">
          <span className="leading-[normal]">Is it duck? Yes or no</span>
        </li>
      </ol>
      <div className="absolute h-[420px] left-[405px] top-[250px] w-[630px]" data-name="duck">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDuck} />
      </div>
      <div className="absolute flex h-[185.618px] items-center justify-center left-[calc(50%+222.61px)] top-[419px] translate-x-[-50%] w-[91.223px]" style={{ "--transform-inner-width": "71.03125", "--transform-inner-height": "147" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.035deg]">
          <p className="font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] not-italic relative text-[127.723px] text-center text-nowrap text-white">?</p>
        </div>
      </div>
    </div>
  );
}
