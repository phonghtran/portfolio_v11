<script>
	import { createEventDispatcher } from 'svelte';

	import { sliderValue, sliderMaxValue, sliderMapping } from '../stores.js';

	export let maxValue = 6;

	let value = $sliderValue;
	const dispatch = createEventDispatcher();

	function handleChange(event) {
		console.log(event);
		value = event.target.value;
		dispatch('changeSlider', value);
		// send up 0-4
	}
</script>

<div class="slider-container">
	<input type="range" min="0" max={sliderMaxValue} {value} on:input={handleChange} />
	<p>{sliderMapping[$sliderValue]}</p>
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
