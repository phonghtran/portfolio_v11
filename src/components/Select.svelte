<!-- Dropdown.svelte -->
<script>
	import { languageConfig } from '../stores.js';

	export let options = []; // Array of options for the dropdown
	let selectedOption = ''; // The currently selected option
	let dropdownActive = false;
	let value = $languageConfig[0]['value'];

	console.log(options);

	function selectOption(option) {
		selectedOption = option;
	}

	function handleChange(event) {
		console.log(event);
		value = parseInt(event.target.value);

		$languageConfig[0]['value'] = value;
	}
</script>

<div class="select">
	Audience: <select on:input={handleChange}>
		{#each $languageConfig[0]['labels'] as option, index}
			<option value={index}>{option}</option>
		{/each}
	</select>
</div>

<style>
</style>
