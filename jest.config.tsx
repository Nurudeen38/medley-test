import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.tsx"
 ],
};

export default config;