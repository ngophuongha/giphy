/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: "../",
  moduleDirectories: ["node_modules", "src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },

  coverageThreshold: {
    global: {
      branches: 70, //80% cannot be met since screen resizing should not be tested by unit testing, it should be integration testing instead
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
