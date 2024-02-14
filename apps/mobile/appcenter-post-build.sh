#!/usr/bin/env bash
cd $APPCENTER_SOURCE_DIRECTORY/tools/scripts/appcenter
npm run zx post-build/post-build.mjs

# Add app specific post-build commands here
