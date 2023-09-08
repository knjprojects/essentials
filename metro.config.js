
// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname,{
    // Enable CSS support.
    isCSSEnabled: true,
  });

defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;


/*

 // @type {import('expo/metro-config').MetroConfig} 
//extras
const path = require('path');

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');


//extras
const tailwind = require('tailwindcss/lib/cli/build');


module.exports = (async () => {
   //@type {import('expo/metro-config').MetroConfig}
  const config = getDefaultConfig(__dirname, {
    // Enable CSS support.
    isCSSEnabled: true,
  });

  // Run Tailwind CLI to generate CSS files.
  await tailwind.build({
    '--input': path.relative(__dirname, './(tabs)/global.css'),
    '--output': path.resolve(__dirname, 'node_modules/.cache/expo/tailwind/eval.css'),
    '--watch': process.env.NODE_ENV === 'development' ? 'always' : false,
    '--poll': true,
  });
  config.resolver.assetExts.push('cjs');
  return config;
}
)();


//module.exports = defaultConfig;
*/
///*@type {import('expo/metro-config').MetroConfig}*/