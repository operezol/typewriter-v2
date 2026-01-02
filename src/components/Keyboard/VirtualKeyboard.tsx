import { useAppStore } from '../../store/useAppStore'
import { qwertySpanish } from '../../data/keyboards'
import type { KeyData } from '../../types/keyboard'

export default function VirtualKeyboard() {
  const { currentText, currentCharIndex } = useAppStore()

  const getKeyStatus = (keyData: KeyData) => {
    if (currentCharIndex >= currentText.length) return 'idle'
    
    const currentChar = currentText[currentCharIndex].toLowerCase()
    const keyChar = keyData.key.toLowerCase()
    
    if (currentChar === keyChar) return 'next'
    return 'idle'
  }

  const getKeyColor = (status: string, hand: string) => {
    if (status === 'next') {
      return 'bg-yellow-400 dark:bg-yellow-600 text-slate-900 dark:text-white scale-110 shadow-lg'
    }
    
    if (hand === 'left') {
      return 'bg-blue-100 dark:bg-blue-900 text-slate-700 dark:text-slate-300 hover:bg-blue-200 dark:hover:bg-blue-800'
    }
    
    return 'bg-red-100 dark:bg-red-900 text-slate-700 dark:text-slate-300 hover:bg-red-200 dark:hover:bg-red-800'
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
      <div className="space-y-2">
        {qwertySpanish.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
            {row.keys.map((keyData, keyIndex) => {
              const status = getKeyStatus(keyData)
              const colorClass = getKeyColor(status, keyData.hand)
              const width = keyData.width ? `${keyData.width * 4}rem` : '3rem'

              return (
                <div
                  key={keyIndex}
                  className={`
                    ${colorClass}
                    h-12 rounded-lg flex items-center justify-center
                    font-mono font-semibold text-sm
                    transition-all duration-200
                    border border-slate-300 dark:border-slate-600
                  `}
                  style={{ width }}
                >
                  {keyData.display}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900 rounded border border-slate-300 dark:border-slate-600" />
          <span className="text-slate-600 dark:text-slate-400">Mano izquierda</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-100 dark:bg-red-900 rounded border border-slate-300 dark:border-slate-600" />
          <span className="text-slate-600 dark:text-slate-400">Mano derecha</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 dark:bg-yellow-600 rounded border border-slate-300 dark:border-slate-600" />
          <span className="text-slate-600 dark:text-slate-400">Siguiente tecla</span>
        </div>
      </div>
    </div>
  )
}
