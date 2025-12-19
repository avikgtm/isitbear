import { Navigation } from "./Navigation";

type LeaderboardPageProps = {
  onNavigate: (page: 'home' | 'leaderboard' | 'play') => void;
};

// Mock leaderboard data - will be replaced with backend data later
const mockLeaderboardData = [
  { ranking: 1, name: "BearFan42", score: 15 },
];

export function LeaderboardPage({ onNavigate }: LeaderboardPageProps) {
  return (
    <div className="bg-white relative size-full overflow-auto">
      <Navigation currentPage="leaderboard" onNavigate={onNavigate} />
      
      <div className="flex flex-col items-center pt-[137px] pb-20 px-4">
        <h1 className="text-[40px] text-black text-center mb-12">
          Leaderboard
        </h1>
        
        <div className="w-[698px] max-w-full">
          {/* Table header */}
          <div className="bg-[#d9d9d9] h-[53px] flex items-center border-b border-black">
            <div className="flex-1 text-center">
              <p className="text-[15px] text-black">
                Ranking
              </p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-[15px] text-black">
                Name
              </p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-[15px] text-black">
                Score
              </p>
            </div>
          </div>
          
          {/* Table body */}
          <div className="bg-[#d9d9d9]">
            {mockLeaderboardData.map((entry, index) => (
              <div 
                key={entry.ranking}
                className="h-[70px] flex items-center border-b border-black last:border-b-0"
              >
                <div className="flex-1 text-center">
                  <p className="text-[15px] text-black">
                    {entry.ranking}
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-[15px] text-black">
                    {entry.name}
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-[15px] text-black">
                    {entry.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}