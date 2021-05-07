
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['oG6qE17nJ49YC1CiJcxLL2'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  