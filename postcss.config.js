module.exports = ({ env }) => ({
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    autoprefixer: {},
    cssnano:
      env === "production"
        ? {
            preset: ["default", { discardComments: { removeAll: true } }],
          }
        : false,
  },
});