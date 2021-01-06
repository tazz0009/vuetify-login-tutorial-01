import router from "../../router/index";

const state = () => ({
  allUsers: [
    {
      id: 1,
      name: "test01",
      email: "test01@test.com",
      password: "1234qwer",
    },
    {
      id: 2,
      name: "test02",
      email: "test02@test.com",
      password: "1234qwer",
    },
  ],
  userInfo: null,
  isLogin: false,
  isLoginError: false,
});

// getters
const getters = {
  isLoginError(state) {
    return state.isLoginError;
  },
  isLogin(state) {
    return state.isLogin;
  },
  getUserInfo(state) {
    return state.userInfo;
  },
};

// actions
const actions = {
  // 로그인 시도
  login({ state, commit }, paylord) {
    const { email, password } = paylord;
    const findUser = state.allUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (findUser) {
      commit("loginSuccess");
      state.userInfo = findUser;
      router.push({ name: "mypage" });
    } else {
      commit("loginError");
    }
  },
  logout({ commit }) {
    commit("logout");
    router.push({ name: "home" });
  },
};

// mutations
const mutations = {
  // 로그인 성공 시
  loginSuccess(state) {
    state.isLogin = true;
    state.isLoginError = false;
  },
  // 로그인 실패 시
  loginError(state) {
    state.isLogin = false;
    state.isLoginError = true;
  },
  logout(state) {
    state.isLogin = null;
    state.isLoginError = null;
    state.userInfo = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
