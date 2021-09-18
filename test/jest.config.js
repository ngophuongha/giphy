/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: "../",
  moduleDirectories: ["node_modules", "src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],

  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },

  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
