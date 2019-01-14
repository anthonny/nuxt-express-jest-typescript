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
    'ts',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.ts$': stackDir + '/node_modules/ts-jest/preprocessor.js',
    '.*\\.(vue)$': stackDir + '/node_modules/vue-jest',
    '^.+.js$': stackDir + '/node_modules/babel-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  snapshotSerializers: [stackDir + '/node_modules/jest-serializer-vue'],

  coverageDirectory: stackDir + '/coverage/frontend',
  collectCoverageFrom: [
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.{js,ts,vue}',
    'pages/**/*.{js,ts,vue}',
    'store/**/*.{js,ts,vue}',
    '!jest.conf.js',
    '!**/node_modules/**'
  ]
}
