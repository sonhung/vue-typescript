<template>
	<div>
    ahihi layout second ne
		<router-view/>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'second-layout',
    })
    export default class SecondLayout extends Vue {
    }
</script>

<style scoped>

</style>
