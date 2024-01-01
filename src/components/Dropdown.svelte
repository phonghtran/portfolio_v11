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
		}}
	>
		<span>{selectedName}</span>
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4"
			>
				<path
					fill-rule="evenodd"
					d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</button>
	{#if listIsActive === true}
		<ul class="dropdown-list">
			{#each options as option, index}
				<li>
					<a on:click={() => selectOption(option)} href={option.url}>{option.name}</a>
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
		align-content: space-between;
		align-items: center;
		background-color: orange;
		border: 0;
		cursor: pointer;
		display: flex;
		padding: 0.5rem 0.5rem;
		width: 12rem;
	}

	.dropdown-button svg {
		margin-left: 1rem;
		width: 1rem;
	}

	.dropdown-list {
		background-color: white;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		z-index: 1;
	}

	.dropdown-list li a {
		display: block;
		padding: 0.5rem 0.5rem;
		text-align: left;
	}
	.dropdown-list li a:hover {
		background-color: teal;
	}
</style>
