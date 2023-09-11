/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'green-wa': '#25d366',
        'dark-pink-mic': '#f55',
        'light-pink-mic': '#ff6060',
        'light-gray-mic': '#f5f5f5',
        'dark-gray-mic': '#e5e5e5',
        'blue-mic': '#1d3dff',
      },
      boxShadow: {
        'mic': '0 0 4px 2px rgba(0, 0, 0, .1)',
      },
      outlineColor: {
        'mic': '#f55',
      },
      outlineWidth: {
        'mic': '2px',
      },
      outlineOffset: {
        'mic': '0',
      },
    },
  },
  plugins: [],
}

