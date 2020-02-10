import { MutationTree } from 'vuex';
import { IUserState } from './state';
import { USER } from '../type';

const userMutations: MutationTree<IUserState> = {
    // tslint:disable-next-line:no-empty
    [USER.LOGIN_SUCCESS]: (state, payload: any) => {
        state.user = payload;
    },
} as MutationTree<IUserState>;

export default userMutations;
