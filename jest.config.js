module.exports = {
    projects: [
      {
        displayName: 'client',
        testEnvironment: 'jsdom',
        testMatch: ['<rootDir>/client/src/**/__tests__/**/*.(spec|test).[jt]s?(x)'],
        setupFilesAfterEnv: ['<rootDir>/client/src/setupTests.js'],
        moduleFileExtensions: ['js', 'jsx'],
        transform: {
          '^.+\\.[tj]sx?$': 'babel-jest'
        },
        transformIgnorePatterns: ['/node_modules/'],
      },
      {
        displayName: 'server',
        testEnvironment: 'node',
        testMatch: ['<rootDir>/server/src/**/__tests__/**/*.(spec|test).[jt]s?(x)'],
        moduleFileExtensions: ['js'],
        transform: {
          '^.+\\.[tj]sx?$': 'babel-jest'
        },
        transformIgnorePatterns: ['/node_modules/'],
      },
      {
        displayName: 'integration',
        testEnvironment: 'node',
        testMatch: ['<rootDir>/tests/integration/**/*.(spec|test).[jt]s?(x)'],
        moduleFileExtensions: ['js'],
        transform: {
          '^.+\\.[tj]sx?$': 'babel-jest'
        },
        transformIgnorePatterns: ['/node_modules/'],
      }
    ]
  };

  
// Debugging
console.log('Jest Config Loaded: Using babel-jest for transformation');