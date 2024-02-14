import { cleanEnv, str, num } from 'envalid';

const env = cleanEnv($.env, {
  APPCENTER_BUILD_ID: num({ desc: 'The unique identifier for the build'}),
  APPCENTER_BRANCH: str({ desc: 'The branch the build is being run on'}),
  APPCENTER_SOURCE_DIRECTORY: str({ desc: 'The directory where the source code is located'}),
  APPCENTER_OUTPUT_DIRECTORY: str({ desc: 'The directory where the build output is located'}),
  APPCENTER_CURRENT_PLATFORM: str({ choices: ['android', 'ios'], desc: 'The platform the app is being built for'}),
  APPCENTER_REACTNATIVE_PACKAGE: str({ desc: 'The path to the React Native package.json file'}),
  APPCENTER_NX_PROJECT: str({ desc: 'The name of the Nx project containing the React Native app'}),
  APPCENTER_NX_PROJECT_DIR: str({ desc: 'The directory of the Nx project containing the React Native app'}),
  // NODE_ENV: str({ choices: ['production', 'development', 'test'] }),
  ...($.env.APPCENTER_CURRENT_PLATFORM === 'ios'
    ? {
        APPCENTER_XCODE_PROJECT: str({ desc: 'The name of the Xcode project'}),
        APPCENTER_XCODE_SCHEME: str({ desc: 'The name of the Xcode scheme'}),
      }
    : $.env.APPCENTER_CURRENT_PLATFORM === 'android' ? {
        APPCENTER_ANDROID_VARIANT: str({ desc: 'The name of the Android variant'}),
        APPCENTER_ANDROID_MODULE: str({ desc: 'The name of the Android module'}),
      } : {}),
});

export const envVars = {
  appCenter: {
    buildId: env.APPCENTER_BUILD_ID,
    branch: env.APPCENTER_BRANCH,
    sourceDirectory: env.APPCENTER_SOURCE_DIRECTORY,
    outputDirectory: env.APPCENTER_OUTPUT_DIRECTORY,
    currentPlatform: env.APPCENTER_CURRENT_PLATFORM,
    iOS: {
      xcodeProject: env.APPCENTER_XCODE_PROJECT ?? null,
      xcodeScheme: env.APPCENTER_XCODE_SCHEME ?? null,
    },
    android: {
      variant: env.APPCENTER_ANDROID_VARIANT ?? null,
      module: env.APPCENTER_ANDROID_MODULE ?? null,
    },
    reactNative: {
      package: env.APPCENTER_REACTNATIVE_PACKAGE,
    },
  },
  nx: {
    project: env.APPCENTER_NX_PROJECT,
    projectDir: env.APPCENTER_NX_PROJECT_DIR,
  },
};
