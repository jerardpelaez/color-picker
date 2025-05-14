export type RGBChannel = 'red' | 'green' | 'blue'

export interface RGBColor {
  red: number
  green: number
  blue: number
}

export interface NamedColor extends RGBColor {
  name: string
}
