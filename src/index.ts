import { useCloseModalOnClickOutside } from './hooks/useCloseModalOnClickOutside';
import { useComponentDidUpdate } from './hooks/useComponentDidUpdate';
import { useDisableScroll } from './hooks/useDisableScroll';
import { useIsClient } from './hooks/useIsClient';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useModalStateHooks } from './hooks/useModalStateHooks';
import { WebVitals, useWebVitals } from './hooks/useWebVitals';
import { isEmailValid } from './utils/strings/isEmailValid';
import { isPhoneNumberValid } from './utils/strings/isPhoneNumberValid';
import { scrollToBlockRef } from './utils/scrollToBlockRef';
import { scrollToTop } from './utils/scrollToTop';
import { sleep } from './utils/sleep';
import { withOpacity } from './utils/css-and-styles/withOpacity';
import { addModifierToClass } from './utils/css-and-styles/addModifierToClass';
import { addModifierToClassWhenConditionIsTrue } from './utils/css-and-styles/addModifierToClassWhenConditionIsTrue';
import { getImageUrlForCss } from './utils/css-and-styles/getImageUrlForCss';
import { cacheImages } from './utils/cacheImages';
import { formatFileSizeText } from './utils/strings/formatFileSizeText';
import { formatUnixTimeToDateMoscowTime } from './utils/strings/formatUnixTimeToDateMoscowTime';
import { useScrollToTop } from './hooks/useScrollToTop';
import { newLine } from './utils/strings/newLine';

export {
  // css & styles
  addModifierToClass,
  addModifierToClassWhenConditionIsTrue,
  getImageUrlForCss,
  withOpacity,

  // strings
  newLine,
  formatUnixTimeToDateMoscowTime,
  formatFileSizeText,
  isEmailValid,
  isPhoneNumberValid,

  // utils functions
  cacheImages,
  scrollToBlockRef,
  scrollToTop,
  sleep,

  // hooks
  useCloseModalOnClickOutside,
  useComponentDidUpdate,
  useDisableScroll,
  useIsClient,
  useLocalStorage,
  useModalStateHooks,
  useScrollToTop,
  useWebVitals,
};

export type { WebVitals };
