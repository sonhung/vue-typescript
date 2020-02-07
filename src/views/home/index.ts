import {Component, Vue} from 'vue-property-decorator';
import { State } from 'vuex-class';
import ExampleComponent from '@/components/ExampleComponent.vue';

@Component({
    name: 'home',
    components: {ExampleComponent},
})
export default class Home extends Vue {
    @State('user') userInfo: any;

    mounted(){
        console.log('this.userData', this.userInfo)
    }
}
