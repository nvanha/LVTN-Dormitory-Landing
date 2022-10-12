import { ReactComponent as Announcement } from '~/assets/illustrations/dashboard/Announcement.svg';
import { ReactComponent as Attention } from '~/assets/illustrations/dashboard/Attention.svg';
import { ReactComponent as CheckReminder } from '~/assets/illustrations/dashboard/CheckReminder.svg';
import { ReactComponent as CheckTime } from '~/assets/illustrations/dashboard/CheckTime.svg';
import { ReactComponent as Finding } from '~/assets/illustrations/dashboard/Finding.svg';
import { ReactComponent as FYI } from '~/assets/illustrations/dashboard/FYI.svg';
import { ReactComponent as NewMessage } from '~/assets/illustrations/dashboard/NewMessage.svg';
import { ReactComponent as Protection } from '~/assets/illustrations/dashboard/Protection.svg';
import { ReactComponent as Rating } from '~/assets/illustrations/dashboard/Rating.svg';
import { ReactComponent as Searching } from '~/assets/illustrations/dashboard/Searching.svg';
import { ReactComponent as Shopping } from '~/assets/illustrations/dashboard/Shopping.svg';
import { ReactComponent as TimeTable } from '~/assets/illustrations/dashboard/TimeTable.svg';
import { ReactComponent as Welcome } from '~/assets/illustrations/dashboard/Welcome.svg';
import { ReactComponent as Meeting } from '~/assets/illustrations/website/Meeting.svg';

export const CSAnnouncement = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Announcement
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSAttention = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Attention
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSCheckReminder = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <CheckReminder
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSCheckTime = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <CheckTime
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSFinding = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Finding
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSFYI = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <FYI
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSNewMessage = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <NewMessage
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSProtection = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Protection
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSRating = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Rating
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSSearching = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Searching
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSShopping = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Shopping
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSTimeTable = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <TimeTable
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSWelcome = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Welcome
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);

export const CSMeeting = ({
  customClassName = '',
  styleInline = {},
  onClick = null,
}) => (
  <Meeting
    className={customClassName}
    style={styleInline}
    onClick={onClick ? () => onClick() : null}
  />
);
