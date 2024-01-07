<!-- Dropdown.svelte -->
<script>
	import { languageConfig } from '../../stores.js';

	let options = []; // Array of options for the dropdown
	let selectedOption = ''; // The currently selected option
	let dropdownActive = false;
	let value = $languageConfig[0]['value'];

	function selectOption(option) {
		selectedOption = option;
	}

	function handleChange(event) {
		value = parseInt(event.target.value);

		$languageConfig[0]['value'] = value;
	}
</script>

<div class="select">
	<label for="form-select">Hello</label>

	<select on:input={handleChange} id="form-select">
		{#each $languageConfig[0]['labels'] as option, index}
			{#if index === value}
				<option value={index} class="" selected>{option}</option>
			{:else}
				<option value={index} class="">{option}</option>
			{/if}
		{/each}
	</select>
	<span>:</span>
</div>

<style>
	label,
	select,
	span {
		font-size: 2rem;
		font-weight: 700;
		line-height: 2.25rem;
	}

	select {
		background-color: var(--gray0);
		border-radius: var(--borderRadius);
		margin-left: 0.25rem;
		padding: 0.25rem 0.5rem;
	}

	option {
		font-size: 1rem;
	}
</style>
