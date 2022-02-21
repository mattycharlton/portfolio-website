export default {
  mount: {
    public: { url: '/matty-charlton-website/', static: true },
    src: { url: '/' },
  },
  plugins: ["@snowpack/plugin-webpack", '@snowpack/plugin-typescript'],
};
