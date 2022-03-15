const breakpoint = {
  sm: '767px', // 直平板
  md: '768px', // 橫平板
  lg: '992px',
  xl: '1200px', // PC
}

export const rwd = (size: keyof typeof breakpoint) => (content: string) => {
  if (size === 'sm') {
    return `@media screen and (max-width: ${breakpoint[size]} ) {${content}}`
  }
  return `@media screen and (min-width: ${breakpoint[size]} ) {${content}}`
}
