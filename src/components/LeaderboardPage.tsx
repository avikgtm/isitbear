import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";

type LeaderboardPageProps = {
  onNavigate: (page: "home" | "leaderboard" | "play") => void;
};

const API_BASE = "";

type LeaderboardEntry = {
  id: number;
  player_name: string;
  score: number;
  created_at: string;
};

export function LeaderboardPage({ onNavigate }: LeaderboardPageProps) {
  const [scores, setScores] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScores = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE}/scores`);
        if (!response.ok) {
          throw new Error("Failed to load leaderboard");
        }
        const data = await response.json();
        setScores(data.scores ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchScores();
  }, []);

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
            {isLoading && (
              <div className="h-[70px] flex items-center justify-center border-b border-black last:border-b-0">
                <p className="text-[15px] text-black">Loading scores...</p>
              </div>
            )}
            {error && !isLoading && (
              <div className="h-[70px] flex items-center justify-center border-b border-black last:border-b-0">
                <p className="text-[15px] text-red-600">{error}</p>
              </div>
            )}
            {!isLoading && !error && scores.length === 0 && (
              <div className="h-[70px] flex items-center justify-center border-b border-black last:border-b-0">
                <p className="text-[15px] text-black">No scores yet.</p>
              </div>
            )}
            {!isLoading &&
              !error &&
              scores.map((entry, index) => (
                <div
                  key={entry.id}
                  className="h-[70px] flex items-center border-b border-black last:border-b-0"
                >
                  <div className="flex-1 text-center">
                    <p className="text-[15px] text-black">{index + 1}</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-[15px] text-black">
                      {entry.player_name}
                    </p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-[15px] text-black">{entry.score}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
