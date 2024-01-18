<script>
	import { audioFiles } from '../../stores.js';
	import { onMount } from 'svelte';

	function makeURL(object) {
		return window.URL
			? window.URL.createObjectURL(object)
			: window.webkitURL.createObjectURL(object);
	}

	async function fetchURL(index, type, url) {
		console.log('async fetching');
		let blob = await fetch(url).then((r) => r.blob());
		var newURL = makeURL(blob);
		console.log(newURL);
		audioFiles[index][type] = newURL;
	}

	//   display('url path to your video file');

	onMount(() => {
		for (var i = 0; i < audioFiles.length; i++) {
			console.log(audioFiles[i]['mp3']);

			fetchURL(i, 'mp3', audioFiles[i]['mp3']);
			fetchURL(i, 'ogg', audioFiles[i]['ogg']);
		}
	});
</script>

<div class="introAudio">
	{#each audioFiles as track, index}
		<figure>
			<figcaption>Listen to the T-Rex:</figcaption>
			<!-- svelte-ignore a11y-media-has-caption -->
			<audio controls>
				<source src={track.ogg} type="video/ogg" />
				<source src={track.mp3} type="video/mp3" />
			</audio>
			<a href={track.mp3}> Download audio </a>
		</figure>
	{/each}
</div>

<!-- introLogos -->

<style>
</style>
