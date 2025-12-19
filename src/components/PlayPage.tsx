import { useState } from "react";
import { Navigation } from "./Navigation";

type PlayPageProps = {
  onNavigate: (page: 'home' | 'leaderboard' | 'play') => void;
};

export function PlayPage({ onNavigate }: PlayPageProps) {
  const [score, setScore] = useState(0);
  
  const handleAnswer = (answer: 'yes' | 'no') => {
    // Placeholder for game logic - backend will handle this later
    console.log(`User answered: ${answer}`);
    // For now, just increment score as placeholder
    setScore(prev => prev + 1);
  };
  
  return (
    <div className="bg-white relative size-full overflow-auto">
      <Navigation currentPage="play" onNavigate={onNavigate} />
      
      <div className="flex flex-col items-center pt-[160px] pb-20 px-4">
        <h1 className="text-[40px] text-black text-center mb-12">
          Is it bear?
        </h1>
        
        {/* Image placeholder - will be replaced with actual bear/not-bear images from backend */}
        <div className="bg-[#d9d9d9] w-[517px] h-[354px] max-w-full mb-8 flex items-center justify-center">
          <p className="text-[20px] text-gray-500 text-center px-4">
            Image will be loaded here from backend
          </p>
        </div>
        
        {/* Answer buttons */}
        <div className="flex gap-8 mb-12">
          <button
            onClick={() => handleAnswer('yes')}
            className="bg-[#85d87a] hover:bg-[#75c86a] transition-colors rounded-[20px] w-[210px] h-[58px] text-[32px] text-white"
          >
            yes
          </button>
          
          <button
            onClick={() => handleAnswer('no')}
            className="bg-[#ef5959] hover:bg-[#df4949] transition-colors rounded-[20px] w-[210px] h-[58px] text-[32px] text-white"
          >
            no
          </button>
        </div>
        
        {/* Score display */}
        <div className="text-center">
          <p className="text-[30px] text-black">
            score:
          </p>
          <p className="text-[40px] text-black">
            {score.toString().padStart(2, '0')}
          </p>
        </div>
      </div>
    </div>
  );
}