<template>
	<div id="app">
		<component :is="layout">
			<router-view/>
		</component>
	</div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import { Utils } from '@/utils';

    const utils = new Utils();

    @Component
    export default class App extends Vue {

        get layout() {
            const layout = utils.getLayout(this.$router);
            return ((this.$route.meta as any).layout || layout) + '-layout';
        }
    }
</script>
