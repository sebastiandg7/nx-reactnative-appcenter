#!/usr/bin/env bash

PROJECT_PATH=$(dirname $(realpath $0))

cd $APPCENTER_SOURCE_DIRECTORY/tools/scripts/appcenter
npm i
npx zx post-clone/post-clone.mjs

# Add app specific post-build commands here

cd $PROJECT_PATH
npx zx appcenter/post-clone.mjs
