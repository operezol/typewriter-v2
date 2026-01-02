import { Quote, RotateCw, X } from 'lucide-react'
import { useAppStore } from '../../store/useAppStore'

export default function QuoteMode() {
  const { currentQuote, nextQuote, endQuoteMode, isLoadingQuote } = useAppStore()

  if (!currentQuote) return null

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Quote className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Quote Mode
            </h2>
          </div>
          <button
            onClick={endQuoteMode}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            title="Exit Quote Mode"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        <div className="mb-6">
          <blockquote className="text-xl text-slate-700 dark:text-slate-300 italic mb-4 border-l-4 border-primary-500 pl-4">
            "{currentQuote.quote}"
          </blockquote>
          <p className="text-right text-slate-600 dark:text-slate-400">
            — {currentQuote.author}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={nextQuote}
            disabled={isLoadingQuote}
            className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white rounded-lg font-semibold transition-colors"
          >
            <RotateCw className={`w-5 h-5 ${isLoadingQuote ? 'animate-spin' : ''}`} />
            {isLoadingQuote ? 'Loading...' : 'Next Quote'}
          </button>
        </div>
      </div>
    </div>
  )
}
