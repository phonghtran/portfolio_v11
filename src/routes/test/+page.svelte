<script>
	import { audioFiles } from '../../stores.js';
	import { onMount } from 'svelte';

	let audioFile;
	let realtimeAudioObj = [];
	// Controls
	let isPlaying = false;
	$: console.log(`isPlaying = ${isPlaying}`);

	function playPauseAudio(index) {
		const file = realtimeAudioObj[index]['audio'];
		if (file.paused) {
			file.play();
			isPlaying = true;
		} else {
			file.pause();
			isPlaying = false;
		}
	}

	onMount(() => {
		// const str = '../audio/001_background-history.mp3';
		// audioFile = new Audio(str);

		for (var i = 0; i < audioFiles.length; i++) {
			console.log(audioFiles[i]['mp3']);
			var audioObj = new Audio(audioFiles[i]['mp3']);
			console.log(audioObj);
			realtimeAudioObj[i] = {
				id: i,
				audio: audioObj
			};
		}

		console.log(realtimeAudioObj);
	});
</script>

<div class="wrapper">
	<!-- <button on:click={playPauseAudio}>play</button> -->

	{#each audioFiles as track, index}
		<p><button on:click={() => playPauseAudio(index)}>play {index}</button></p>
	{/each}
</div>

<style>
	.wrapper {
		margin: 3rem;
	}
</style>
