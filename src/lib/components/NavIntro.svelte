<script>
	export let modes;
	export let mode;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function switchSections(id) {
		mode = id;

		dispatch('update', id);
	}
</script>

<div id="wrapperNavIntro">
	<div id="center">
		<ul>
			{#each modes as modeItem}
				<li class="navItem">
					<button
						class:active={mode === modeItem.id}
						on:click|preventDefault={() => {
							switchSections(modeItem.id);
						}}>{modeItem.label}</button
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<!-- wrapperNavIntro -->

<style>
	#wrapperNavIntro {
		border-bottom: 1px solid var(--gray0);
		padding: 0.5rem 0 0;
		margin-bottom: 2rem;
		text-align: center;
	}

	#center {
		margin: 0 auto;
	}

	ul {
		display: inline;
		list-style: none;
		margin: 0;
	}

	ul li {
		display: inline;
	}

	ul li button {
		background-color: transparent;
		border: 0;
		border-radius: var(--borderRadius) var(--borderRadius) 0 0;
		color: var(--accentColor);
		cursor: pointer;
		font-size: 1rem;
		padding: 0.5rem 1rem;
	}

	ul li button:hover {
		background-color: var(--gray0);
	}

	ul li button.active {
		background-color: var(--accentColor3);
		color: black;
	}
</style>
