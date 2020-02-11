import { namespace } from 'vuex-class';

export const USER = {
    USER_LOGIN: 'userLogin',
    LOGIN_SUCCESS: 'loginSuccess',
    IS_LOGIN: 'isLogin',
    USER_LOGOUT: 'userLogout',
    LOGOUT_SUCCESS: 'logoutSuccess'
};

export const userNameSpace = namespace('user');
