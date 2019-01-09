import styled from "styled-components";

export const ChatWrapper = styled.div`
  position: absolute;
  bottom: 81px;
  right: 21px;
  width: 332px;
  height: 444px;
  background: #ffffff;
  border-radius: 6px 6px 0px 0px;
`;
export const ChatInput = styled.textarea`
  position: absolute;
  bottom: 22px;
  left: 16px;
  width: 302px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px 3px 6px 3px;
`;
export const ChatBtn = styled.button`
  position: absolute;
  bottom: 13px;
  right: 25px;
  width: 58px;
  height: 58px;
  border: none;
  background: transparent;
  :focus {
    outline: none;
  }
`;
export const ChatIcon = styled.img`
  margin: -2px 0px 0px -6px;
`;
export const ChatMinIcon = styled.img`
  margin: -2px 0px 0px -2px;
`;
export const ChatMessageWrapper = styled.div`
  max-height: 318px;
  overflow-y: scroll;
  padding: 8px 14px;
  margin-bottom: 5px;
`;
export const MessageUserName = styled.div`
  margin: 0px;
  margin-right: 5px;
  font-size: 13px;
  text-indent: 5px;
  color: #929090;
`;
