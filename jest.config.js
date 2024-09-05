module.exports = {
    projects: [
      {
        displayName: 'client',
        testEnvironment: 'jsdom',
        testMatch: ['<rootDir>/client/src/**/__tests__/**/*.(spec|test).[jt]s?(x)'],
        setupFilesAfterEnv: ['<rootDir>/client/src/setupTests.js'],
        moduleFileExtensions: ['js', 'jsx'],
        transform: {
          '^.+\\.[tj]sx?$': 'babel-jest',
        },
        transformIgnorePatterns: [   "/node_modules/(?!(@mui|react-dnd|react-dnd-html5-backend|lodash-es|other-module)/)" ],
        moduleNameMapper: {
          '\\.(css|less|scss|sass)$': '<rootDir>/client/src/__mocks__/mockCSS.js',
        },
      },
      {
        displayName: 'server',
        testEnvironment: 'node',
        testMatch: ['<rootDir>/server/**/__tests__/**/*.(spec|test).[jt]s?(x)'],
        moduleFileExtensions: ['js'],
        transform: {},
        transformIgnorePatterns: [ "/node_modules/"],
        //transform: {'^.+\\.[tj]sx?$': 'babel-jest'},
        //transformIgnorePatterns: [ "/node_modules/(?!(@mui|react-dnd|react-dnd-html5-backend|some-other-esm-library)/)"],
      },
    ]
  };

  