const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Uncomment to add service-worker
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv && argv.mode && argv.mode === 'production';

  return {
    entry: './client/index.js',
    output: {
      filename: isProduction ? '[name].[chunkhash].js' : '[name].[hash].js',
      chunkFilename: isProduction ? 'vendor.[chunkhash].js' : 'vendor.[hash].js',
      path: `${__dirname}/dist`,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => {
                  const plugins = [autoprefixer()];

                  if (isProduction) plugins.push(cssnano());

                  return plugins;
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        Pages: path.resolve(__dirname, 'client/pages'),
        Layout: path.resolve(__dirname, 'client/components/layout'),
        Common: path.resolve(__dirname, 'client/components/common'),
        Form: path.resolve(__dirname, 'client/components/form'),
      },
      extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
      new CleanPlugin(['dist']),
      new HtmlPlugin({ template: './client/index.html' }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
      }),
      // Uncomment to add service-worker
      // new WorkboxPlugin.GenerateSW({
      //   // these options encourage the ServiceWorkers to get in there fast
      //   // and not allow any straggling "old" SWs to hang around
      //   clientsClaim: true,
      //   skipWaiting: true,
      // }),
    ],
    optimization: {
      minimizer: [new TerserPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            enforce: true,
          },
        },
      },
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
  };
};
