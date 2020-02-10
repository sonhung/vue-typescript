import { get } from 'lodash';

export class Utils {
    public getLayout(route: any) {
        const path = get(route, 'history.current.path', '');
        if (path === '/login') {
            return 'second';
        }
        return 'default';
    }
}
