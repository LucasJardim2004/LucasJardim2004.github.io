/** @type {import('tailwindcss').Config} */

// Os tokens do design system vivem aqui, em código. Nunca escrever cores à mão
// dentro de um componente — usar sempre estes tokens. As cores apontam para
// variáveis CSS (definidas em src/styles/global.css) que alternam entre modo
// claro e escuro, por isso cada token traz os dois modos consigo.
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        content: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        border: 'var(--color-border)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          soft: 'var(--color-accent-soft)',
        },
      },
      fontFamily: {
        // Fraunces (serif) só nos títulos grandes; Inter no corpo e UI;
        // JetBrains Mono no código.
        serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      fontWeight: {
        // Dois pesos apenas: regular (400) e medium (500).
        normal: '400',
        medium: '500',
      },
      borderRadius: {
        // Controlos: 8px. Cards: 12px.
        control: '8px',
        card: '12px',
      },
      transitionDuration: {
        // Movimento discreto e funcional.
        DEFAULT: '180ms',
      },
    },
  },
  plugins: [],
};
