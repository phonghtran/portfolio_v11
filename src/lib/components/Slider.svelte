<script>
	import { languageConfig } from '../../stores.js';

	let labels = $languageConfig[1]['labels'];
	let value = $languageConfig[1]['value'];

	function handleChange(event) {
		value = parseInt(event.target.value);

		$languageConfig[1]['value'] = value;
	}
</script>

<div class="slider-container">
	<input type="range" min="0" max={labels.length - 1} {value} on:input={handleChange} />
	<span class="sliderLabel">{$languageConfig[1]['labels'][value]}</span>
</div>

<style>
	.slider-container {
		text-align: center;
		margin: 0 20px;
	}

	span.sliderLabel {
		background-color: white;
		border-radius: 0.25rem;
	}

	input[type='range'] {
		-webkit-appearance: none; /* Hides the slider so that custom slider can be made */
		width: 100%; /* Specific width is required for Firefox. */
		background: transparent; /* Otherwise white in Chrome */
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
	}

	input[type='range']:focus {
		outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
	}

	input[type='range']::-ms-track {
		width: 100%;
		cursor: pointer;

		/* Hides the slider so custom styles can be added */
		background: transparent;
		border-color: transparent;
		color: transparent;
	}

	input[type='range'] {
		margin: 10px 0;
		width: 300px;
	}

	/* Change the color of the track */
	input[type='range'] {
		background-color: blue;
		height: 10px;
		border-radius: 5px;
	}

	/* Change the color and size of the handle */
	input[type='range']::-webkit-slider-thumb {
		background-color: red;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
</style>
