import * as actions from '../actions';
import Meeting from '../components/Meeting/Meeting';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../types/index';


export function mapStateToProps({ meetingOpen, meetingDisabled, memberAdd, memberState }: StoreState) {
    return {
        meetingDisabled,
        meetingOpen,
        memberAdd,
        memberState,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.openModalAction>) {
    return {
        onMeetingClose: () => dispatch(actions.closeMeeting()),
        onMeetingOpen: () => dispatch(actions.openMeeting()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meeting)