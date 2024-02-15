#!/usr/bin/env zx
import { envVars } from './env.mjs';

export function logRunInfo() {
  const {
    appCenter: {
      buildId,
      branch,
      sourceDirectory,
      outputDirectory,
      iOS: { xcodeProject, xcodeScheme },
      android,
      reactNative,
    },
  } = envVars;

  echo`Current directory: ${process.cwd()}`;
  echo`...`;
  echo`[Appcenter General Environment Variables]'`;
  echo`APPCENTER_BUILD_ID: ${buildId}`;
  echo`APPCENTER_BRANCH: ${branch}`;
  echo`APPCENTER_SOURCE_DIRECTORY: ${sourceDirectory}`;
  echo`APPCENTER_OUTPUT_DIRECTORY: ${outputDirectory}`;
  echo`...`;
  echo`[Appcenter iOS specific Environment Variables]'`;
  echo`APPCENTER_XCODE_PROJECT: ${xcodeProject}`;
  echo`APPCENTER_XCODE_SCHEME: ${xcodeScheme}`;
  echo`...`;
  echo`[Appcenter Android specific Environment Variables]'`;
  echo`APPCENTER_ANDROID_VARIANT: ${android.variant}`;
  echo`APPCENTER_ANDROID_MODULE: ${android.module}`;
  echo`...'`;
  echo`[Appcenter React Native specific Environment Variables]'`;
  echo`APPCENTER_REACTNATIVE_PACKAGE: ${reactNative.package}`;
}
