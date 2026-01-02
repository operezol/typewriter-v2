import { Keyboard, Moon, Sun, Volume2, VolumeX } from 'lucide-react'
import { useAppStore } from '../../store/useAppStore'

export default function Header() {
  const { theme, soundEnabled, toggleTheme, toggleSound } = useAppStore()

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Keyboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                TypeWriter
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Touch Typing Trainer
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
            >
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
