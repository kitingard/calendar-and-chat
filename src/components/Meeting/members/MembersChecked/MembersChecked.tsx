import * as React from "react";
import { IMeeting, INewMeeting } from "src/types";
import {
  MembersList,
  MembersLi,
  MembersInput,
  MembersLabel
} from "./MembersCheckedTheme";

export interface MembersCheckedType {
  currentMeeting: IMeeting | INewMeeting;
}

function MembersChecked({ currentMeeting }: MembersCheckedType) {
  return (
    <React.Fragment>
      <MembersList>
        {currentMeeting.members.length > 0 &&
          currentMeeting.members
            .sort((a: any, b: any) => a - b)
            .map((member, i: number) => {
              return (
                <MembersLi key={member.id}>
                  <MembersInput
                    id="membersCheckbox"
                    type="checkbox"
                    checked={member.visited}
                    // onChange={() => props.onClick(member.id)}
                  />
                  <MembersLabel htmlFor="membersCheckbox">
                    {member.name}
                  </MembersLabel>
                </MembersLi>
              );
            })}
        })}
      </MembersList>
    </React.Fragment>
  );
}

export default MembersChecked;
