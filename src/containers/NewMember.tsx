import * as actions from "../actions";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";
import NewMember from "src/components/Meeting/NewMember";
// import membersArray from "src/components/Meeting/NewMember";
// import { Member } from "../types";

export function mapStateToProps({ members }: StoreState) {
  return {
    members
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.openModalAction>
) {
  return {
    onAddMember: () => dispatch(actions.addMember())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMember);
