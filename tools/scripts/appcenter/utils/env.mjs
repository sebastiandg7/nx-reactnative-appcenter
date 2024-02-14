import { cleanEnv, str, int } from 'envalid';

const env = cleanEnv($.env, {
  APPCENTER_BUILD_ID: int(),
  APPCENTER_BRANCH: str(),
  APPCENTER_SOURCE_DIRECTORY: str(),
  APPCENTER_OUTPUT_DIRECTORY: str(),
  APPCENTER_CURRENT_PLATFORM: str({ choices: ['android', 'ios'] }),
  APPCENTER_REACTNATIVE_PACKAGE: str(),
  APPCENTER_NX_PROJECT: str(),
  APPCENTER_NX_PROJECT_DIR: str(),
  NODE_ENV: str({ choices: ['production', 'development', 'test'] }),
  ...($.env.APPCENTER_CURRENT_PLATFORM === 'ios'
    ? {
        APPCENTER_XCODE_PROJECT: str(),
        APPCENTER_XCODE_SCHEME: str(),
      }
    : {
        APPCENTER_ANDROID_VARIANT: str(),
        APPCENTER_ANDROID_MODULE: str(),
      }),
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
