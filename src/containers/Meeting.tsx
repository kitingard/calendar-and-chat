import * as actions from "../actions";
import Meeting from "../components/Meeting/Meeting";
import { IMeeting } from "../types";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";

export function mapStateToProps({ currentMeeting, meetings }: StoreState) {
  return {
    currentMeeting,
    meetings
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.reduxActions>) {
  return {
    onMeetingClose: () => dispatch(actions.closeMeeting()),
    onCreateMeeting: (meeting: IMeeting) =>
      dispatch(actions.createMeeting(meeting)),
    onEditMeeting: (meeting: IMeeting) =>
      dispatch(actions.editMeeting(meeting)),
    onDeleteMeeting: (meetingId: number) =>
      dispatch(actions.deleteMeeting(meetingId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meeting);
