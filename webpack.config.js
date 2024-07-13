// const path = require('path');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.svg$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 10000, // Inline files smaller than 10 kB
//               fallback: 'file-loader',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.jpg$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 10000, // Inline files smaller than 10 kB
//               fallback: 'file-loader',
//             },
//           },
//         ],
//       },
//       // Add other loaders as needed
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
// };
