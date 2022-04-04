import { UserType } from "module/user/types";

export type FingerprintType = {
  userId: UserType["id"];
  fingerprint: string;
};
