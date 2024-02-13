#!/usr/bin/env bash

echo "[Post-Clone Step] Nx + React Native + Appcenter"
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

if [ -z "$APP_CENTER_CURRENT_PLATFORM"  ]
then
    echo "You need define the APP_CENTER_CURRENT_PLATFORM variable in App Center with values android or ios";
    exit 1;
fi

cd $APPCENTER_SOURCE_DIRECTORY
yarn install
cp yarn.lock ./$APPCENTER_NX_PROJECT_DIR/yarn.lock
yarn nx sync-deps $APPCENTER_NX_PROJECT
yarn nx ensure-symlink $APPCENTER_NX_PROJECT
cd $APPCENTER_NX_PROJECT_DIR
