import * as actions from '../actions'
import Chat from '../components/Chat'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { StoreState } from '../types/index'

export function mapStateToProps({ chatOpen }: StoreState) {
    return {
        chatOpen
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.openModalAction>) {
    return {
        onChatClose: () => dispatch(actions.closeChat()),
        onChatOpen: () => dispatch(actions.openChat()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
