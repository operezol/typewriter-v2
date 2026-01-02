import { useEffect, useRef, useState } from 'react'
import { X, RotateCcw, Home } from 'lucide-react'
import { useAppStore } from '../../store/useAppStore'

export default function PracticeArea() {
  const {
    currentLesson,
    currentQuote,
    currentText,
    typedText,
    currentCharIndex,
    updateTypedText,
    updateStats,
    endLesson,
    resetLesson,
    loadNextQuote,
  } = useAppStore()

  const [startTime, setStartTime] = useState<number | null>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus()
  }, [])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!startTime) {
      setStartTime(Date.now())
    }

    // Prevent default for some keys
    if (e.key === 'Tab') {
      e.preventDefault()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    updateTypedText(newText)

    // Calculate stats
    const correctChars = newText.split('').filter((char, index) => char === currentText[index]).length
    const totalChars = newText.length
    const errors = totalChars - correctChars
    const accuracy = totalChars > 0 ? (correctChars / totalChars) * 100 : 100

    // Calculate WPM
    const timeElapsed = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0
    const minutes = timeElapsed / 60
    const words = correctChars / 5 // Standard: 5 characters = 1 word
    const wpm = minutes > 0 ? Math.round(words / minutes) : 0
    const cpm = minutes > 0 ? Math.round(correctChars / minutes) : 0

    updateStats({
      wpm,
      cpm,
      accuracy,
      errors,
      correctChars,
      totalChars,
      timeElapsed,
    })

    // Check if completed
    if (newText === currentText) {
      setTimeout(() => {
        const isQuoteLesson = currentLesson?.exercises[0]?.type === 'quote'
        if (isQuoteLesson) {
          if (window.confirm('¡Quote completada! ¿Siguiente quote?')) {
            loadNextQuote()
          }
        } else {
          if (window.confirm('¡Lección completada! ¿Quieres volver al menú?')) {
            endLesson()
          }
        }
      }, 500)
    }
  }

  const getCharClass = (index: number) => {
    if (index >= typedText.length) {
      return index === currentCharIndex
        ? 'bg-yellow-200 dark:bg-yellow-900'
        : 'text-slate-400 dark:text-slate-600'
    }

    return typedText[index] === currentText[index]
      ? 'text-green-600 dark:text-green-400'
      : 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900'
  }

  if (!currentLesson) return null

  const isQuoteLesson = currentLesson.exercises[0]?.type === 'quote'

  return (
    <div className="space-y-6">
      {/* Header with controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {currentLesson.title}
          </h2>
          {isQuoteLesson && currentQuote ? (
            <p className="text-slate-600 dark:text-slate-400 italic">
              "{currentQuote.quote}" — {currentQuote.author}
            </p>
          ) : (
            <p className="text-slate-600 dark:text-slate-400">
              {currentLesson.description}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={resetLesson}
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            {isQuoteLesson ? 'Nueva Quote' : 'Reiniciar'}
          </button>
          <button
            onClick={endLesson}
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Menú
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{
            width: `${(typedText.length / currentText.length) * 100}%`,
          }}
        />
      </div>

      {/* Text Display */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border-2 border-slate-200 dark:border-slate-700">
        <div className="text-2xl leading-relaxed font-mono break-words whitespace-normal">
          {currentText.split('').map((char, index) => (
            <span key={index} className={getCharClass(index)}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>

      {/* Hidden Input */}
      <textarea
        ref={inputRef}
        value={typedText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="sr-only"
        autoFocus
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />

      {/* Instructions */}
      <div className="text-center text-sm text-slate-600 dark:text-slate-400">
        <p>Escribe el texto que aparece arriba. Haz clic en cualquier lugar para comenzar.</p>
      </div>
    </div>
  )
}
