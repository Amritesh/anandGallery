const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addWebpackAlias({
        ['utils']: path.resolve(__dirname, 'src/utils'),
        ['config']: path.resolve(__dirname, 'src/config'),
        ['modules']: path.resolve(__dirname, 'src/modules'),
        ['constants']: path.resolve(__dirname, 'src/constants')
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);