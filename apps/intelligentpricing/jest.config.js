
module.exports = {
  displayName: "intelligentpricing",
  preset: '../../jest.preset.js',
  resolver: "jest-preset-angular/build/resolvers/ng-jest-resolver.js",
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/apps/intelligentpricing',
  transform: { '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
},
  transformIgnorePatterns:[ 'node_modules/(?!ng2-charts|@angular|@ngrx|ngx-bootstrap|lodash-es)' ],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      "@vfpricing/assets": "<rootDir>/../../../libs/assets/src/index.ts",
      "@vfpricing/common": "<rootdir>/../../../libs/common/src/index.ts",
      "@vfpricing/defination": "<rootdir>/../../../libs/defination/src/index.ts",
      "@vfpricing/material": "<rootdir>/../../../libs/material/src/index.ts",
      "@vfpricing/shared": "<rootdir>/../../../libs/shared/src/index.ts",
      "@vfpricing/vf-config-db": "<rootdir>/../../../libs/vf-config-db/src/index.ts",
      "@vfpricing/vf-enums": "<rootdir>/../../../libs/vf-enums/src/index.ts",
      'ng2-charts': "<rootDir>../../node_modules/ng2-charts/fesm2020/ng2-charts.mjs",
  }
};
