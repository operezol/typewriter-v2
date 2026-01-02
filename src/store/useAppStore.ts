import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Lesson } from '../types/lesson'
import type { TypingStats, SessionHistory } from '../types/stats'
import { lessons } from '../data/lessons'
import type { Quote } from '../services/quoteService'
import { fetchRandomQuote } from '../services/quoteService'

interface AppState {
  // Lesson state
  currentLesson: Lesson | null
  isLessonStarted: boolean
  currentExerciseIndex: number
  
  // Quote state (for quote-type lessons)
  currentQuote: Quote | null
  isLoadingQuote: boolean
  
  // Typing state
  currentText: string
  typedText: string
  currentCharIndex: number
  
  // Stats state
  stats: TypingStats
  sessionHistory: SessionHistory[]
  
  // Settings
  theme: 'light' | 'dark'
  soundEnabled: boolean
  
  // Actions
  startLesson: (lessonId: number) => void
  endLesson: () => void
  resetLesson: () => void
  loadNextQuote: () => Promise<void>
  updateTypedText: (text: string) => void
  updateStats: (stats: Partial<TypingStats>) => void
  toggleTheme: () => void
  toggleSound: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentLesson: null,
      isLessonStarted: false,
      currentExerciseIndex: 0,
      currentQuote: null,
      isLoadingQuote: false,
      currentText: '',
      typedText: '',
      currentCharIndex: 0,
      
      stats: {
        wpm: 0,
        cpm: 0,
        accuracy: 100,
        errors: 0,
        correctChars: 0,
        totalChars: 0,
        timeElapsed: 0,
      },
      
      sessionHistory: [],
      theme: 'light',
      soundEnabled: true,
      
      // Actions
      startLesson: async (lessonId: number) => {
        const lesson = lessons.find(l => l.id === lessonId)
        if (!lesson) return
        
        // Check if this is a quote-type lesson
        const isQuoteLesson = lesson.exercises[0]?.type === 'quote'
        
        if (isQuoteLesson) {
          set({ isLoadingQuote: true })
          const quote = await fetchRandomQuote()
          set({
            currentLesson: lesson,
            isLessonStarted: true,
            currentExerciseIndex: 0,
            currentQuote: quote,
            currentText: quote.quote,
            typedText: '',
            currentCharIndex: 0,
            isLoadingQuote: false,
            stats: {
              wpm: 0,
              cpm: 0,
              accuracy: 100,
              errors: 0,
              correctChars: 0,
              totalChars: 0,
              timeElapsed: 0,
            },
          })
        } else {
          set({
            currentLesson: lesson,
            isLessonStarted: true,
            currentExerciseIndex: 0,
            currentQuote: null,
            currentText: lesson.exercises[0]?.text || '',
            typedText: '',
            currentCharIndex: 0,
            stats: {
              wpm: 0,
              cpm: 0,
              accuracy: 100,
              errors: 0,
              correctChars: 0,
              totalChars: 0,
              timeElapsed: 0,
            },
          })
        }
      },
      
      endLesson: () => {
        const { currentLesson, stats } = get()
        if (!currentLesson) return
        
        const session: SessionHistory = {
          id: Date.now().toString(),
          date: new Date(),
          lessonId: currentLesson.id,
          stats,
          completed: true,
        }
        
        set(state => ({
          sessionHistory: [...state.sessionHistory, session],
          isLessonStarted: false,
          currentLesson: null,
        }))
      },
      
      resetLesson: async () => {
        const { currentLesson } = get()
        if (!currentLesson) return
        
        const isQuoteLesson = currentLesson.exercises[0]?.type === 'quote'
        
        if (isQuoteLesson) {
          set({ isLoadingQuote: true })
          const quote = await fetchRandomQuote()
          set({
            currentExerciseIndex: 0,
            currentQuote: quote,
            currentText: quote.quote,
            typedText: '',
            currentCharIndex: 0,
            isLoadingQuote: false,
            stats: {
              wpm: 0,
              cpm: 0,
              accuracy: 100,
              errors: 0,
              correctChars: 0,
              totalChars: 0,
              timeElapsed: 0,
            },
          })
        } else {
          set({
            currentExerciseIndex: 0,
            currentText: currentLesson.exercises[0]?.text || '',
            typedText: '',
            currentCharIndex: 0,
            stats: {
              wpm: 0,
              cpm: 0,
              accuracy: 100,
              errors: 0,
              correctChars: 0,
              totalChars: 0,
              timeElapsed: 0,
            },
          })
        }
      },
      
      updateTypedText: (text: string) => {
        set({ typedText: text, currentCharIndex: text.length })
      },
      
      updateStats: (newStats: Partial<TypingStats>) => {
        set(state => ({
          stats: { ...state.stats, ...newStats }
        }))
      },
      
      toggleTheme: () => {
        set(state => ({
          theme: state.theme === 'light' ? 'dark' : 'light'
        }))
      },
      
      toggleSound: () => {
        set(state => ({
          soundEnabled: !state.soundEnabled
        }))
      },
      
      loadNextQuote: async () => {
        const { currentLesson, stats } = get()
        if (!currentLesson || currentLesson.exercises[0]?.type !== 'quote') return
        
        set({ isLoadingQuote: true })
        const quote = await fetchRandomQuote()
        
        const session: SessionHistory = {
          id: Date.now().toString(),
          date: new Date(),
          lessonId: currentLesson.id,
          stats,
          completed: true,
        }
        
        set(state => ({
          currentQuote: quote,
          currentText: quote.quote,
          typedText: '',
          currentCharIndex: 0,
          isLoadingQuote: false,
          sessionHistory: [...state.sessionHistory, session],
          stats: {
            wpm: 0,
            cpm: 0,
            accuracy: 100,
            errors: 0,
            correctChars: 0,
            totalChars: 0,
            timeElapsed: 0,
          },
        }))
      },
    }),
    {
      name: 'typewriter-storage',
      partialize: (state) => ({
        sessionHistory: state.sessionHistory,
        theme: state.theme,
        soundEnabled: state.soundEnabled,
      }),
    }
  )
)
