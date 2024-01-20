<script>
	import NavCaseStudy from '$lib/components/NavCaseStudy.svelte';

	import { caseStudies } from '../../../stores.js';

	import Obviously from '$lib/casestudies/obviously.svelte';
	import ObviouslyEfficiency from '$lib/casestudies/obviouslyEfficiency.svelte';
	import Worldpay from '$lib/casestudies/worldpay.svelte';
	import Mastercard from '$lib/casestudies/mastercard.svelte';

	export let data;

	$: projectName = data.projectName;
</script>

<div class="wrapperMaxWidth">
	<div class="containerMaxWidth">
		<NavCaseStudy {projectName} />
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->
{#if projectName === 'obviously'}
	<Obviously />
{:else if projectName === 'obviouslyEfficiency'}
	<ObviouslyEfficiency />
{:else if projectName === 'worldpay'}
	<Worldpay />
{:else if projectName === 'mastercard'}
	<Mastercard />
{:else}
	<p>Page Not Found</p>
{/if}

<style>
</style>
