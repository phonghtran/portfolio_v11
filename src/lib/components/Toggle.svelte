<!-- Toggle.svelte -->
<script>
	import { languageConfig } from '../../stores.js';

	let options = []; // Array of options for the dropdown
	let selectedOption = ''; // The currently selected option
	let dropdownActive = false;
	let value = $languageConfig[1]['value'];

	let backgroundOffset = value * 33.333 + '%';
	let backgroundOffsetHover = '0%';
	let backgroundHoverOpacity = '0%';

	function handleChange(index) {
		value = parseInt(index);
		backgroundOffset = index * 33.333 + '%';

		$languageConfig[1]['value'] = value;
	}

	function moveBackground(index) {
		if (index != value) {
			const rect = event.target.getBoundingClientRect();
			let leftPosition = rect.left;

			backgroundOffsetHover = backgroundOffset;
			backgroundHoverOpacity = '100%';

			backgroundOffset = index * 33.333 + '%';
		}
	}

	function resetBackground() {
		backgroundHoverOpacity = '0%';
		backgroundOffset = value * 33.333 + '%';
	}
</script>

<div class="wrapper">
	<div class="segmentedButtons">
		{#each $languageConfig[1]['labels'] as option, index}
			<button
				class:selected={index === value}
				on:click={() => handleChange(index)}
				on:mouseenter={() => moveBackground(index)}
				on:mouseleave={() => resetBackground(index)}
			>
				<i class="fa-solid {$languageConfig[1]['icons'][index]}"></i>
				{option}
			</button>
		{/each}
		<div
			class="selectedBackground"
			style="left: {backgroundOffset}; opacity: {backgroundHoverOpacity}"
		></div>
	</div>
</div>

<style>
	:root {
		--toggleBorderRadius: 2rem;
		--transitionTiming: 500ms;
	}

	i {
		display: none;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		margin: 2rem 0;
		position: relative;
		width: 100%;
	}
	.segmentedButtons {
		background-color: #eb001842;
		border-radius: var(--toggleBorderRadius);
		display: flex;
		position: relative;
		width: 100%;
		z-index: 1;
	}
	.selectedBackground {
		background-color: #eb001865;
		border-radius: var(--toggleBorderRadius);
		height: 100%;
		position: absolute;
		top: 0;
		transition:
			left var(--transitionTiming),
			opacity var(--transitionTiming) var(--transitionTiming);

		width: 33.333%;
		z-index: -1;
	}

	.segmentedButtons button {
		background-color: transparent;
		border: 0;
		border-radius: var(--toggleBorderRadius);
		color: black;

		font-size: 1rem;
		padding: 1rem 1rem;
		transition:
			background-color var(--transitionTiming) ease-out,
			opacity var(--transitionTiming) var(--transitionTiming) ease-out;

		width: 33.333%;
	}

	.segmentedButtons button:hover {
		cursor: pointer;
	}
	.segmentedButtons button.selected {
		background-color: var(--accentColor);

		color: white;
		transition: background-color var(--transitionTiming) var(--transitionTiming) ease-out;
	}

	@media (min-width: 600px) {
		.segmentedButtons {
			width: 32rem;
		}
		.segmentedButtons button {
			padding: 1rem 2rem;
		}

		i {
			display: inline-block;
		}
	}
</style>
