#!/usr/bin/env bash
cd $APPCENTER_SOURCE_DIRECTORY/tools/scripts/appcenter
npm i
npm run zx post-clone/post-clone.mjs

# Add app specific post-build commands here
