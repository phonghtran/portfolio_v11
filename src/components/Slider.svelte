<script>
	import { createEventDispatcher } from 'svelte';

	export let initialValue = 0;
	let value = initialValue;
	const dispatch = createEventDispatcher();

	function handleChange(event) {
		value = event.target.value;
		dispatch('change', value);
	}
</script>

<div class="slider-container">
	<input type="range" min="0" max="4" {value} on:input={handleChange} />
	<p>Value: {value}</p>
</div>

<style>
	.slider-container {
		text-align: center;
		margin: 20px;
	}

	input[type='range'] {
		width: 300px;
		margin: 10px 0;
	}
</style>
