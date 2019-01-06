import * as actions from "../actions";
import Calendar from "../components/Calendar/Calendar";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";

export function mapStateToProps({
  meetingOpen,
  chatOpen,
  meetings
}: StoreState) {
  return {
    chatOpen,
    meetingOpen,
    meetings
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.openModalAction>
) {
  return {
    onChatOpen: () => dispatch(actions.openChat()),
    onMeetingOpen: () => dispatch(actions.openMeeting())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
