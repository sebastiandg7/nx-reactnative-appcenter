#!/usr/bin/env zx
import { envVars } from '../utils/env.mjs';
import { logRunInfo } from '../utils/log-run-info.mjs';

console.log(chalk.bgGreen('[Post-Clone Step] Nx + React Native + Appcenter'));
logRunInfo();

cd(envVars.appCenter.sourceDirectory);
await $`cp yarn.lock ./${envVars.nx.projectDir}/yarn.lock`;
await $`yarn nx sync-deps ${envVars.nx.project}`;
await $`yarn nx ensure-symlink ${envVars.nx.project}`;
cd(envVars.nx.projectDir);
