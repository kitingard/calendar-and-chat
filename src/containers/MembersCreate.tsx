import * as actions from "../actions";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";
import MembersCreate from "src/components/Meeting/MembersCreate";

export function mapStateToProps({ members }: StoreState) {
  return {
    members
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.reduxActions>) {
  return {
    onAddMember: (array: any) => dispatch(actions.addMember(array))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersCreate);
