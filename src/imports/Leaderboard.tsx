import clsx from "clsx";
type LeaderboardHelperProps = {
  additionalClassNames?: string;
};

function LeaderboardHelper({ additionalClassNames = "" }: LeaderboardHelperProps) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center w-[695px]", additionalClassNames)}>
      <div className="flex-none rotate-[359.918deg]">
        <div className="h-0 relative w-[695.001px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 695.001 1">
              <line id="Line 2" stroke="var(--stroke-0, black)" x2="695.001" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Leaderboard() {
  return (
    <div className="bg-white relative size-full" data-name="Leaderboard">
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[40px] text-black text-center text-nowrap top-[137px] translate-x-[-50%]">Leaderboard</p>
      <div className="absolute bg-[#d9d9d9] h-[53px] left-[371px] top-[245px] w-[698px]" />
      <div className="absolute bg-[#d9d9d9] h-[565px] left-[371px] top-[312px] w-[698px]" />
      <div className="absolute h-0 left-[376px] top-[298px] w-[693px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 693 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="693" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[474px] not-italic text-[15px] text-black text-center text-nowrap top-[263px] translate-x-[-50%]">Ranking</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[720px] not-italic text-[15px] text-black text-center text-nowrap top-[263px] translate-x-[-50%]">Name</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[960px] not-italic text-[15px] text-black text-center text-nowrap top-[263px] translate-x-[-50%]">Score</p>
      <LeaderboardHelper additionalClassNames="left-[374px] top-[370px]" />
      <LeaderboardHelper additionalClassNames="left-[374px] top-[441px]" />
      <LeaderboardHelper additionalClassNames="left-[374px] top-[441px]" />
      <LeaderboardHelper additionalClassNames="left-[374px] top-[514px]" />
      <LeaderboardHelper additionalClassNames="left-[371px] top-[587px]" />
      <LeaderboardHelper additionalClassNames="left-[371px] top-[660px]" />
      <LeaderboardHelper additionalClassNames="left-[371px] top-[733px]" />
      <LeaderboardHelper additionalClassNames="left-[371px] top-[806px]" />
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[719.5px] not-italic text-[15px] text-black text-center text-nowrap top-[332px] translate-x-[-50%]">John</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[464.5px] not-italic text-[15px] text-black text-center text-nowrap top-[332px] translate-x-[-50%]">1</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[967px] not-italic text-[15px] text-black text-center text-nowrap top-[332px] translate-x-[-50%]">730</p>
      <div className="absolute bg-black h-[45px] left-[1264px] rounded-[10px] top-[34px] w-[147px]" />
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(50%-645.5px)] not-italic text-[20px] text-black text-center text-nowrap top-[40px] translate-x-[-50%]">Home</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(50%+456.5px)] not-italic text-[20px] text-black text-center text-nowrap top-[40px] translate-x-[-50%]">Leaderboard</p>
      <p className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[normal] left-[calc(50%+617.5px)] not-italic text-[20px] text-center text-nowrap text-white top-[43px] translate-x-[-50%]">Play</p>
    </div>
  );
}