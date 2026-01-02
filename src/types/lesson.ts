export interface Lesson {
  id: number
  title: string
  description: string
  level: number
  keys: string[]
  exercises: Exercise[]
  requiredAccuracy: number
  requiredWPM: number
  unlocked: boolean
}

export interface Exercise {
  id: string
  text: string
  type: 'keys' | 'words' | 'sentences' | 'code' | 'quote'
}

export type LessonStatus = 'locked' | 'available' | 'in-progress' | 'completed'
