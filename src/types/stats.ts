export interface TypingStats {
  wpm: number
  cpm: number
  accuracy: number
  errors: number
  correctChars: number
  totalChars: number
  timeElapsed: number
}

export interface SessionHistory {
  id: string
  date: Date
  lessonId: number
  stats: TypingStats
  completed: boolean
}

export interface KeyStats {
  key: string
  correct: number
  incorrect: number
  accuracy: number
}
