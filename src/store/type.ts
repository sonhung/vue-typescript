import { namespace } from 'vuex-class';

export const USER = {
    USER_PROFILE: 'userProfile',
    UPDATE_PROFILE: 'updateProfile',
    CHECK: 'userCheck',
    USER_LOGIN: 'userLogin',
    LOGIN_SUCCESS: 'loginSuccess',
    IS_LOGIN: 'isLogin',
};

export const userNameSpace = namespace('user');
