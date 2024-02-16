#!/usr/bin/env zx
import { cd } from 'zx/core';
import { envVars } from './env.mjs';

// Nothing special here, just a simple script to show the project configuration
// and custom environment variable for reference.
cd(envVars.appCenter.sourceDirectory);
const nxProject = JSON.parse(
  (await $`npx nx show project ${envVars.nx.project} --json`.quiet()).stdout
);

console.log(nxProject);
console.log(envVars.customVar);
