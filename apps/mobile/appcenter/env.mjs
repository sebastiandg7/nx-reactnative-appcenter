#!/usr/bin/env zx
import { cleanEnv, str } from 'envalid';
import { envVars as generalEnvVars } from '../../../tools/scripts/appcenter/utils/env.mjs';

const env = cleanEnv($.env, {
  CUSTOM_VAR: str({
    desc: 'Custom env variable as example',
  }),
});

export const envVars = {
  ...generalEnvVars,
  customVar: env.CUSTOM_VAR,
};
