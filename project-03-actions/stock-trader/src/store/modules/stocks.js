import stocks_data from "@/data/stocks";

export default {
  state: {
    stocks: [],
  },
  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
    randomizeStocks(state) {
      state.stocks.forEach((stock) => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.42));
      });
    },
  },
  actions: {
    buyStock({ commit }, order) {
      commit("buyStocks", order);
    },
    initStocks({ commit }) {
      commit("setStocks", stocks_data);
    },
    randomizeStocks({ commit }) {
      commit("randomizeStocks");
    },
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
};
