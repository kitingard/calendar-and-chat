import * as actions from '../actions';
import Meetings from '../components/Meeting';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../types/index';


export function mapStateToProps({ meetingOpen, meetingDisabled }: StoreState) {
    return {
        meetingDisabled,
        meetingOpen,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.openModalAction>) {
    return {
        onMeetingClose: () => dispatch(actions.closeMeeting()),
        onMeetingOpen: () => dispatch(actions.openMeeting()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);