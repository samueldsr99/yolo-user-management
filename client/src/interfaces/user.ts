import { IDBResult } from ".";
import { Address } from "./address";

export interface User extends IDBResult {
  email: string;
  name: string;
  addressId?: number;
  address?: Address;
}
