import Vue from "vue";
import Vuex, {
    ActionTree,
    GetterTree,
    Module,
    ModuleTree,
    MutationTree,
    Store
} from "vuex";
import { UserState, IUserState } from "./user/state";
import userActions from "./user/actions";
import userGetters from "./user/getters";
import userMutations from "./user/mutations";
import { namespace } from "vuex-class";

Vue.use(Vuex);

export class UserModule implements Module<IUserState, IRootState> {
    namespaced?: boolean;
    state?: IUserState;
    getters?: GetterTree<IUserState, IRootState>;
    mutations?: MutationTree<IUserState>;
    actions?: ActionTree<IUserState, IRootState>;

    constructor() {
        this.namespaced = true;
        this.state = new UserState();
        this.actions = {
            ...userActions
        };
        this.getters = {
            ...userGetters
        };
        this.mutations = {
            ...userMutations
        };
    }
}

export interface IRootState {
    user: any;
    category: any;
}

export const store: Store<IRootState> = new Store<IRootState>({
    strict: true,
    modules: {
        user: new UserModule(),
    } as ModuleTree<IRootState>,
    plugins: []
});

export const userModule = namespace("user");

export { store as default };
