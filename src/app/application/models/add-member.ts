import { MemberEntity } from "./member";
import { LoginEntity } from "../../auth/models/login";

export class AddMemberEntity {
  member?: MemberEntity;
  user?: LoginEntity;
}
