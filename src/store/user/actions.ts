import { ActionTree } from 'vuex';

import { IRootState } from '../store';
import { IUserState } from './state';
import { USER } from '../type';
import { UserService } from '../../services/UserService';
import router from '@/router';

const userService = new UserService();

const userActions: ActionTree<IUserState, IRootState> = {
    [USER.USER_LOGIN]({ commit }, payload): any {
        userService.login(payload).then((res: any) => {
            const { token = '' } = res;
            if (token) {
                localStorage.setItem('token', token);
                commit(USER.LOGIN_SUCCESS, payload);
                router.push('/');
            }
        });
    },
};

export default userActions;
