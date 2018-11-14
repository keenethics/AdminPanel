const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  return {
    entry: './client/index.js',
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: 'vendors.[chunkhash].js',
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
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => {
                  const plugins = [autoprefixer()];

                  if (argv.mode === 'production') plugins.push(cssnano());

                  return plugins;
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new CleanPlugin(['dist']),
      new HtmlPlugin({ template: './client/index.html' }),
      new StylelintPlugin(),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
      }),
    ],
    optimization: {
      minimizer: [new TerserPlugin()],
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
        },
      },
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
