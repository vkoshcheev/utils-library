/**
 * @example
 * Input: 1230124123
 * Output: "1173.14 MB"
 */
export const formatFileSizeText = (bytes: number, withSpace = true) => {
  if (bytes > 1024 * 1024 * 1024) {
    const sizeInMegabytes = parseFloat((bytes / (1024 * 1024 * 1024)).toFixed(2));
    return `${sizeInMegabytes}${withSpace ? ' ' : ''}GB`;
  }

  if (bytes > 1024 * 1024) {
    const sizeInMegabytes = parseFloat((bytes / (1024 * 1024)).toFixed(2));
    return `${sizeInMegabytes}${withSpace ? ' ' : ''}MB`;
  }

  if (bytes > 1024) {
    const sizeInKilobytes = parseFloat((bytes / 1024).toFixed(1));
    return `${sizeInKilobytes}${withSpace ? ' ' : ''}KB`;
  }

  return `${bytes}${withSpace ? ' ' : ''}B`;
}