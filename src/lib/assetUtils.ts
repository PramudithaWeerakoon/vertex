// Helper function to get correct asset paths in both development and production
export function getAssetPath(path: string): string {
  // Make sure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}

// Common assets that are frequently used
export const CommonAssets = {
  logo: getAssetPath('/assets/logo.png'),
  robotImage: getAssetPath('/assets/robort.png'),
  thinkImage: getAssetPath('/assets/think.png'),
  finalImage: getAssetPath('/assets/final.png'),
  catSuccessImage: getAssetPath('/assets/catSuccess.png'),
  catFailImage: getAssetPath('/assets/catFail.png'),
  
  // Tech logos
  reactLogo: getAssetPath('/assets/techLogos/reactLogo.png'),
  nextLogo: getAssetPath('/assets/techLogos/nextLogo.png'),
  mongoLogo: getAssetPath('/assets/techLogos/mongoLogo.png')
};