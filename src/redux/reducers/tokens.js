const initialState = {
  tokens: []
};

export default function(state = initialState, action) {
  switch(action.type) {

    case 'tokens/load':
      return {
        tokens: action.payload
      };

    default:
      return state;
  }
}