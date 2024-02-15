#!/usr/bin/env bash

cd $APPCENTER_SOURCE_DIRECTORY/tools/scripts/appcenter
npm i
npx zx post-clone/post-clone.mjs

# Add app specific post-build commands here

cd $(dirname $APPCENTER_REACTNATIVE_PACKAGE)
npx zx appcenter/post-clone.mjs
