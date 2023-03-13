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
