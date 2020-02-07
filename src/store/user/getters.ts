import { GetterTree } from "vuex";
import { IUserState } from "./state";
import { IRootState } from "../store";
import { USER } from "../type";
import { isEmpty } from 'lodash';

const userGetters: GetterTree<IUserState, IRootState> = {
    [USER.IS_LOGIN]: (state: IUserState, payload: any) => {
        const { user } = state;
        return isEmpty(user);
    }
} as GetterTree<IUserState, IRootState>;

export default userGetters;
