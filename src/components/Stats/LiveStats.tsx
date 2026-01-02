import { Clock, Target, Zap, AlertCircle } from 'lucide-react'
import { useAppStore } from '../../store/useAppStore'

export default function LiveStats() {
  const { stats } = useAppStore()

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* WPM */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            WPM
          </span>
        </div>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">
          {stats.wpm}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
          Palabras por minuto
        </p>
      </div>

      {/* Accuracy */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-5 h-5 text-green-500" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Precisión
          </span>
        </div>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">
          {stats.accuracy.toFixed(1)}%
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
          Aciertos
        </p>
      </div>

      {/* Errors */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Errores
          </span>
        </div>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">
          {stats.errors}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
          Teclas incorrectas
        </p>
      </div>

      {/* Time */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Tiempo
          </span>
        </div>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">
          {formatTime(stats.timeElapsed)}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
          Transcurrido
        </p>
      </div>
    </div>
  )
}
