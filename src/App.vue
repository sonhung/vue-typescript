<template>
	<div id="app">
		<component :is="layout">
			<router-view/>
		</component>
	</div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';

    const defaultLayout = 'default';

    @Component
    export default class App extends Vue {

        get layout() {
            return ((this.$route.meta as any).layout || defaultLayout) + '-layout';
        }
    }
</script>
