module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/src/test/cssTransform.ts'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '@api': ['<rootDir>/src/api'],
    '@common': ['<rootDir>/src/common'],
    '@assets/(.*)': ['<rootDir>/src/assets/$1'],
    '@movies': ['<rootDir>/src/movies'],
    '@pages': ['<rootDir>/src/pages'],
    '@ui/icons': ['<rootDir>/src/ui/icons'],
    '@ui': ['<rootDir>/src/ui'],
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  }
}
