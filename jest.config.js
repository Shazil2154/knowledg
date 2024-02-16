/* eslint-disable */
/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    setupFiles: ['<rootDir>/src/test/setup/test-env-setup.ts'],
    setupFilesAfterEnv: ['<rootDir>/src/test/setup/test-setup.ts'],
    coveragePathIgnorePatterns: ['/node_modules/', '/src/test', '/src/scripts', '/build/', '/coverage/'],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/coverage/'],
    testEnvironment: 'node',
}
