import * as React from 'react'
import styled from 'styled-components'
import chaticon from '../assets/img/chat-icon.svg'
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
    border-radius: 6px 6px 0px 0px;
`
const ChatTitle = styled(ModalTitle)`
    padding: 10px 125px 10px 103px;
    color: #FFFFFF;
    background: #3D454C;
    border-radius: 6px 6px 0px 0px;
`
const CloseBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 21px;
    width: 19px;
    height: 10px;
`
const CloseIcon = styled.div`
    width: 19px;
    height: 2px;
    background: #FFFFFF;
    border-radius: 0px 0px 6px 0px;
`
const ChatIcon = styled.img`
    position: absolute;
    top: 9px;
    left: 16px;
`
const ChatInput = styled.textarea`
    position: absolute;
    bottom: 22px;
    left: 16px;
    width: 302px;
    height: 60px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px 3px 6px 3px;
`
const None = styled.div`
    display: none;
`

function Chat({chatOpen, onChatClose}:Props) {
        if (chatOpen) {
            return (
                <ChatWrapper>
                    <ChatTitle>
                        <ChatIcon src={chaticon} />
                        Чат-Форум{chatOpen}
                        <CloseBtn onClick={onChatClose}><CloseIcon /></CloseBtn>
                    </ChatTitle>
                    <ChatInput />
                </ChatWrapper>
            )
        } else {
            return(
                <None />
            )
        }
}

export default Chat;