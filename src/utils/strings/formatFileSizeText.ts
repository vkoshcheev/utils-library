/**
 * @example
 * Input: 1230124123
 * Output: "1173.14 MB"
 */
export const formatFileSizeText = (bytes: number) => {
  if (bytes > 1024 * 1024) {
    const sizeInMegabytes = parseFloat((bytes / (1024 * 1024)).toFixed(2));
    return `${sizeInMegabytes} MB`;
  }

  if (bytes > 1024) {
    const sizeInKilobytes = parseFloat((bytes / 1024).toFixed(1));
    return `${sizeInKilobytes} KB`;
  }

  return `${bytes} B`;
}