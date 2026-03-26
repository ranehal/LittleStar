'use client';

import React, { useState } from 'react';
import { themes, levels } from '../../packages/shared/themes';
import { Star, Settings, BookOpen, Target, Palette, Smartphone, Monitor } from 'lucide-react';

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState('verdant');
  const [isMobileView, setIsMobileView] = useState(false);
  const theme = (themes as any)[currentTheme];

  return (
    <main 
      className="min-h-screen transition-colors duration-500 flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      {/* Star Field Placeholder */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}
      </div>

      <div className={`z-10 w-full space-y-8 transition-all duration-500 ${isMobileView ? 'max-w-md border-x border-opacity-20 p-6 rounded-3xl shadow-2xl' : 'max-w-4xl'}`}
           style={isMobileView ? { borderColor: theme.accent, backgroundColor: `${theme.bg}CC` } : {}}>
        
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Star className="w-8 h-8" style={{ color: theme.accent }} />
            <h1 className={`${isMobileView ? 'text-xl' : 'text-3xl'} font-bold tracking-tighter`}>Little Star</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileView(!isMobileView)}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
              title={isMobileView ? "Switch to Web View" : "Switch to Mobile View"}
            >
              {isMobileView ? <Monitor size={20} /> : <Smartphone size={20} />}
            </button>
            <BookOpen className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
            <Settings className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
          </div>
        </header>

        <section className={`grid gap-6 ${isMobileView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          <div 
            className="p-8 rounded-3xl border transition-all duration-300"
            style={{ backgroundColor: theme.card, borderColor: `${theme.accent}33` }}
          >
            <h2 className="text-2xl font-semibold mb-4">Start Learning</h2>
            <div className="grid grid-cols-3 gap-3">
              {levels.map(level => (
                <button 
                  key={level}
                  className="py-2 rounded-xl text-center text-sm font-medium border border-transparent transition-all active:scale-95"
                  style={{ backgroundColor: `${theme.accent}22`, color: theme.accent }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div 
            className="p-8 rounded-3xl border transition-all duration-300"
            style={{ backgroundColor: theme.card, borderColor: `${theme.accent}33` }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-5 h-5" style={{ color: theme.accent }} />
              <h2 className="text-2xl font-semibold">Themes</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(themes).map(t => (
                <button 
                  key={t}
                  onClick={() => setCurrentTheme(t)}
                  className={`py-2 px-4 rounded-xl text-left text-sm font-medium transition-all ${currentTheme === t ? 'ring-2' : ''}`}
                  style={{ 
                    backgroundColor: (themes as any)[t].bg, 
                    color: (themes as any)[t].text,
                    ringColor: (themes as any)[t].accent
                  }}
                >
                  {(themes as any)[t].name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <footer className="text-center opacity-50 text-sm">
          <p>© 2026 Little Star. Made with love (and banglish commits).</p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </main>
  );
}
