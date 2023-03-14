import { format } from "date-fns";

import { DATE_FORMAT } from "../globals/date";
import { Address } from "../interfaces/address";

export const formatAddress = (address: Address): string => {
  return `${address.line1} ${address.line2 ? `(${address.line2})` : ""} - ${
    address.city
  } - ${address.country}`;
};

export const formatDateString = (dateStr: string) =>
  format(new Date(dateStr), DATE_FORMAT);

export const buildUrl = (pathname: string, query: object) => {
  const queryParams = Object.entries(query)
    .map(([key, value]) => {
      if (!value) return null;
      return `${key}=${value}`;
    })
    .filter(Boolean)
    .join("&");

  if (queryParams.length == 0) return pathname;

  return `${pathname}?${queryParams}`;
};
