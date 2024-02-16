#!/usr/bin/env zx
import { envVars } from '../utils/env.mjs';
import { logRunInfo } from '../utils/log-run-info.mjs';

console.log(chalk.bgGreen('[Post-Clone Step] Nx + React Native + Appcenter'));
logRunInfo();

cd(envVars.appCenter.sourceDirectory);

// CocoaPods v1.15.0 is broken for hermes-engine
// Appcenter uses v1.15.0 by default so we need to update it to the latest version
await $`which pod`;
await $`brew update`;
await $`brew install cocoapods`;

// Install dependencies
await $`yarn install`;

// Make AppCenter use yarn
await $`cp yarn.lock ./${envVars.nx.projectDir}/yarn.lock`;

// Sync dependencies and ensure symlink to node_modules
await $`yarn nx sync-deps ${envVars.nx.project}`;
await $`yarn nx ensure-symlink ${envVars.nx.project}`;
