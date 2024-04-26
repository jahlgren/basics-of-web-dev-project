/**
 * Recalculates the size of 1 vh to make it more
 * consistent across devices, especially mobile devices.
 * 
 * How to use in CSS:
 *   height: 100vh;
 *   height: calc(var(--vh, 1vh) * 100);
 */
export default function fixMobileVh() {
  const handle = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  handle();
  window.addEventListener('resize', handle);
  window.addEventListener('load', handle);
}
