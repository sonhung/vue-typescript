import { ActionTree } from "vuex";
import { IRootState } from "../store";
import { IUserState } from "./state";
import { USER } from "../type";

const userActions: ActionTree<IUserState, IRootState> = {
    [USER.USER_LOGIN]({ commit }, payload): any {
        commit(USER.LOGIN_SUCCESS, payload);
    }
};

export default userActions
