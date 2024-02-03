<script>
	import NavTechDemo from '$lib/components/NavTechDemo.svelte';

	// import Portfolio from '$lib/techDemos/portfolio.svelte';
	import AIMaps from '$lib/techdemos/aiMaps.svelte';
	import SalesPrototype from '$lib/techdemos/salesPrototype.svelte';
	import Worldpay from '$lib/techdemos/worldpay.svelte';
	import MusicTracker from '$lib/techdemos/musicTracker.svelte';

	export let data;

	$: projectName = data.projectName;
</script>

<NavTechDemo {projectName} />
{#if projectName === 'aiMaps'}
	<AIMaps />
{:else if projectName === 'salesPrototype'}
	<SalesPrototype />
{:else if projectName === 'worldpay'}
	<Worldpay />
{:else if projectName === 'musicTracker'}
	<MusicTracker />
{:else}
	<p>Page Not Found</p>
{/if}

<style>
</style>
