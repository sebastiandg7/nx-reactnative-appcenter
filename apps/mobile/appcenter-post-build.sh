#!/usr/bin/env bash
cd $APPCENTER_SOURCE_DIRECTORY
zx --install tools/scripts/appcenter/post-build/post-build.mjs

# Add app specific post-build commands here
