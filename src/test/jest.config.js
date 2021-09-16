/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    rootDir: '../',
    moduleDirectories: ['node_modules', 'src'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '<rootDir>/test/jest.setup.ts',
      '<rootDir>/test/i18n.setup.ts',
    ],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
      '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/test/imageMockConfig.js`,
    },
  
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  };
  