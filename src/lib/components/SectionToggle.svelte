<script>
	export let toggleSections;

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let showMenu = true;

	function toggleSectionDispatch(event, toggleSection) {
		const checked = event.srcElement.checked;

		toggleSection.isVisible = checked;

		dispatch('update', toggleSection);
	}
</script>

<div id="componentSectionToggle" class:showMenu>
	{#if showMenu}
		<div id="menu" transition:slide={{ delay: 0, duration: 500, easing: quintOut, axis: 'x' }}>
			<div id="content">
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
			<!-- content -->
		</div>
		<!-- menu -->
	{/if}

	<button
		id="toggleMenu"
		on:click={() => {
			showMenu = !showMenu;
		}}
	>
		<i class="fa-solid" class:fa-gear={!showMenu} class:fa-circle-xmark={showMenu}></i>
	</button>
</div>

<!-- componentSectionToggle -->

<style>
	#toggleMenu {
		display: none;
	}

	#menu {
		background-color: var(--gray0);
		border-radius: var(--borderRadius);
		margin: 6rem 1rem 0;
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
			left: 0;
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
			border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
			box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.25);
			cursor: pointer;
			display: block;
			margin: 1rem 0 0 0;
			z-index: 1;
		}

		#componentSectionToggle.showMenu #toggleMenu {
			animation: none;
			background-color: var(--gray1);
			box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
		}

		#toggleMenu i {
			animation: 5s ease-in-out infinite alternate-reverse rotateObject;
			display: block;
			font-size: 1.25rem;
			padding: 0.75rem 0.5rem 0.75rem 0.325rem;
			width: 1.25rem;
		}

		#componentSectionToggle.showMenu #toggleMenu i {
			animation: none;
		}

		#menu {
			border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
			box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.25);
			margin: 0;
			padding: 1rem;
			transition: max-width 1s;
			z-index: 2;
		}

		#menu #content {
			min-width: max-content;
		}

		p {
			font-size: 0.875rem;
			margin: 0 0 0.5rem;
		}
	}
</style>
