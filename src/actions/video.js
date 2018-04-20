import CONSTANTS from '../data/Constants';

export function addVideo(source, recipeId = null, videoType = CONSTANTS.VIDEO.TYPE.YOUTUBE) {
  return {
    type: CONSTANTS.ACTION_TYPES.ADD_VIDEO,
    source,
    recipeId,
    videoType
  };
}

export function removeAllVideos() {
  return {
    type: CONSTANTS.ACTION_TYPES.REMOVE_ALL_VIDEOS
  };
}
