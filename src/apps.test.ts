import { describe, expect, it } from 'vitest'
import { APPS, greeting } from './apps'

describe('portal apps', () => {
  it('has unique ids and https links', () => {
    expect(new Set(APPS.map((a) => a.id)).size).toBe(APPS.length)
    for (const a of APPS) if (a.url) expect(a.url.startsWith('https://')).toBe(true)
  })
  it('greets by time of day', () => {
    expect(greeting(8)).toBe('Guten Morgen')
    expect(greeting(13)).toBe('Guten Tag')
    expect(greeting(19)).toBe('Guten Abend')
    expect(greeting(23)).toBe('Gute Nacht')
  })
})
