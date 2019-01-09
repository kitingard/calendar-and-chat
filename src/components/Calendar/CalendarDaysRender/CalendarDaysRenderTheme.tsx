import styled from "styled-components";
import CalendarFieldWrap from "../../../styles/CalendarFieldWrap";

export const Date = styled.p`
  margin: 0px;
  padding: 5px 89px 11px 0px;
  border-right: 1px solid #dedede;
  border-top: 1px solid #dedede;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;
export const DateDisabled = styled(Date)`
  background: rgba(196, 196, 196, 0.3);
`;
export const CalendarFieldDisabled = styled(CalendarFieldWrap)`
  background: rgba(196, 196, 196, 0.3);
`;
