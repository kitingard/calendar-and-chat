import * as actions from '../actions';
import Calendar from '../components/Calendar';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../types/index';

export function mapStateToProps({ meetingOpen, chatOpen }: StoreState) {
    return {
        chatOpen,
        meetingOpen,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.openModalAction>) {
    return {
        onChatOpen: () => dispatch(actions.openChat()),
        onMeetingOpen: () => dispatch(actions.openMeeting()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
