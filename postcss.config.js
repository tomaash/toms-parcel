// module.exports = (ctx) => {
//   return {
//     plugins: [
//       require("postcss-import")({ addDependencyTo: ctx.webpack }),
//       require('tailwindcss')('./tailwind.js'),
//       require('postcss-preset-env')({ stage: 0 }),
//     ]
//   }
// }


// var tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('postcss-preset-env')({ stage: 0 })
  ]
}
