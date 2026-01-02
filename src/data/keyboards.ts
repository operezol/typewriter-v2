import type { KeyboardLayout } from '../types/keyboard'

export const qwertySpanish: KeyboardLayout = {
  name: 'QWERTY Spanish',
  rows: [
    {
      keys: [
        { key: '1', display: '1', finger: 'pinky', hand: 'left' },
        { key: '2', display: '2', finger: 'ring', hand: 'left' },
        { key: '3', display: '3', finger: 'middle', hand: 'left' },
        { key: '4', display: '4', finger: 'index', hand: 'left' },
        { key: '5', display: '5', finger: 'index', hand: 'left' },
        { key: '6', display: '6', finger: 'index', hand: 'right' },
        { key: '7', display: '7', finger: 'index', hand: 'right' },
        { key: '8', display: '8', finger: 'middle', hand: 'right' },
        { key: '9', display: '9', finger: 'ring', hand: 'right' },
        { key: '0', display: '0', finger: 'pinky', hand: 'right' },
      ],
    },
    {
      keys: [
        { key: 'q', display: 'Q', finger: 'pinky', hand: 'left' },
        { key: 'w', display: 'W', finger: 'ring', hand: 'left' },
        { key: 'e', display: 'E', finger: 'middle', hand: 'left' },
        { key: 'r', display: 'R', finger: 'index', hand: 'left' },
        { key: 't', display: 'T', finger: 'index', hand: 'left' },
        { key: 'y', display: 'Y', finger: 'index', hand: 'right' },
        { key: 'u', display: 'U', finger: 'index', hand: 'right' },
        { key: 'i', display: 'I', finger: 'middle', hand: 'right' },
        { key: 'o', display: 'O', finger: 'ring', hand: 'right' },
        { key: 'p', display: 'P', finger: 'pinky', hand: 'right' },
      ],
    },
    {
      keys: [
        { key: 'a', display: 'A', finger: 'pinky', hand: 'left' },
        { key: 's', display: 'S', finger: 'ring', hand: 'left' },
        { key: 'd', display: 'D', finger: 'middle', hand: 'left' },
        { key: 'f', display: 'F', finger: 'index', hand: 'left' },
        { key: 'g', display: 'G', finger: 'index', hand: 'left' },
        { key: 'h', display: 'H', finger: 'index', hand: 'right' },
        { key: 'j', display: 'J', finger: 'index', hand: 'right' },
        { key: 'k', display: 'K', finger: 'middle', hand: 'right' },
        { key: 'l', display: 'L', finger: 'ring', hand: 'right' },
        { key: 'ñ', display: 'Ñ', finger: 'pinky', hand: 'right' },
      ],
    },
    {
      keys: [
        { key: 'z', display: 'Z', finger: 'pinky', hand: 'left' },
        { key: 'x', display: 'X', finger: 'ring', hand: 'left' },
        { key: 'c', display: 'C', finger: 'middle', hand: 'left' },
        { key: 'v', display: 'V', finger: 'index', hand: 'left' },
        { key: 'b', display: 'B', finger: 'index', hand: 'left' },
        { key: 'n', display: 'N', finger: 'index', hand: 'right' },
        { key: 'm', display: 'M', finger: 'index', hand: 'right' },
        { key: ',', display: ',', finger: 'middle', hand: 'right' },
        { key: '.', display: '.', finger: 'ring', hand: 'right' },
        { key: '-', display: '-', finger: 'pinky', hand: 'right' },
      ],
    },
    {
      keys: [
        { key: ' ', display: 'Space', finger: 'thumb', hand: 'left', width: 6 },
      ],
    },
  ],
}

export const keyboards = {
  qwertySpanish,
}
