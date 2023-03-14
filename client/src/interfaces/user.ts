import { IDBResult } from ".";
import { Address, CreateAddress } from "./address";

export interface User extends IDBResult {
  email: string;
  name: string;
  addressId?: number;
  address?: Address;
}

export interface CreateUser {
  email: string;
  name?: string;
  address: CreateAddress;
}
