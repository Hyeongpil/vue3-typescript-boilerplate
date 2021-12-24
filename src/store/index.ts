import Vuex, { createLogger } from "vuex";

const noProd = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  plugins: noProd ? [createLogger({})] : [],
  strict: noProd,
});
