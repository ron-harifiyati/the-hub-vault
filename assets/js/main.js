/* ============================================================
   THE HUB VAULT — Main JS
   Theme toggle, Hamburger nav, Active nav state
   ============================================================ */

(function () {
  'use strict';

  /* ── Theme ──────────────────────────────────────────────── */
  const THEME_KEY = 'hub-vault-theme';

  function getInitialTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* ── Hamburger Nav ──────────────────────────────────────── */
  function initNav() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('nav-mobile');

    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav when a link is tapped
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside tap
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Active Nav Link ────────────────────────────────────── */
  function setActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
    allLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ── Init ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    // Apply theme immediately (also applied inline in <head> to prevent flash)
    applyTheme(getInitialTheme());

    // Wire up theme toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

    initNav();
    setActiveNav();
  });

  // Prevent flash of wrong theme by applying before DOMContentLoaded
  applyTheme(getInitialTheme());

})();
