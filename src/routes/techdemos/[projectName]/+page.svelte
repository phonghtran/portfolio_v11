<script>
	import NavTechDemo from '$lib/components/NavTechDemo.svelte';

	import { techDemos } from '../../../stores.js';

	import Portfolio from '$lib/techDemos/portfolio.svelte';
	import AIMaps from '$lib/techDemos/aiMaps.svelte';
	import SalesPrototype from '$lib/techDemos/salesPrototype.svelte';
	import Worldpay from '$lib/techDemos/worldpay.svelte';
	import MusicTracker from '$lib/techDemos/musicTracker.svelte';

	export let data;

	$: projectName = data.projectName;
</script>

<NavTechDemo {projectName} />
{#if projectName === 'portfolio'}
	<Portfolio />
{:else if projectName === 'aiMaps'}
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
