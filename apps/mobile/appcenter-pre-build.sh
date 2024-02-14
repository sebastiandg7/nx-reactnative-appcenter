#!/usr/bin/env bash
cd $APPCENTER_SOURCE_DIRECTORY
npx zx@7 --install tools/scripts/appcenter/pre-build/pre-build.mjs

# Add app specific pre-build commands here
