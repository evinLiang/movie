export default {
    state:{
        card_id:''
    },
    mutations:{
        changeCard(state,cardInfo){ 
            state.card_id = cardInfo.card_id
        }
    }
}