import * as React from "react";
import styled from "styled-components";
import cross from "../../assets/img/cross.svg";
import Form from "../../styles/Form";
import MeetingWrapper from "../../styles/MeetingWrapper";
import ModalTitle from "../../styles/ModalTitle";

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
const CrossIcon = styled.img`
  position: absolute;
  right: 0px;
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 18px;
  width: 11px;
  height: 11px;
`;

export interface modalProps {
  show: boolean;
  children: JSX.Element | JSX.Element[];
  title: string;
  onClose: () => void;
}

export default ({ show, children, onClose, title }: modalProps) =>
  show ? (
    <Overlay onClick={onClose}>
      <MeetingWrapper onClick={evt => evt.stopPropagation()}>
        <ModalTitle>
          <span>{title}</span>
          <CloseBtn onClick={onClose}>
            <CrossIcon src={cross} />
          </CloseBtn>
        </ModalTitle>
        <Form>{children}</Form>
      </MeetingWrapper>
    </Overlay>
  ) : null;
