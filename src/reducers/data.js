const initialState = {data: null}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "DATA":
      console.log(action);
      return {
        ...state,
        data: action.data
      }

    default:
      return state;
  }
}