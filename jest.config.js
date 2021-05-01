module.exports = {
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: [
    "html",
    "lcov",
    "text",
  ],
  coverageThreshold: {
    global: {
      lines: 95,
    },
  },
  moduleDirectories: [
    "node_modules",
    "<rootDir>/package/src",
  ],
  setupFiles: [
  ],
  testMatch: [
    "<rootDir>/**/*.test.js",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  verbose: true,
};
