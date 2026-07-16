const STORAGE_KEY = "akindepo-theme";
const THEME_ATTRIBUTE = "data-theme";
const THEME_BOUNCE_CLASS = "theme-bounce";
const THEME_BOUNCE_DURATION = 1000;

export function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme = "light") {
  const resolvedTheme = theme === "dark" ? "dark" : "light";

  if (typeof document !== "undefined") {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, resolvedTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    document.documentElement.classList.toggle("dark-theme", resolvedTheme === "dark");
    document.documentElement.style.colorScheme = resolvedTheme;
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, resolvedTheme);
  }

  return resolvedTheme;
}

export function initTheme() {
  return applyTheme(getInitialTheme());
}

export function toggleTheme() {
  if (typeof document === "undefined") {
    return "light";
  }

  const currentTheme = document.documentElement.getAttribute(THEME_ATTRIBUTE) === "dark" ? "dark" : "light";
  return applyTheme(currentTheme === "dark" ? "light" : "dark");
}

export function bounceThemeIcon() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const themeIcon = document.getElementById("themeIcon");
  if (!themeIcon) {
    return;
  }

  themeIcon.classList.remove(THEME_BOUNCE_CLASS);
  void themeIcon.offsetWidth;
  themeIcon.classList.add(THEME_BOUNCE_CLASS);

  if (window.__themeBounceTimer) {
    window.clearTimeout(window.__themeBounceTimer);
  }

  window.__themeBounceTimer = window.setTimeout(() => {
    themeIcon.classList.remove(THEME_BOUNCE_CLASS);
  }, THEME_BOUNCE_DURATION);
}

export function startThemeBounceTimer(intervalMs = 300000) {
  if (typeof window === "undefined") {
    return () => {};
  }

  if (window.__themeBounceInterval) {
    window.clearInterval(window.__themeBounceInterval);
  }

  window.__themeBounceInterval = window.setInterval(() => {
    bounceThemeIcon();
  }, intervalMs);

  return () => stopThemeBounceTimer();
}

export function stopThemeBounceTimer() {
  if (typeof window === "undefined") {
    return;
  }

  if (window.__themeBounceTimer) {
    window.clearTimeout(window.__themeBounceTimer);
    window.__themeBounceTimer = null;
  }

  if (window.__themeBounceInterval) {
    window.clearInterval(window.__themeBounceInterval);
    window.__themeBounceInterval = null;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", stopThemeBounceTimer);
}

export default {
  applyTheme,
  initTheme,
  toggleTheme,
  bounceThemeIcon,
  startThemeBounceTimer,
  stopThemeBounceTimer,
};