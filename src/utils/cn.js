/**
 * Concatenates list of class names, filtering out falsy values.
 * Lightweight replacement for clsx/classnames.
 * @param {...any} inputs - Class values to concatenate
 * @returns {string} Concatenated class string
 */
export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter((val) => typeof val === 'string' && val.trim() !== '')
    .join(' ');
}
