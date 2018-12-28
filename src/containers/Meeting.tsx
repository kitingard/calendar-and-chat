import * as actions from '../actions';
import Meetings from '../components/Meeting';

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
        onAddMember: () => dispatch(actions.addMember()),
        onMeetingClose: () => dispatch(actions.closeMeeting()),
        onMeetingOpen: () => dispatch(actions.openMeeting()),
        onStopAddMember: () => dispatch(actions.addMember()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);