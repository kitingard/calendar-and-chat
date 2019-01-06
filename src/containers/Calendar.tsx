import * as actions from "../actions";
import Calendar from "../components/Calendar/Calendar";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";

export function mapStateToProps({ meetingOpen, meetings }: StoreState) {
  return {
    meetingOpen,
    meetings
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.reduxActions>) {
  return {
    onMeetingOpen: () => dispatch(actions.openMeeting())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
