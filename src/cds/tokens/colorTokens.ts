const colorTokens = {
  navy100: '#9C9FAC',
  navy200: '#50566D',
  navy300: '#21273F',
  gray200: '#DCDEE3',
  gray300: '#B9BDC7',
  gray400: '#8891AA',
  gray500: '#39405A',
  blue100: '#B4ADEB',
  blue200: '#6154E8',
  blue300: '#2733B9',
  white: '#FFFFFF',
  black: '#000000',
} as const;

export default colorTokens;
export type ColorToken = keyof typeof colorTokens;
