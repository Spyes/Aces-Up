import { DEAL_HAND, dealHand } from './actions';
import { sendMessage, getMessage } from './socket';

export default function rootReducer(state = {}, action) {
  switch(action.type) {
  case DEAL_HAND:
    sendMessage("draw_card", {});
    return {hand: [{suit: "Diamonds", rank: "King"}]}
  default:
    return state;
  }
}
