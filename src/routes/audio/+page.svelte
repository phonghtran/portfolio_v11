<script>
	import { languageConfig } from '../../stores.js';

	import { onMount } from 'svelte';

	let isPlaying = false;

	let audioFiles = [
		{
			id: 0,
			label: 'History and background ',
			ogg: '../audio/001_background-history.ogg',
			mp3: '../audio/001_background-history.mp3',
			subtitles: '../audio/001_background-history.vtt',
			isActive: false
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
			label: 'Tell me about a recent project you’re proud of? ',
			ogg: '../audio/005_recent-project-ai.ogg',
			mp3: '../audio/005_recent-project-ai.mp3',
			subtitles: '../audio/005_recent-project-ai.vtt'
		},
		{
			id: 5,
			label: 'Tell me about a time where you had a hurdle',
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
	function pauseAudio(event) {
		console.log('i see');
		const video = document.getElementById('video');
		if (video.paused || video.ended) {
			video.play();
			isPlaying = true;
		} else {
			video.pause();
			isPlaying = false;
		}
	}
	function resetVideo() {
		let video;
		let metadataTrack;

		var elems = document.getElementsByTagName('video');
		for (let i = 0; i < elems.length; i++) {
			const thisVideo = elems[i];
			thisVideo.pause();
			thisVideo.currentTime = 0;

			if (thisVideo.hasChildNodes()) {
				while (thisVideo.firstChild) {
					thisVideo.removeChild(thisVideo.firstChild);
				}
			}

			thisVideo.remove();
		}

		for (let i = 0; i < audioFiles.length; i++) {
			audioFiles[i]['isActive'] = false;
		}

		const progress = document.getElementById('progress');
		progress.value = 0;
	}

	function loadAudioFile(id) {
		console.log(id);
		resetVideo();

		const containerScript = document.getElementById('containerScript' + id);
		const progress = document.getElementById('progress');
		const progressBar = document.getElementById('progress-bar');

		const s_ogg = document.createElement('source');
		s_ogg.src = audioFiles[id]['ogg'];
		s_ogg.type = 'video/ogg';

		const s_mp3 = document.createElement('source');
		s_mp3.src = audioFiles[id]['mp3'];
		s_mp3.type = 'video/mp3';

		const t_vtt = document.createElement('track');
		t_vtt.label = 'English';
		t_vtt.kind = 'subtitles';
		t_vtt.scrlang = 'en';
		t_vtt.src = audioFiles[id]['subtitles'];
		t_vtt.default = 'default';

		let video = document.createElement('video');
		video.appendChild(s_ogg);
		video.appendChild(s_mp3);
		video.appendChild(t_vtt);

		video.id = 'video';

		video.controls = false;
		video.loop = false;

		video.style.display = 'none';

		let metadataTrack = video.textTracks[0];

		video.addEventListener('loadedmetadata', () => {
			progress.setAttribute('max', video.duration);
		});

		video.addEventListener('timeupdate', () => {
			if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
			progress.value = video.currentTime;
			progressBar.style.width = `${Math.floor((video.currentTime * 100) / video.duration)}%`;
		});

		metadataTrack.addEventListener('cuechange', (event) => {
			// console.log(metadataTrack.activeCues);
			if (metadataTrack.activeCues.length > 0) {
				console.log(metadataTrack.activeCues[0]);
				containerScript.innerHTML += metadataTrack.activeCues[0].text + ' ';
			}
		});
		6;

		const container = document.getElementById('containerControls');

		container.append(video);
		containerScript.innerHTML = '';

		const newVideoObj = document.getElementById('video');
		newVideoObj.load();
		newVideoObj.play();
		isPlaying = true;

		audioFiles[id]['isActive'] = true;
	}

	function loadAudio(id) {
		const video = document.getElementById('video');
		video.load();
	}
</script>

<div class="containerControls" id="containerControls">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video id="video" controls preload="metadata">
		<source src="../audio/001_background-history.ogg" type="video/ogg" />
		<source src="../audio/001_background-history.mp3" type="video/mp3" />
		<track
			label="English"
			kind="subtitles"
			srclang="en"
			src="../audio/001_background-history.vtt"
			default
		/>
	</video>

	<div id="videoControls" class="controls" data-state="hidden">
		<div class="progress">
			<progress id="progress" value="0" min="0">
				<span id="progress-bar"></span>
			</progress>
		</div>
	</div>
	<!-- videoControls -->

	{#each audioFiles as track, index}
		<div id="containerAudio{index}" class="containerAudio">
			<h6>{track.label}</h6>

			{#if audioFiles[index]['isActive'] === true}
				<button
					id="buttonLoadAudio{index}"
					on:click={() => {
						pauseAudio();
					}}
				>
					{#if isPlaying === true}
						Pause
					{:else}
						Play
					{/if}
				</button>
			{:else}
				<button
					id="buttonLoadAudio{index}"
					on:click={() => {
						loadAudioFile(index);
					}}>Load Track {index}</button
				>
			{/if}

			<div id="containerScript{index}"></div>
			<!-- containerScript -->
		</div>
		<!-- containerAudio -->
	{/each}
</div>

<!-- container -->
<style>
	#containerControls {
		height: 90vh;
		left: 5vh;
		overflow: scroll;
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
</style>
