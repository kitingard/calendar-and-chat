import * as actions from "../actions";
import MembersWrap from "../components/Meeting/MembersWrap";
import { Member } from "../types";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";

export function mapStateToProps({ members }: StoreState) {
  return {
    members
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.reduxActions>) {
  return {
    onAddMember: (object: Member) => dispatch(actions.addMember(object))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersWrap);
