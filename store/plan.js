export default {
    state:{
        amount:'',
        endDate:''
    },
    mutations:{
        changePlan(state,cPlan){ 
            state.amount = cPlan.cAmount;
            state.endDate = cPlan.cEndDate;
        }
    }
}