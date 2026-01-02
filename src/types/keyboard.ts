export interface KeyboardLayout {
  name: string
  rows: KeyRow[]
}

export interface KeyRow {
  keys: KeyData[]
}

export interface KeyData {
  key: string
  display: string
  finger: Finger
  hand: 'left' | 'right'
  width?: number
}

export type Finger = 'pinky' | 'ring' | 'middle' | 'index' | 'thumb'

export type KeyStatus = 'idle' | 'next' | 'correct' | 'incorrect'
