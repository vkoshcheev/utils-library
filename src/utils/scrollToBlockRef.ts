import { sleep } from "./sleep";

export const scrollToBlockRef = (blockRef: React.RefObject<HTMLDivElement>, offset = 0) => {
  sleep().then(() => {
    const elementPosition = blockRef.current?.getBoundingClientRect().top!;
    const offsetPosition = elementPosition + window.scrollY + offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  })
};