import { useEffect } from 'react'
import Header from './components/Layout/Header'
import LessonSelector from './components/Lesson/LessonSelector'
import PracticeArea from './components/Practice/PracticeArea'
import VirtualKeyboard from './components/Keyboard/VirtualKeyboard'
import LiveStats from './components/Stats/LiveStats'
import { useAppStore } from './store/useAppStore'

function App() {
  const { isLessonStarted, theme } = useAppStore()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {!isLessonStarted ? (
          <LessonSelector />
        ) : (
          <div className="space-y-6">
            <LiveStats />
            <PracticeArea />
            <VirtualKeyboard />
          </div>
        )}
      </main>
      
      <footer className="bg-slate-100 dark:bg-slate-800 py-4 text-center text-sm text-slate-600 dark:text-slate-400">
        <p>TypeWriter - Touch Typing Trainer © 2025</p>
      </footer>
    </div>
  )
}

export default App
