const plugins = [];
try {
  plugins.push(require('tailwindcss'));
} catch (e) {}
try {
  plugins.push(require('autoprefixer'));
} catch (e) {}

module.exports = { plugins };
