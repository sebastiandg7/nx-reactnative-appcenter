#!/usr/bin/env bash

echo "[Pre-Build Step] Nx + React Native + Appcenter"
echo "Current directory: $(pwd)"
echo "..."
echo "[Appcenter General Environment Variables]"
echo "APPCENTER_BUILD_ID: $APPCENTER_BUILD_ID"
echo "APPCENTER_BRANCH: $APPCENTER_BRANCH"
echo "APPCENTER_SOURCE_DIRECTORY: $APPCENTER_SOURCE_DIRECTORY"
echo "APPCENTER_OUTPUT_DIRECTORY: $APPCENTER_OUTPUT_DIRECTORY"
echo "..."
echo "[Appcenter iOS specific Environment Variables]"
echo "APPCENTER_XCODE_PROJECT: $APPCENTER_XCODE_PROJECT"
echo "APPCENTER_XCODE_SCHEME: $APPCENTER_XCODE_SCHEME"
echo "..."
echo "[Appcenter Android specific Environment Variables]"
echo "APPCENTER_ANDROID_VARIANT: $APPCENTER_ANDROID_VARIANT"
echo "APPCENTER_ANDROID_MODULE: $APPCENTER_ANDROID_MODULE"
echo "..."
echo "[Appcenter React Native specific Environment Variables]"
echo "APPCENTER_REACTNATIVE_PACKAGE: $APPCENTER_REACTNATIVE_PACKAGE"

cd $APPCENTER_SOURCE_DIRECTORY
yarn nx build-andriod $APPCENTER_NX_PROJECT