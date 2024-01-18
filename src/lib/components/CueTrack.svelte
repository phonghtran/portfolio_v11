<script>
	export let cueBank;
	export let index;

	let jumpTo;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function jumpToCue(event) {
		jumpTo = {
			index: index,
			startTime: event.srcElement.dataset.startTime
		};

		dispatch('jumpToCue', jumpTo); // emit remove event
	}
</script>

<div id="containerScript{index}" class="containerScript">
	{#if cueBank[index]}
		{#each cueBank[index] as cue}
			<button class="cueFragment" data-start-time={cue.startTime} on:click={jumpToCue}>
				{cue.text}
			</button>
		{/each}{/if}
</div>

<style>
	.cueFragment {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		font-size: 1rem;
		line-height: 1.325rem;
		margin: 0.125rem 0;
		padding: 0;
		text-align: left;
	}

	.cueFragment:hover {
		color: var(--accentColor);
	}
</style>
