const state = {
  //取出本地存储
  nm : window.localStorage.getItem('nowNm') || '北京',
  id : window.localStorage.getItem('nowId') || 1
}

const action = {

}
const mutations = {
  //定义本地存储改变state:状态管理方法
  CITY_INFO(state, payload) {
    state.nm = payload.nm;
    state.id = payload.id;
  }
}

export default{
  namespaced: true,
  state,
  action,
  mutations
}
