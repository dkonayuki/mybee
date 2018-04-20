import CONSTANTS from '../data/Constants';

const initialState = [];

function video(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.ACTION_TYPES.ADD_VIDEO:
      // not add if existed
      if (state.filter(v => v.source === action.source).length > 0) return state;
      return [...state, {
        source: action.source,
        recipeId: action.recipeId,
        videoType: action.videoType
      }];
    case CONSTANTS.ACTION_TYPES.REMOVE_ALL_VIDEOS:
      return [];
    default:
      return state;
  }
}

export default video;
