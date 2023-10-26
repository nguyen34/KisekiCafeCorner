// This test reducer serves as an example on how to write reducer tests
export const initialState: TestState = {
    count: 0,
  }
  
  const testReducer = (state: TestState = initialState, action: TestAction) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1,
        }
      case 'DECREMENT':
        return {
          count: state.count - 1,
        }
      default:
        return state
    }
  }

  export default testReducer;