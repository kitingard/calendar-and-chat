import * as actions from "../actions";
import Meeting from "../components/Meeting/Meeting";

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
    onMeetingOpen: () => dispatch(actions.openMeeting())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meeting);
