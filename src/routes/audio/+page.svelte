<script>
	import { audioFiles } from '../../stores.js';

	import { onMount } from 'svelte';

	import CueTrack from '$lib/components/CueTrack.svelte';
	import AudioBg from '$lib/components/AudioBg.svelte';

	let isPlaying = -1;

	let cueBank = {};

	/** @param {MouseEvent} event */
	function toggleAudio(index) {
		console.log('in toggleAudio');
		console.log('index btn:', index, 'isplaying:', isPlaying);

		if (isPlaying === index) {
			// is currently playing

			console.log('pausing');

			const video = realtimeContent[isPlaying]['video'];
			video.pause();
			isPlaying = -1;
		} else {
			if (isPlaying > -1) {
				const currentVideo = realtimeContent[isPlaying]['video'];

				currentVideo.pause();
			}

			playVideo(index);
		}
	}

	async function playVideo(index, startTime = 0) {
		console.log('in playVideo');
		const video = realtimeContent[index]['video'];

		isPlaying = index;

		video.currentTime = startTime;

		try {
			await video.play();
		} catch (error) {
			console.log(error);
			isPlaying = -1;
		} finally {
			const video = realtimeContent[index]['video'];

			video.muted = false;
			console.log('playing from promise 2');
		}
	}

	function formatDuration(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		const formattedMinutes = String(minutes).padStart(2, '0');
		const formattedSeconds = String(remainingSeconds).padStart(2, '0');
		return `${formattedMinutes}:${formattedSeconds}`;
	}

	function updateProgress(event) {
		if (isPlaying > -1) {
			const progressBarMarker = document.getElementById('progressBarMarker' + isPlaying);
			const containerScript = document.getElementById('containerScript' + isPlaying);
			const containerTime = document.getElementById('containerTime' + isPlaying);

			const video = realtimeContent[isPlaying]['video'];

			let value = Math.floor((video.currentTime * 100) / video.duration) + 6;
			value = value > 100 ? 100 : value;
			value = value < 0 ? 0 : value;
			const percentage = `${value}%`;

			progressBarMarker.style.height = percentage;

			containerTime.innerHTML = `${formatDuration(video.duration - video.currentTime)}`;
		}
	}

	function resetAllPlaying() {
		for (let i = 0; i < realtimeContent.length; i++) {
			realtimeContent[i]['video'].pause();
		}

		isPlaying = -1;
	}

	function jumpToCue(e) {
		const startTime = e.startTime;
		const index = e.index;
		resetAllPlaying();

		playVideo(index, startTime);
	}

	function addTextToScript(event) {
		if (isPlaying > -1) {
			const metadataTrack = realtimeContent[isPlaying]['video']['textTracks'][0];

			if (metadataTrack.activeCues.length > 0) {
				console.log(metadataTrack);

				const entry = {
					text: metadataTrack.activeCues[0].text,
					startTime: metadataTrack.activeCues[0].startTime,
					endTime: metadataTrack.activeCues[0].endTime
				};

				if (cueBank[isPlaying]) {
					let cue = cueBank[isPlaying];

					let isUnique = true;
					for (let i = 0; i < cue.length; i++) {
						// console.log('inside loop', cue[i]);
						if (cue[i]['startTime'] === entry.startTime && cue[i]['endTime'] === entry.endTime) {
							isUnique = false;
							break;
						}
					}

					if (isUnique === true) {
						cue.push(entry);
					}

					cueBank[isPlaying] = cue;
				} else {
					// empty json
					cueBank[isPlaying] = [entry];
				} // check for cuebank empty or not
			}
		}
	}

	function videoEnded(event) {
		console.log('finished playing');
		isPlaying = -1;
	}

	let realtimeContent = [];

	onMount(() => {
		for (var i = 0; i < audioFiles.length; i++) {
			var video = document.createElement('video');
			video.src = audioFiles[i]['mp3'];

			video.loop = false;
			video.controls = false;

			const track = document.createElement('track');
			track.kind = 'subtitles';
			track.src = audioFiles[i]['subtitles'];
			track.srclang = 'en';
			track.default = 'true';
			// // track.addEventListener('cuechange', (event) => addTextToScript(event));

			video.append(track);

			video.addEventListener('timeupdate', (event) => updateProgress(event));
			video.addEventListener('ended', (event) => videoEnded(event));

			const metadataTrack = video.textTracks[0];
			console.log(metadataTrack);
			metadataTrack.addEventListener('cuechange', (event) => addTextToScript(event));

			console.log(i, video);
			realtimeContent[i] = {
				id: i,
				video: video
			};
		}

		// for
	});
</script>

<AudioBg />

<div class="containerControls" id="containerControls">
	{#each audioFiles as track, index}
		<div id="containerAudio{index}" class="containerAudio">
			<div class="progressBar" id="progressBar{index}">
				<div class="progressBarMarker" id="progressBarMarker{index}"></div>
			</div>
			<div class="mainBody">
				<div class="header">
					<h6>{track.label}</h6>

					<div class="headerCTA">
						<div id="containerTime{index}" class="containerTime"></div>
						<!-- containerTime -->

						<button
							class="play"
							id="buttonLoadAudio{index}"
							on:click={() => {
								toggleAudio(index);
							}}
						>
							{#if isPlaying === index}
								<i class="fa-solid fa-pause"></i>
							{:else}
								<i class="fa-solid fa-play"></i>
							{/if}
						</button>
					</div>
					<!-- cta -->
				</div>

				<CueTrack {cueBank} {index} on:jumpToCue={(e) => jumpToCue(e.detail)} />
			</div>
			<!-- mainBody -->
		</div>
		<!-- containerAudio -->
	{/each}
</div>

<!-- container -->
<style>
	#containerControls {
		background-color: white;
		border-radius: var(--borderRadius);
		max-height: 80vh;
		left: 5vh;
		overflow: auto;
		position: absolute;
		top: 5vw;
		width: 24rem;
	}

	h6 {
		margin: 0;
	}

	.containerAudio {
		align-items: stretch;
		border-bottom: 1px solid black;
		display: flex;
		/* padding: 1rem; */
		position: relative;
	}

	.containerAudio:last-child {
		border: 0;
	}

	.progressBar {
		background-color: var(--accentColor3);
		position: relative;
		width: 1rem;
	}

	.progressBarMarker {
		background-color: var(--accentColor);
		height: 0%;
		width: 100%;
	}

	.mainBody {
		flex: 1;
		padding: 1rem;
	}

	.header {
		align-items: center;

		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.header h6 {
		flex: 1;
	}

	.headerCTA {
		align-items: center;
		display: flex;
	}

	button.play {
		border: 0;
		background-color: var(--accentColor);
		border-radius: var(--toggleBorderRadius);
		cursor: pointer;
		height: 2rem;
		margin-left: 0.5rem;
		text-align: center;
		width: 2rem;
	}

	button.play:hover {
		background-color: black;
	}
	button.play:hover i {
		color: white;
	}
	button.play i {
		padding: 0.325rem 0 0 0.025rem;
	}
</style>
