#!/usr/bin/env zx
import { envVars } from '../utils/env.mjs';
import { logRunInfo } from '../utils/log-run-info.mjs';

console.log(chalk.bgGreen('[Post-Clone Step] Nx + React Native + Appcenter'));
logRunInfo();

cd(envVars.appCenter.sourceDirectory);

// CocoaPods v1.15.0 is broken for hermes-engine
// Appcenter uses v1.15.0 by default so we need to update it to v1.15.2 (2024-02-15)
if (envVars.appCenter.currentPlatform === 'ios') {
  await $`sudo gem uninstall cocoapods`;
  await $`sudo gem install cocoapods -v 1.15.2`;
}

// Install dependencies
await $`yarn install`;

// Make AppCenter use yarn
await $`cp yarn.lock ./${envVars.nx.projectDir}/yarn.lock`;

// Sync dependencies and ensure symlink to node_modules
await $`yarn nx sync-deps ${envVars.nx.project}`;
await $`yarn nx ensure-symlink ${envVars.nx.project}`;
