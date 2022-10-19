import {reqGood} from "@/api";
const state={
    cateGoodLis:{}
}
const mutations={
    CATEGOODONE(state,cateGoodLis){
        state.cateGoodLis=cateGoodLis
    }
}
const actions={
    async cateGoodOne({commit}){
        let result = await reqGood(1001);
        console.log(result)
        console.log(result.result)
        // if (result.commodityId==1001){
        //     commit("CATEGOODONE",result.data)
        // }
        commit("CATEGOODONE",result.result)
    }

}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}