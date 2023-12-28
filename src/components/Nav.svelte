<script>
	import Slider from '../components/Slider.svelte';

	import { createEventDispatcher } from 'svelte';

	let value;
	const dispatch = createEventDispatcher();

	function changeSlider(event) {
		console.log(event);
		value = event.detail;
		dispatch('changeSlider', event);
		// send up 0-4
	}
</script>

<div class="nav">
	<Slider on:changeSlider={(e) => changeSlider(e.detail)} />
</div>

<!-- nav -->

<style>
	.nav {
		background-color: lightgrey;
	}
</style>
