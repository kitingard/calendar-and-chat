import { openModalAction } from '../actions';
import { OPEN_CHAT, OPEN_MEETING } from '../constants/index';
import { StoreState } from '../types/index';

export function openModal(state: StoreState, action: openModalAction):StoreState {
    switch (action.type) {
        case OPEN_MEETING:
          return { ...state, meetingOpen: true };
        case OPEN_CHAT:
          return { ...state, chatOpen: true };
      }
      return state;
  }
