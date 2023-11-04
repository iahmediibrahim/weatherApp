type DebouncedFunction<T extends any[]> = (...args: T) => void;

export function debounce<T extends any[]>(
  func: DebouncedFunction<T>,
  delay: number,
): DebouncedFunction<T> {
  let timeoutId: NodeJS.Timeout | undefined;

  return (...args: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export const generateTestID = (label: string, suffix = '') =>
  `${label?.split(' ').join('-').toLowerCase()}${suffix ? '-' + suffix : ''}`;

export const addTestId = (label: string, suffix = '') => ({
  testID: generateTestID(label, suffix),
  accessibilityLabel: generateTestID(label, suffix),
});
