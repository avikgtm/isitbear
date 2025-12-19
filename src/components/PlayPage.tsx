import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";

type PlayPageProps = {
  onNavigate: (page: "home" | "leaderboard" | "play") => void;
  playerName: string;
};

const API_BASE = "";

type GameResponse = {
  url?: string;
  finished: boolean;
  score: number;
};

export function PlayPage({ onNavigate, playerName }: PlayPageProps) {
  const [score, setScore] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startGame = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/game/start`);
      if (!response.ok) {
        throw new Error("Failed to start game");
      }
      const data = (await response.json()) as GameResponse;
      setScore(data.score ?? 0);
      setIsFinished(Boolean(data.finished));
      if (data.url) {
        setImageUrl(`${API_BASE}${data.url}`);
      } else {
        setImageUrl(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  const saveScore = async (finalScore: number) => {
    const trimmedName = playerName.trim();
    const resolvedName = trimmedName.length > 0 ? trimmedName : "Anonymous";
    try {
      await fetch(`${API_BASE}/scores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player_name: resolvedName, score: finalScore }),
      });
    } catch (err) {
      console.error("Failed to save score", err);
    }
  };

  const handleAnswer = async (answer: "yes" | "no") => {
    if (isFinished || isLoading) {
      return;
    }
    setIsLoading(true);
    setError(null);
    const choice = answer === "yes" ? "duck" : "not_duck";
    try {
      const response = await fetch(`${API_BASE}/game/guess`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit guess");
      }
      const data = (await response.json()) as GameResponse;
      setScore(data.score ?? 0);
      setIsFinished(Boolean(data.finished));
      if (data.finished) {
        await saveScore(data.score ?? 0);
      }
      if (data.url) {
        setImageUrl(`${API_BASE}${data.url}`);
      } else {
        setImageUrl(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-white relative size-full overflow-auto">
      <Navigation currentPage="play" onNavigate={onNavigate} />
      
      <div className="flex flex-col items-center pt-[160px] pb-20 px-4">
        <h1 className="text-[40px] text-black text-center mb-12">
          Is it bear?
        </h1>
        
        <div className="bg-[#d9d9d9] w-[517px] h-[354px] max-w-full mb-8 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img
              alt="Game prompt"
              className="w-full h-full object-cover"
              src={imageUrl}
            />
          ) : (
            <p className="text-[20px] text-gray-500 text-center px-4">
              {isLoading ? "Loading image..." : "Image unavailable"}
            </p>
          )}
        </div>
        
        {/* Answer buttons */}
        <div className="flex gap-8 mb-12">
          <button
            onClick={() => handleAnswer('yes')}
            className="bg-[#85d87a] hover:bg-[#75c86a] transition-colors rounded-[20px] w-[210px] h-[58px] text-[32px] text-white disabled:opacity-60"
            disabled={isLoading || isFinished}
          >
            yes
          </button>
          
          <button
            onClick={() => handleAnswer('no')}
            className="bg-[#ef5959] hover:bg-[#df4949] transition-colors rounded-[20px] w-[210px] h-[58px] text-[32px] text-white disabled:opacity-60"
            disabled={isLoading || isFinished}
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

        {error && (
          <p className="text-[16px] text-red-600 mt-6">{error}</p>
        )}

        {isFinished && (
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-[24px] text-black">Game over!</p>
            <div className="flex gap-4">
              <button
                onClick={startGame}
                className="bg-black text-white px-6 py-2 rounded-[10px] text-[18px]"
              >
                Play again
              </button>
              <button
                onClick={() => onNavigate("leaderboard")}
                className="border border-black px-6 py-2 rounded-[10px] text-[18px]"
              >
                Leaderboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
