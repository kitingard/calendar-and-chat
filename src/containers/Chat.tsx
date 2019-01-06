import * as actions from "../actions";
import Chat from "../components/Chat/Chat";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../types/index";

export function mapStateToProps({  }: StoreState) {
  return {};
}

export function mapDispatchToProps(dispatch: Dispatch<actions.reduxActions>) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
