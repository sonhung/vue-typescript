import { User } from "@/models/User";

export interface IUserState {
    user?: User;
}

export class UserState implements IUserState {
    public user?: User;
}
