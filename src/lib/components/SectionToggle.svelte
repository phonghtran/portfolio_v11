<script>
	export let toggleSections;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let showMenu = false;

	function toggleSectionDispatch(event, toggleSection) {
		const checked = event.srcElement.checked;

		toggleSection.isVisible = checked;

		dispatch('update', toggleSection);
	}
</script>

<div id="componentSectionToggle" class:showMenu>
	<button
		id="toggleMenu"
		on:click={() => {
			showMenu = !showMenu;
		}}
	>
		<i class="fa-solid" class:fa-gear={!showMenu} class:fa-circle-xmark={showMenu}></i>
	</button>

	<div id="menu">
		<h6>Content Configuation</h6>
		{#each toggleSections as toggleSection, index}
			{#if toggleSection.id !== 0 && toggleSection.id !== 2}
				<p>
					<input
						type="checkbox"
						id="checkbox{index}"
						checked={toggleSection.isVisible}
						on:click={(e) => {
							toggleSectionDispatch(e, toggleSection);
						}}
					/>
					<label for="checkbox{index}">{toggleSection.label}</label>
				</p>
			{/if}
		{/each}
	</div>
</div>

<!-- componentSectionToggle -->

<style>
	#toggleMenu {
		display: none;
	}

	#menu {
		background-color: var(--gray0);
		border-radius: var(--borderRadius);
		margin: 1rem;
		padding: 1rem 2rem;
	}

	input,
	label {
		cursor: pointer;
	}

	label {
		border-bottom: 1px solid var(--accentColor);
		color: var(--accentColor);
	}

	label:hover {
		border-bottom: 1px solid black;
		color: black;
	}

	h6 {
		margin: 1rem 0;
	}

	@media (min-width: 600px) {
		#componentSectionToggle {
			align-items: flex-start;
			display: flex;
			position: fixed;
			margin: 0;
			right: 0;
			top: 2rem;
		}

		@keyframes morph {
			0% {
				background-color: var(--accentColor3);
			}
			50% {
				background-color: var(--accentColor);
			}
			100% {
				background-color: var(--accentColor5);
			}
		}

		#toggleMenu {
			animation: morph 10s linear infinite alternate-reverse;
			background-color: var(--gray0);
			border: 0;
			border-radius: var(--borderRadius) 0 0 var(--borderRadius);
			box-shadow: -1px 0 4px 0 rgba(0, 0, 0, 0.25);
			cursor: pointer;
			display: block;
			margin-top: 1rem;
			padding: 0.5rem 0.5rem 0.325rem;
			width: 2rem;
			z-index: 2;
		}

		#componentSectionToggle.showMenu #toggleMenu {
			animation: none;
		}

		#toggleMenu i {
			font-size: 1rem;
		}

		#menu {
			border-radius: var(--borderRadius) 0 0 var(--borderRadius);
			box-shadow: -1px 0 8px 0 rgba(0, 0, 0, 0.25);
			display: none;
			margin: 0;
			z-index: 1;
		}

		#componentSectionToggle.showMenu #menu {
			display: block;
		}

		p {
			font-size: 0.75rem;
			margin: 0 0 0.5rem;
		}
	}
</style>
