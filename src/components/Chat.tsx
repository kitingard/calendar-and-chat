import * as React from 'react'
import styled from 'styled-components'
import cross from '../assets/img/cross.svg'

import ModalTitle from '../styles/ModalTitle'

export interface Props {
    chatOpen: boolean
    onChatClose?: () => void
}

const ChatWrapper = styled.div`
    position: absolute;
    bottom: 81px;
    right: 21px;
    width: 332px;
    height: 444px;
    background: #FFFFFF;
    border: 1px solid #C5C4C4;
    border-radius: 6px 6px 0px 0px;
`
const CloseBtn = styled.div`
    position: absolute;
    top: 16px;
    right: 18px;
    width: 11px;
    height: 11px;
`
const CrossIcon = styled.img`
    position: absolute;
    right: 0px;
`

function Chat({chatOpen, onChatClose}:Props) {
        if (chatOpen) {
            return (
                <ChatWrapper>
                    <ModalTitle>
                        Чат{chatOpen}
                        <CloseBtn onClick={onChatClose}><CrossIcon src={cross} /></CloseBtn>
                    </ModalTitle>
                </ChatWrapper>
            )
        } else {
            return(
                <div />
            )
        }
}

export default Chat;