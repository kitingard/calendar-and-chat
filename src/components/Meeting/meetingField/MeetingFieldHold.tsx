import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";
import MeetingField from "../../../styles/MeetingField";
import MeetingFieldCreate from "./MeetingFieldCreate";
// import hours from '../../../assets/strings/meeting/MeetingText'

import "moment/locale/ru";

// const MeetingLabel = styled.label`
//     width: 128px;
//     height: 20px;
//     margin-right: 6px;
//     margin-top: 5px;
//     font-size: 13px;
//     text-indent: 5px;
// `
// const MeetingInput = styled.input`
//     width: 158px;
//     height: 26px;
//     margin-bottom: 10px;
//     border: 1px solid rgba(0, 0, 0, 0.3);
//     border-radius: 3px;
//     font-size: 13px;
//     text-indent: 5px;
// `

const MeetingText = styled.p`
  width: 128px;
  height: 20px;
  padding: 0px;
  margin-right: 6px;
  margin-top: 5px;
  font-size: 13px;
  text-indent: 5px;
`;
const MeetingFieldDisabled = styled(MeetingField)`
  background: rgba(196, 196, 196, 0.3);
  border: none;
`;
// const MeetingSelect = styled.select`
//     width: 162px;
//     height: 28px;
//     margin-bottom: 10px;
//     background: #FFFFFF;
//     border: 1px solid rgba(0, 0, 0, 0.3);
//     border-radius: 3px;
//     font-size: 13px;
// `
// const MeetingSelectOption = styled.option`

// `
const today: string = moment().format("dd DD.MM.YYYY");

export default class MeetingFieldHold extends MeetingFieldCreate {
  // public state = {
  //     meetingDay: '',
  //     meetingEndTime: '',
  //     meetingStartTime: '',
  //     meetingTheme: '',
  // }

  /* Изменение данных в поле ввода
   */

  // public onThemeChange = (evt: any) => this.setState({
  //     meetingTheme : evt.target.value,
  // })

  // public onStartTimeChange = (evt: any) => this.setState({
  //     meetingStartTime : evt.target.value,
  // })

  // public onEndTimeChange = (evt: any) => this.setState({
  //     meetingEndTime : evt.target.value,
  // })

  public render() {
    return (
      <React.Fragment>
        <MeetingText>Тема встречи</MeetingText>
        <MeetingFieldDisabled>{}</MeetingFieldDisabled>
        <MeetingText>День встречи</MeetingText>
        <MeetingFieldDisabled>{today}</MeetingFieldDisabled>
        <MeetingText>Начало встречи</MeetingText>
        <MeetingFieldDisabled>{}</MeetingFieldDisabled>
        <MeetingText>Окончание встречи</MeetingText>
        <MeetingFieldDisabled>{}</MeetingFieldDisabled>
      </React.Fragment>
    );
  }
}
