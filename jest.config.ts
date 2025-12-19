import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: ["**/test/**/*.test.ts?(x)"],
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "ts-jest",
      {
        // Move your ts-jest config here
        tsconfig: "<rootDir>/tsconfig.app.json",
      },
    ],
  },
};

export default config;
