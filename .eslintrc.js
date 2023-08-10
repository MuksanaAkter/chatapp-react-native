module.exports = {
  root: true,
  extends: '@react-native',
  node: true,
  rules: {
    // Add custom rules here
    'no-console': 'warn', // Example: Warn about using console.log
    'react/jsx-props-no-spreading': 'off', // Example: Allowing JSX spreading
    // Add more rules as needed
  },
};
