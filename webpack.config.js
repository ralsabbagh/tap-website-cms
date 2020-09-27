var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
// const transformRemoveConsole = require("babel-plugin-transform-remove-console");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin-legacy');

const options = {
  sitemap: 'https://www.tap.company/sitemap.xml',
  policy: [
    {
      userAgent: 'Googlebot',
      allow: '/',
      crawlDelay: 10,
    },
    {
      userAgent: 'OtherBot',
      allow: ['/allow-for-all-bots', '/allow-only-for-other-bot'],
      crawlDelay: 10,
    },
    {
      userAgent: '*',
      allow: '/',
      disallow: '/search',
      crawlDelay: 10,
    },
  ],
};

const pathsToClean = [];

let browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: 4,
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
    usedExports: true,
    splitChunks: {
      minChunks: 1,
      chunks: 'async',
    },
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_compontents)/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new LoadablePlugin(),
    // new transformRemoveConsole(),
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new CleanWebpackPlugin(pathsToClean),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: true,
        ecma: 6,
        mangle: true,
      },
      sourceMap: true,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new CompressionPlugin({
      compressionOptions: { level: 20 },
      algorithm: 'gzip',
      asset: '[path].gz[query]',
      test: /\.js$|\.css$|\.html$|\.json$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new RobotstxtPlugin(options),
  ],
};

let serverConfig = {
  entry: './src/server/index.js',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: 4,
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
    usedExports: true,
    splitChunks: {
      minChunks: 1,
      chunks: 'async',
    },
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    //path: __dirname,
    path: path.join(__dirname, '/dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_compontents)/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new LoadablePlugin(),
    // new transformRemoveConsole(),
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
    new CleanWebpackPlugin(pathsToClean),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: true,
        ecma: 6,
        mangle: true,
      },
      sourceMap: true,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new CompressionPlugin({
      compressionOptions: { level: 20 },
      algorithm: 'gzip',
      asset: '[path].gz[query]',
      test: /\.js$|\.css$|\.html$|\.json$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new RobotstxtPlugin(options),
  ],
};

module.exports = [browserConfig, serverConfig];
