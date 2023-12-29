<!-- Dropdown.svelte -->
<script>
	import { navItems } from '../stores.js';

	export let options = navItems; // Array of options for the dropdown
	console.log(navItems);
	let selectedName = 'Summary'; // The currently selected option
	let selectedUrl = '';
	let listIsActive = false;

	function selectOption(option) {
		selectedName = option.name;
		selectedUrl = option.url;
		listIsActive = false;
	}
</script>

<div class="dropdown">
	<button
		class="dropdown-button"
		on:click={() => {
			listIsActive = !listIsActive;
		}}>{selectedName}</button
	>
	{#if listIsActive === true}
		<ul class="dropdown-list">
			{#each options as option, index}
				<li on:click={() => selectOption(option)}>
					<a href={option.url}>{option.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	/* Add your CSS styles for the dropdown here */
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-button {
		cursor: pointer;
	}

	.dropdown-list {
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 1;
	}

	.dropdown-list.active {
		display: block;
	}
</style>
