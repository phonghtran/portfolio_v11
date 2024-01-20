<script>
	import NavCaseStudy from '$lib/components/NavCaseStudy.svelte';

	import { caseStudies } from '../../../stores.js';

	import Obviously from '$lib/casestudies/obviously.svelte';
	import ObviouslyEfficiency from '$lib/casestudies/obviouslyEfficiency.svelte';
	import ObviouslyAttributes from '$lib/casestudies/obviouslyAttributes.svelte';

	import Worldpay from '$lib/casestudies/worldpay.svelte';
	import Mastercard from '$lib/casestudies/mastercard.svelte';

	export let data;

	$: projectName = data.projectName;
</script>

<NavCaseStudy {projectName} />
{#if projectName === 'obviously'}
	<Obviously />
{:else if projectName === 'obviouslyAttributes'}
	<ObviouslyAttributes />
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
