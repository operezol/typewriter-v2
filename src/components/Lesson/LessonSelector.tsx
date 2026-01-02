import { Lock, CheckCircle, Play, Quote } from 'lucide-react'
import { lessons } from '../../data/lessons'
import { useAppStore } from '../../store/useAppStore'

export default function LessonSelector() {
  const { startLesson, sessionHistory } = useAppStore()

  const getLessonStatus = (lessonId: number) => {
    const completed = sessionHistory.some(
      (session) => session.lessonId === lessonId && session.completed
    )
    return completed
  }

  const isLessonUnlocked = (lessonId: number) => {
    if (lessonId === 1) return true
    const previousLesson = lessons.find((l) => l.id === lessonId - 1)
    if (!previousLesson) return false
    return getLessonStatus(previousLesson.id)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Elige tu Lección
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Completa las lecciones en orden para desbloquear nuevos niveles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => {
          const isUnlocked = isLessonUnlocked(lesson.id)
          const isCompleted = getLessonStatus(lesson.id)
          const isQuoteLesson = lesson.exercises[0]?.type === 'quote'

          return (
            <div
              key={lesson.id}
              className={`
                relative p-6 rounded-xl border-2 transition-all
                ${
                  isQuoteLesson
                    ? 'bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-700'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                }
                ${
                  isUnlocked
                    ? 'hover:border-primary-500 hover:shadow-lg cursor-pointer'
                    : 'opacity-60 cursor-not-allowed'
                }
              `}
              onClick={() => isUnlocked && startLesson(lesson.id)}
            >
              {/* Level Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {isQuoteLesson && <Quote className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                    Nivel {lesson.level}
                  </span>
                </div>
                {isCompleted && (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                )}
                {!isUnlocked && <Lock className="w-6 h-6 text-slate-400" />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {lesson.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {lesson.description}
              </p>

              {/* Requirements */}
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 mb-4">
                <span>WPM: {lesson.requiredWPM}+</span>
                <span>Precisión: {lesson.requiredAccuracy}%+</span>
              </div>

              {/* Keys Preview */}
              {lesson.keys.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {lesson.keys.slice(0, 8).map((key, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm font-mono"
                    >
                      {key}
                    </span>
                  ))}
                  {lesson.keys.length > 8 && (
                    <span className="px-2 py-1 text-slate-500 dark:text-slate-500 text-sm">
                      +{lesson.keys.length - 8}
                    </span>
                  )}
                </div>
              )}

              {/* Start Button */}
              {isUnlocked && (
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    startLesson(lesson.id)
                  }}
                >
                  <Play className="w-4 h-4" />
                  Comenzar
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
