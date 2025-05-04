/**
 * Removes everything except numbers from string and if there's **exactly** 11 numbers, returns true.
 */
export const isPhoneNumberValid = (input: string) => {
  const onlyNumbers = input.replaceAll(/\D/g, '');
  const isValid = onlyNumbers.length === 11;
  return isValid;
};