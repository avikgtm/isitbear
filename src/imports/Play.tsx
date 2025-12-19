export default function Play() {
  return (
    <div className="bg-white relative size-full" data-name="Play">
      <div className="absolute bg-black h-[45px] left-[calc(82.35%+78.12px)] rounded-[10px] top-[34px] w-[147px]" />
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[40px] text-black text-center text-nowrap top-[calc(12.5%+77px)] translate-x-[-50%]">Is it bear?</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(5.88%-10.21px)] not-italic text-[20px] text-black text-center text-nowrap top-[40px] translate-x-[-50%]">Home</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(79.41%+32.97px)] not-italic text-[20px] text-black text-center text-nowrap top-[40px] translate-x-[-50%]">Leaderboard</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(91.18%+24.56px)] not-italic text-[20px] text-center text-nowrap text-white top-[43px] translate-x-[-50%]">Play</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[30px] text-black text-center text-nowrap top-[calc(75%+12px)] translate-x-[-50%]">score:</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[40px] text-black text-center text-nowrap top-[calc(75%+54px)] translate-x-[-50%]">XX</p>
      <div className="absolute bg-[#85d87a] h-[58px] left-[calc(29.41%+59.47px)] rounded-[20px] top-[calc(62.5%+37px)] w-[210px]" />
      <div className="absolute bg-[#ef5959] h-[58px] left-[calc(47.06%+68.35px)] rounded-[20px] top-[calc(62.5%+37px)] w-[210px]" />
      <div className="absolute bg-[#d9d9d9] h-[354px] left-[calc(29.41%+41.47px)] top-[calc(25%+19px)] w-[517px]" />
      <div className="absolute flex flex-col font-['Comic_Sans_MS:Regular',sans-serif] justify-center leading-[0] left-[calc(41.18%-5.44px)] not-italic text-[32.381px] text-center text-nowrap text-white top-[calc(62.5%+59.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal]">yes</p>
      </div>
      <div className="absolute flex flex-col font-['Comic_Sans_MS:Regular',sans-serif] justify-center leading-[0] left-[calc(58.82%+3.44px)] not-italic text-[32.381px] text-center text-white top-[calc(62.5%+59.5px)] translate-x-[-50%] translate-y-[-50%] w-[51px]">
        <p className="leading-[normal]">no</p>
      </div>
    </div>
  );
}