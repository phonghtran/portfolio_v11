<script>
	import NavCaseStudy from '$lib/components/NavCaseStudy.svelte';

	import { caseStudies } from '../../../stores.js';

	import Obviously from '$lib/casestudies/obviously.svelte';
	import Worldpay from '$lib/casestudies/worldpay.svelte';
	import Mastercard from '$lib/casestudies/mastercard.svelte';

	export let data;

	$: projectName = data.projectName;
</script>

<div class="wrapperMaxWidth">
	<div class="containerMaxWidth">
		<NavCaseStudy {projectName} />

		<h1>{projectName}</h1>

		{#if projectName === 'obviously'}
			<Obviously />
		{:else if projectName === 'worldpay'}
			<Worldpay />
		{:else if projectName === 'mastercard'}
			<Mastercard />
		{:else}
			<p>Page Not Found</p>
		{/if}
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<style>
</style>
