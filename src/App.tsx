import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { PlayPage } from "./components/PlayPage";
import { LeaderboardPage } from "./components/LeaderboardPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'leaderboard' | 'play'>('home');
  const [playerName, setPlayerName] = useState('');
  
  const handleNavigate = (page: 'home' | 'leaderboard' | 'play') => {
    setCurrentPage(page);
  };
  
  return (
    <div className="size-full">
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} playerName={playerName} onPlayerNameChange={setPlayerName} />}
      {currentPage === 'leaderboard' && <LeaderboardPage onNavigate={handleNavigate} />}
      {currentPage === 'play' && <PlayPage onNavigate={handleNavigate} />}
    </div>
  );
}