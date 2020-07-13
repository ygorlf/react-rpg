// Action Types
/* export const SET_PLAYER_POSITION = 'walkingman/game/SET_PLAYER_POSITION';

export const initialState = {
  position: [0, 0],
  positionPerson: '0 0',
};

// Reducer
export default function (state = initialState, action) {
	switch (action.type) {
	case SET_PLAYER_POSITION:
		return Object.assign({}, state, {
			user: action.info,
		});
	default:
		return state;
	}
} */

const SET_PLAYER_POSITION = 'walkingman/game/SET_PLAYER_POSITION';

export const initialState = {
  position: [0, 0],
  positionPerson: '0 0',
};

// Reducer
export default function (state = initialState, action) {
	switch (action.type) {
	case SET_PLAYER_POSITION:
		return Object.assign({}, state, {
      position: action.info.position,
      positionPerson: action.info.positionPerson,
    });
	default:
		return state;
	}
}

export const updatePosition = info => {
  return {
    type: SET_PLAYER_POSITION,
    info: info,
  }
}
