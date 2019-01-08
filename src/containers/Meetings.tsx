import * as actions from "../actions";
import Meetings from "../components/Meeting/Meetings";
import { Meeting } from "../types";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";

export function mapStateToProps({ meetingOpen, currentDate }: StoreState) {
  return {
    meetingOpen,
    currentDate
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.reduxActions>) {
  return {
    onMeetingClose: () => dispatch(actions.closeMeeting()),
    onMeetingOpen: () => dispatch(actions.openMeeting()),
    onCreateMeeting: (object: Meeting) =>
      dispatch(actions.createMeeting(object))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meetings);
