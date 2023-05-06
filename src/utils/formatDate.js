import { format } from "date-fns";

export const formatDayOfMonth = (date) => {
  return format(Date.parse(date), "do");
};

export const formatShortDayOfWeek = (date) => {
  return format(Date.parse(date), "eee");
};

export const formatLongDayOfWeek = (date) => {
  return format(Date.parse(date), "eeee");
};

export const formatMonth = (date) => {
  return format(Date.parse(date), "LLLL");
};

export const formatClock = (date) => {
  return format(Date.parse(date), "HH:mm:ss");
};

export const formatClockShort = (date) => {
  return format(Date.parse(date), "HH:mm");
};
