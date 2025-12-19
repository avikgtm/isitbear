import imgBear from "figma:asset/c65c5ccaff861a990e5ffd66a937a49315842435.png";
import { Navigation } from "./Navigation";

type HomePageProps = {
  onNavigate: (page: 'home' | 'leaderboard' | 'play') => void;
  playerName: string;
  onPlayerNameChange: (name: string) => void;
};

export function HomePage({ onNavigate, playerName, onPlayerNameChange }: HomePageProps) {
  return (
    <div className="bg-white relative size-full overflow-auto">
      <Navigation currentPage="home" onNavigate={onNavigate} />
      
      <div className="flex flex-col items-center pt-[122px] pb-20 px-4">
        <h1 className="text-[80px] text-black text-center mb-6">
          Is it bear?
        </h1>
        
        <div className="relative w-[630px] h-[420px] max-w-full mb-12">
          <img 
            alt="Bear example" 
            className="w-full h-full object-cover" 
            src={imgBear} 
          />
          <div className="absolute right-[100px] top-1/2 -translate-y-1/2">
            <p 
              className="text-[127.723px] text-white rotate-[8deg]"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              ?
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-[40px] text-black mb-8">
            How to play:
          </h2>
          
          <ol className="text-[30px] text-black list-decimal list-inside space-y-2">
            <li>
              <span>Press play</span>
            </li>
            <li>
              <span>Look at picture</span>
            </li>
            <li>
              <span>Is it bear? Yes or no</span>
            </li>
          </ol>
        </div>
        
        <div className="mt-10">
          <label className="text-[30px] text-black mr-4">
            Player Name:
          </label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => onPlayerNameChange(e.target.value)}
            className="text-[30px] text-black border-2 border-black px-2 py-1"
          />
        </div>
      </div>
    </div>
  );
}