import Redux from 'redux';

const modalViewReducer = (state = null, action) => {
  switch (action.type) {
    case 'MODAL_VIEW':
      return !state;
    default:
      return state;
  }
};

export default modalViewReducer;