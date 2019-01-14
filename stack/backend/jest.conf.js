const path = require('path')

const stackDir = path.resolve(__dirname, '../..')

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json'
    }
  },
  rootDir: __dirname,
  moduleFileExtensions: [
    'json',
    'js',
    'ts'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.ts$': stackDir + '/node_modules/ts-jest/preprocessor.js',
    '^.+.js$': stackDir + '/node_modules/babel-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  coverageDirectory: stackDir + '/coverage/backend',
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!<rootDir>/test/**/*.{js,ts}',
    '!jest.conf.js',
    '!**/node_modules/**'
  ]
}
