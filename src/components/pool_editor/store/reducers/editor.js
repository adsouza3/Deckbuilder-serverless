
import { FETCH_CARDS_FROM_EXPORT } from 'components/pool_editor/store/actions/board';

export default (state = null, action) => {
  switch (action.type) {
  case FETCH_CARDS_FROM_EXPORT:
    return { ...state, hasImported: true };
  default:
    return state;
  }
};