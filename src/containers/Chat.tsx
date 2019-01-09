import * as actions from "../actions";
import Chat from "../components/Chat/Chat/Chat";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState, INewUser } from "../types/index";

export function mapStateToProps({
  messages,
  currentUser,
  chatUsers
}: StoreState) {
  return { messages, currentUser, chatUsers };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.reduxActions>) {
  return {
    onCreateChatUser: (chatUser: INewUser) =>
      dispatch(actions.createUser(chatUser)),
    onAddMessage: (text: string) => dispatch(actions.addMessage(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
