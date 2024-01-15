<script>
	import { languageConfig } from '../../stores.js';

	import { onMount } from 'svelte';

	let isPlaying = -1;

	let audioFiles = [
		{
			id: 0,
			label: 'History and background ',
			ogg: '../audio/001_background-history.ogg',
			mp3: '../audio/001_background-history.mp3',
			subtitles: '../audio/001_background-history.vtt'
		},
		{
			id: 1,
			label: 'What’s your design process? ',
			ogg: '../audio/002_design-process.ogg',
			mp3: '../audio/002_design-process.mp3',
			subtitles: '../audio/002_design-process.vtt'
		},
		{
			id: 2,
			label: 'What are your strengths? ',
			ogg: '../audio/003_strengths.ogg',
			mp3: '../audio/003_strengths.mp3',
			subtitles: '../audio/003_strengths.vtt'
		},
		{
			id: 3,
			label: 'What are your weaknesses? ',
			ogg: '../audio/004_weaknesses.ogg',
			mp3: '../audio/004_weaknesses.mp3',
			subtitles: '../audio/004_weaknesses.vtt'
		},
		{
			id: 4,
			label: 'Tell me about a recent project ',
			ogg: '../audio/005_recent-project-ai.ogg',
			mp3: '../audio/005_recent-project-ai.mp3',
			subtitles: '../audio/005_recent-project-ai.vtt'
		},
		{
			id: 5,
			label: 'Tell me about a recent hurdle',
			ogg: '../audio/006_hurdle-ai.ogg',
			mp3: '../audio/006_hurdle-ai.mp3',
			subtitles: '../audio/006_hurdle-ai.vtt'
		},
		{
			id: 6,
			label: 'How do you determine success? ',
			ogg: '../audio/007_success.ogg',
			mp3: '../audio/007_success.mp3',
			subtitles: '../audio/007_success.vtt'
		},
		{
			id: 7,
			label: 'What is your work and leadership style?',
			ogg: '../audio/008_leadership-style.ogg',
			mp3: '../audio/008_leadership-style.mp3',
			subtitles: '../audio/008_leadership-style.vtt'
		}
	];

	/** @param {MouseEvent} event */
	function pauseAudio(index) {
		const video = document.getElementById('video' + index);

		console.log('clicked', index, isPlaying);

		if (isPlaying === index) {
			// is currently playing
			console.log('pausing the current track');

			video.pause();
			isPlaying = -1;
		} else if (isPlaying === -1) {
			// nothing is playing
			console.log('resuming current track');
			video.play();
			isPlaying = index;
		} else {
			// different track is playing
			console.log('pausing current track and starting new track');

			const currentVideo = document.getElementById('video' + isPlaying);

			currentVideo.pause();
			video.play();
			isPlaying = index;
		}

		console.log('wrapping', index, isPlaying);
	}

	function setProgressDuration(event, index, video) {
		const progress = document.getElementById('progress' + index);

		progress.setAttribute('max', video.duration);
	}

	function updateProgress(event, index, video) {
		const progress = document.getElementById('progress' + index);

		if (!progress.getAttribute('max')) {
			progress.setAttribute('max', video.duration);
			progress.value = video.currentTime;
		}
		progress.value = video.currentTime;
	}

	function jumpToCue(event, index) {
		const startTime = event.srcElement.dataset.startTime;
		const progress = document.getElementById('progress' + index);

		const videoElements = document.getElementsByTagName('video');

		for (let i = 0; i < videoElements.length; i++) {
			videoElements[i].pause();
		}

		const video = document.getElementById('video' + index);
		isPlaying = index;
		video.currentTime = startTime;
		progress.value = startTime;
		video.play();
	}

	function addTextToScript(event, index, metadataTrack) {
		if (metadataTrack.activeCues.length > 0) {
			const containerScript = document.getElementById('containerScript' + index);

			console.log(metadataTrack.activeCues[0]);

			let fragment = document.createElement('div');

			fragment.classList.add('cueFragment');
			fragment.dataset.startTime = metadataTrack.activeCues[0].startTime;
			fragment.innerHTML = metadataTrack.activeCues[0].text;
			fragment.addEventListener('click', (event) => jumpToCue(event, index));

			containerScript.append(fragment);
		}
	}

	onMount(() => {
		const videoElements = document.getElementsByTagName('video');

		for (let i = 0; i < videoElements.length; i++) {
			const video = videoElements[i];

			let metadataTrack = video.textTracks[0];

			console.log(metadataTrack);

			video.loop = false;
			video.controls = false;

			video.addEventListener('loadedmetadata', (event) => setProgressDuration(event, i, video));

			video.addEventListener('timeupdate', (event) => updateProgress(event, i, video));

			// metadataTrack.addEventListener('cuechange', (event) =>
			// 	addTextToScript(event, i, metadataTrack)
			// );
			const containerScript = document.getElementById('containerScript' + i);

			for (let j = 0; j < metadataTrack.cues.length; j++) {
				let fragment = document.createElement('div');
				let cue = metadataTrack.cues[j];

				fragment.classList.add('cueFragment');
				fragment.dataset.startTime = cue.startTime;
				fragment.dataset.endTime = cue.endTime;
				fragment.innerHTML = cue.text;
				fragment.addEventListener('click', (event) => jumpToCue(event, i));

				containerScript.append(fragment);
			}
		}
		// for
	});
</script>

<div class="containerControls" id="containerControls">
	{#each audioFiles as track, index}
		<div id="containerAudio{index}" class="containerAudio">
			<h6>{track.label}</h6>

			<button
				class="play"
				id="buttonLoadAudio{index}"
				on:click={() => {
					pauseAudio(index);
				}}
			>
				{#if isPlaying === index}
					<i class="fa-solid fa-pause"></i>
				{:else}
					<i class="fa-solid fa-play"></i>
				{/if}
			</button>

			<progress id="progress{index}" value="0" min="0"> </progress>

			<div id="containerScript{index}"></div>
			<!-- containerScript -->

			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				id="video{index}"
				data-index={index}
				controls="false"
				preload="metadata"
				style="display:none"
			>
				<source src={track.ogg} type="video/ogg" />
				<source src={track.mp3} type="video/mp3" />
				<track label="English" kind="subtitles" srclang="en" src={track.subtitles} default />
			</video>
		</div>
		<!-- containerAudio -->
	{/each}
</div>

<!-- container -->
<style>
	#containerControls {
		height: 90vh;
		left: 5vh;
		overflow: auto;
		position: absolute;
		top: 5vw;
		width: 24rem;
	}

	h6 {
		margin: 0;
	}
	#video {
		display: none;
	}

	.containerAudio {
		border: 1px solid black;

		padding: 1rem;
	}

	button.play {
		border: 0;
		background-color: var(--accentColor);
		border-radius: var(--toggleBorderRadius);
		height: 2rem;
		text-align: center;
		width: 2rem;
	}

	button.play i {
		padding: 0.325rem 0 0 0.025rem;
	}
</style>
