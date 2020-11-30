module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  transform: { "^.+\\.(ts|tsx)$": "babel-jest" },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  moduleNameMapper: {
    "^.+\\.module\\.css$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "src/(.*)": "<rootDir>/src/$1",
    "test/(.*)": "<rootDir>/test/$1",
  },
};
