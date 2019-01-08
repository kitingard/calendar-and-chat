import * as actions from "../actions";
import Calendar from "../components/Calendar/Calendar";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";

export function mapStateToProps({ meetings }: StoreState) {
  return {
    meetings
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.reduxActions>) {
  return {
    onMeetingOpen: (day: Date) => dispatch(actions.newMeeting(day)),
    onMeetingClick: (meetingIg: number) =>
      dispatch(actions.openMeeting(meetingIg))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
