export default function detectThemeMode() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return 'dark';
  }
  return 'light';
}