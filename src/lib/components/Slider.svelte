<script>
	import { languageConfig } from '../../stores.js';

	export let targetSetting = '';
	let settings = [];

	let labels = $languageConfig[targetSetting]['labels'];
	let value = $languageConfig[targetSetting]['value'];

	function handleChange(event) {
		value = parseInt(event.target.value);

		$languageConfig[targetSetting]['value'] = value;
	}
</script>

<div class="slider-container">
	{value}
	<input type="range" min="0" max={labels.length - 1} {value} on:input={handleChange} />
	<p>{$languageConfig[targetSetting]['labels'][value]}</p>
</div>

<style>
	.slider-container {
		text-align: center;
		margin: 0 20px;
	}

	input[type='range'] {
		width: 300px;
		margin: 10px 0;
	}
</style>
