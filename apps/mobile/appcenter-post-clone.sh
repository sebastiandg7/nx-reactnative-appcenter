#!/usr/bin/env bash
cd $APPCENTER_SOURCE_DIRECTORY
yarn install
yarn zx --install tools/scripts/appcenter/post-clone/post-clone.mjs

# Add app specific post-build commands here
