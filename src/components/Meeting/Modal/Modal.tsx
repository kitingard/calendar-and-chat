import * as React from "react";
import cross from "../../../assets/img/cross.svg";
import MeetingWrapper from "../../../styles/MeetingWrapper";
import ModalWrapper from "../../../styles/ModalWrapper";
import ModalTitle from "../../../styles/ModalTitle";
import { Overlay, CloseBtn, CrossIcon } from "./ModalTheme";

export interface modalProps {
  show: boolean;
  children: JSX.Element | JSX.Element[];
  title: string;
  onClose: () => void;
}

export default ({ show, children, onClose, title }: modalProps) =>
  show ? (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={evt => evt.stopPropagation()}>
        <ModalTitle>
          <span>{title}</span>
          <CloseBtn onClick={onClose}>
            <CrossIcon src={cross} />
          </CloseBtn>
        </ModalTitle>
        <MeetingWrapper>{children}</MeetingWrapper>
      </ModalWrapper>
    </Overlay>
  ) : null;
