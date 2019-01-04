import * as actions from '../actions';
import MembersWrap from '../components/Meeting/MembersWrap';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../types/index';


export function mapStateToProps({ members }: StoreState) {
    return {
        members,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.openModalAction>) {
    return {
        onAddMember: () => dispatch(actions.addMember()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersWrap);