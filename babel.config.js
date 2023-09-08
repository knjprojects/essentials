module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      'react-native-reanimated/plugin',
      'nativewind/babel',
      'react-native-paper/babel',
      ["module:react-native-dotenv"]
    ],
  };
};
