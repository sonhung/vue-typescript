import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { isEmpty } from 'lodash';

import ExampleComponent from '@/components/ExampleComponent.vue';
import { USER } from '@/store/type';
import router from "@/router";
const namespace: string = 'user';

@Component({
    name: 'Login',
    components: { ExampleComponent },
})
export default class Login extends Vue {
    @Action(USER.USER_LOGIN, { namespace }) userLogin: any;
    @State('user') userInfo: any;
    public user: object = { name: '', password: '' };

    submitLogin() {
        this.userLogin(this.user);
        const { user: { name = '' } = {} } = this.userInfo;
        if (!isEmpty(name)) router.push('/');
    }


}
