import { AddToCalendarButton } from 'add-to-calendar-button-react';
import type { AddToCalendarButtonType } from 'add-to-calendar-button-react';

export default function atcb(props: AddToCalendarButtonType) {
  return (
    <AddToCalendarButton
      styleLight="--btn-background: #2f4377; --btn-text: #fff;"
      styleDark="--btn-background: #000;"
      label="Add Event to Calendar"
      buttonStyle="date"
      name={props.name}
      location={props.location}
      startDate={props.startDate}
      endDate={props.endDate}
      startTime={props.startTime}
      endTime={props.endTime}
      timeZone="America/Los_Angeles"
      options="'Apple','Google','iCal','Microsoft365','MicrosoftTeams'"
    ></AddToCalendarButton>
  );
}
