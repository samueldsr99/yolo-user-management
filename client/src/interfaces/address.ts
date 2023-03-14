import { IDBResult } from ".";

export interface Address extends IDBResult {
  line1: string;
  line2?: string;
  country: string;
  city: string;
}

export interface CreateAddress {
  line1: string;
  line2?: string;
  country: string;
  city: string;
}
