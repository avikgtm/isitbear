type NavigationProps = {
  currentPage: 'home' | 'leaderboard' | 'play';
  onNavigate: (page: 'home' | 'leaderboard' | 'play') => void;
};

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="absolute top-[34px] left-0 right-0 flex items-center justify-between px-8">
      <button
        onClick={() => onNavigate('home')}
        className="text-[20px] text-black hover:opacity-70 transition-opacity"
      >
        Home
      </button>
      
      <div className="flex items-center gap-8">
        <button
          onClick={() => onNavigate('leaderboard')}
          className="text-[20px] text-black hover:opacity-70 transition-opacity"
        >
          Leaderboard
        </button>
        
        <button
          onClick={() => onNavigate('play')}
          className={`text-[20px] px-8 py-2 rounded-[10px] transition-opacity hover:opacity-90 ${
            currentPage === 'play' 
              ? 'bg-black text-white' 
              : 'bg-black text-white'
          }`}
        >
          Play
        </button>
      </div>
    </nav>
  );
}