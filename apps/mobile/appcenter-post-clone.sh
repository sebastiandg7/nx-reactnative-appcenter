#!/usr/bin/env bash
cd $APPCENTER_SOURCE_DIRECTORY
npx zx@7 --install tools/scripts/appcenter/post-clone/post-clone.mjs

# Add app specific post-build commands here
