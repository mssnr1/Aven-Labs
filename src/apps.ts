export type PortalApp = {
  id: string
  name: string
  topic: string
  line: string
  /** Signature light of the app (night). */
  light: string
  /** Preview of the app's 3D figure, relative to the site root. */
  image: string
  /** Where the app lives. Missing while the app is not out yet. */
  url?: string
  badge?: string
}

export const APPS: PortalApp[] = [
  {
    id: 'fluo',
    name: 'Fluo',
    topic: 'Atmen',
    line: 'In wenigen Minuten ruhiger werden.',
    light: '#c7bbff',
    image: 'figures/fluo.webp',
    url: 'https://mssnr1.github.io/atmen/',
  },
  {
    id: 'fayo',
    name: 'Fayo',
    topic: 'Gesicht',
    line: 'Übungen für einen wachen, frischen Blick.',
    light: '#ffc2d6',
    image: 'figures/fayo.webp',
    url: 'https://mssnr1.github.io/Fayo/',
    badge: 'Neu',
  },
  {
    id: 'tono',
    name: 'Tono',
    topic: 'Dehnen',
    line: '10 Minuten gegen Verspannung.',
    light: '#fcd38d',
    image: 'figures/fayo.webp',
  },
]

/** "Guten Morgen" etc. for the hour of the day. */
export function greeting(hour: number): string {
  if (hour < 5) return 'Gute Nacht'
  if (hour < 11) return 'Guten Morgen'
  if (hour < 17) return 'Guten Tag'
  if (hour < 22) return 'Guten Abend'
  return 'Gute Nacht'
}
