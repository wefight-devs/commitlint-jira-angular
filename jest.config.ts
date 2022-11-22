import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: 'src',
    moduleNameMapper: {
      '^src/(.*)': '<rootDir>/$1',
    },
    testRegex: '.*\\.test\\.ts$',
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    collectCoverageFrom: [
      '**/*.ts',
      '!**/*.d.ts',
      '!**/*.module.ts',
      '!**/*.spec.ts',
      '!**/*.config.ts',
      '!**/*.swaggerSchema.ts',
      '!**/*.mock.ts',
    ],
    coverageDirectory: '../reports/coverage',
    reporters: ['default', 'jest-junit'],
    coverageReporters: ['text', 'cobertura', 'lcov'],
    testEnvironment: 'node',
    coveragePathIgnorePatterns: [
      '<rootDir>/dist/',
      '<rootDir>/clientDist/',
      '<rootDir>/coverage/',
      '<rootDir>/node_modules/',
      '<rootDir>/swaggerGenerator/',
      '<rootDir>/scripts/',
      '<rootDir>/reports*',
      '<rootDir>/swaggerGenerator/',
      '<rootDir>/scripts/',
      '<rootDir>/src/main.ts',
      '<rootDir>/test/',
    ],
  };
};