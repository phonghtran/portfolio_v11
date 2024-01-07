<!-- Toggle.svelte -->
<script>
	import { languageConfig } from '../../stores.js';

	let options = []; // Array of options for the dropdown
	let selectedOption = ''; // The currently selected option
	let dropdownActive = false;
	let value = $languageConfig[1]['value'];

	function handleChange(index) {
		value = parseInt(index);

		$languageConfig[1]['value'] = value;
	}
</script>

<div class="wrapper">
	<div class="segmentedButtons">
		{#each $languageConfig[1]['labels'] as option, index}
			<button class:selected={index === value} on:click={() => handleChange(index)}>
				{option}
			</button>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		margin: 2rem 0;

		width: 100%;
	}
	.segmentedButtons {
		display: flex;
	}

	.segmentedButtons button {
		background-color: var(--gray0);
		border: 1px solid #888;
		border-radius: 0;
		color: black;
		flex: 1;
		font-size: 1rem;
		padding: 0.325rem 1rem;
	}

	.segmentedButtons button:hover {
		background-color: #ccc;
		color: black;
		cursor: pointer;
	}
	.segmentedButtons button.selected {
		background-color: #ccc;
		box-shadow:
			inset -4px -4px 8px rgb(255, 255, 255, 0.95),
			inset 4px 4px 8px rgba(33, 33, 33, 0.25);
		color: black;
	}

	.segmentedButtons button:first-child {
		border-radius: 0.25rem 0 0 0.25rem;
		border-right: 0;
	}

	.segmentedButtons button:last-child {
		border-radius: 0 0.25rem 0.25rem 0;
		border-left: 0;
	}
</style>
