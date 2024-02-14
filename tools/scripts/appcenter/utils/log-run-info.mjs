#!/usr/bin/env zx
import { envVars } from './env/variables.mjs';

export function logRunInfo() {
  const {
    appCenter: { buildId, branch, sourceDirectory, outputDirectory },
  } = envVars;
  echo`Current directory: ${process.cwd()}`;
  echo`...'`;
  echo`[Appcenter General Environment Variables]'`;
  echo`APPCENTER_BUILD_ID: ${buildId}`;
  echo`APPCENTER_BRANCH: ${branch}`;
  echo`APPCENTER_SOURCE_DIRECTORY: ${sourceDirectory}`;
  echo`APPCENTER_OUTPUT_DIRECTORY: ${outputDirectory}`;
  echo``;
  echo`[Appcenter iOS specific Environment Variables]'`;
  echo`APPCENTER_XCODE_PROJECT: `;
  echo`APPCENTER_XCODE_SCHEME: `;
  echo`...'`;
  echo`[Appcenter Android specific Environment Variables]'`;
  echo`APPCENTER_ANDROID_VARIANT: ' + process.env.APPCENTER_ANDROID_VARIANT`;
  echo`APPCENTER_ANDROID_MODULE: ' + process.env.APPCENTER_ANDROID_MODULE`;
  echo`...'`;
  echo`[Appcenter React Native specific Environment Variables]'`;
  echo`APPCENTER_REACTNATIVE_PACKAGE: ' +
      process.env.APPCENTER_REACTNATIVE_PACKAGE
  `;
}
