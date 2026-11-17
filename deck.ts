// Edit this when starting a deck. The footer and the section dividers read it.

export const deckLabel = 'Your deck'

export type PartIcon = 'topology' | 'code' | 'bulb'

export interface DeckPart {
  title: string
  color: string
  icon: PartIcon
}

export const parts: DeckPart[] = [
  { title: 'Opening', color: 'var(--blue)', icon: 'topology' },
  { title: 'Middle', color: 'var(--orange)', icon: 'code' },
  { title: 'Close', color: 'var(--green)', icon: 'bulb' },
]
