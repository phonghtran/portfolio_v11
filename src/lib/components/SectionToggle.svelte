<script>
	export let toggleSections;

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let showMenu = false;

	function toggleSectionDispatch(event, toggleSection) {
		// const checked = event.srcElement.checked;

		toggleSection.isVisible = !toggleSection.isVisible;

		dispatch('update', toggleSection);
	}

	function updateShowMenu() {
		showMenu = !showMenu;
		dispatch('updateShowMenu', showMenu);
	}
</script>

<div id="componentSectionToggle" class:showMenu>
	{#if showMenu}
		<div id="menu" transition:slide={{ delay: 0, duration: 500, easing: quintOut, axis: 'x' }}>
			<div id="content">
				<h6>Content Configuation</h6>
				{#each toggleSections as toggleSection, index}
					{#if toggleSection.id !== 2}
						<p>
							<input
								type="checkbox"
								id="checkbox{index}"
								checked={toggleSection.isVisible}
								on:click={(e) => {
									toggleSectionDispatch(e, toggleSection);
								}}
							/>

							<button
								class="toggleSetting"
								class:isVisible={toggleSections[index].isVisible}
								on:click={(e) => {
									toggleSectionDispatch(e, toggleSection);
								}}
							>
								<i class="fa-solid"></i>
							</button>

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
			updateShowMenu();
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
		margin: 2rem 1rem 0;
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

	p {
		align-items: center;
		display: flex;
	}
	input {
		display: none;
	}

	.toggleSetting {
		background-color: var(--gray1);
		border: 0;
		border-radius: var(--toggleBorderRadius);
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.25) inset;
		cursor: pointer;
		height: 1.5rem;
		margin-right: 0.5rem;
		padding: 0.25rem;
		position: relative;
		transition: background-color 250ms ease-in-out;
		width: 2.5rem;
	}

	.toggleSetting.isVisible {
		background-color: var(--accentColor3);
	}

	.toggleSetting i {
		background-color: black;
		border-radius: var(--toggleBorderRadius);
		display: block;
		font-size: 0.75rem;
		height: 1.25rem;
		left: 0.25rem;
		position: absolute;
		top: 0.125rem;
		transition:
			background-color 250ms ease-in-out,
			left 250ms ease-in-out;
		width: 1rem;
	}

	.toggleSetting.isVisible i {
		background-color: var(--accentColor);
		left: 1rem;
	}

	@media (min-width: 600px) {
		#componentSectionToggle {
			align-items: flex-start;
			display: flex;
			position: fixed;
			margin: 0;
			left: 0;
			top: 4rem;
		}

		#toggleMenu {
			animation: bgMorph 10s linear infinite alternate-reverse;
			background-color: var(--gray0);
			border: 0;
			border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
			box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.25);
			cursor: pointer;
			display: block;
			margin: 1rem 0 0 0;
			transition: background-color 250ms ease-in-out;
			z-index: 1;
		}

		#componentSectionToggle.showMenu #toggleMenu {
			animation: none;
			background-color: var(--gray1);
			box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
		}

		#componentSectionToggle.showMenu #toggleMenu:hover {
			background-color: var(--accentColor3);
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
			padding: 1.5rem;
			transition: max-width 1s;
			z-index: 2;
		}

		#menu #content {
			min-width: max-content;
		}

		h6 {
			margin-top: 0;
		}
		p {
			font-size: 0.875rem;
			margin: 0 0 0.5rem;
		}
	}
</style>
