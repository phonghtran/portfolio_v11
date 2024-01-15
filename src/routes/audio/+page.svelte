<script>
	import { languageConfig } from '../../stores.js';

	import { onMount } from 'svelte';
	let video;
	let metadataTrack;

	const audioFiles = [
		{
			id: 0,
			label: 'What is your work and leadership style?',
			ogg: '../audio/008_leadership-style.ogg',
			mp3: '../audio/008_leadership-style.mp3',
			subtitles: '../audio/008_leadership-style.vtt'
		}
	];

	function loadAudioFile(id) {
		const videoControls = document.getElementById('videoControls');

		const playpause = document.getElementById('playpause');
		const progress = document.getElementById('progress');
		const progressBar = document.getElementById('progress-bar');

		const containerScript = document.getElementById('containerScript');

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

		const t_captions = document.createElement('track');
		t_captions.kind = 'captions';
		t_captions.src = audioFiles[id]['subtitles'];

		if (video) {
			video.remove();
		}

		video = document.createElement('video');
		video.appendChild(s_ogg);
		video.appendChild(s_mp3);
		video.appendChild(t_vtt);
		video.appendChild(t_captions);

		video.controls = false;

		metadataTrack = video.textTracks[0];

		video.addEventListener('loadedmetadata', () => {
			progress.setAttribute('max', video.duration);
		});

		video.addEventListener('timeupdate', () => {
			if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
			progress.value = video.currentTime;
			progressBar.style.width = `${Math.floor((video.currentTime * 100) / video.duration)}%`;
		});

		metadataTrack.addEventListener('cuechange', (event) => {
			console.log(metadataTrack.activeCues);
			if (metadataTrack.activeCues.length > 0) {
				containerScript.innerHTML += metadataTrack.activeCues[0].text + ' ';
			}
		});

		containerScript.innerHTML = audioFiles[id]['label'];

		video.play();
	}

	onMount(() => {
		const supportsVideo = !!document.createElement('video').canPlayType;
		if (supportsVideo) {
			const playpause = document.getElementById('playpause');
			const progress = document.getElementById('progress');

			video = document.getElementById('video');

			console.log(video1.childNodes);

			playpause.addEventListener('click', (e) => {
				if (video.paused || video.ended) {
					video.play();
				} else {
					video.pause();
				}
			});

			progress.addEventListener('click', (e) => {
				const rect = progress.getBoundingClientRect();
				const pos = (e.pageX - rect.left) / progress.offsetWidth;
				video.currentTime = pos * video.duration;
			});
		} //supportsVideo
	}); // mount
</script>

<div class="container">
	<video id="video" controls preload="metadata">
		<source src="../audio/008_leadership-style.ogg" type="video/ogg" />
		<source src="../audio/008_leadership-style.mp3" type="video/mp3" />
		<track
			label="English"
			kind="subtitles"
			srclang="en"
			src="../audio/008_leadership-style.vtt"
			default
		/>
		<track kind="captions" src="../audio/008_leadership-style.vtt" />
		<!-- fallback for browsers that don't support video tag -->
		<a href="../audio/008_leadership-style.mp3">download video</a>
	</video>

	<button on:click={loadAudioFile(0)}>Load Track 8</button>
	<div id="videoControls" class="controls" data-state="hidden">
		<button id="playpause" type="button" data-state="play">Play/Pause</button>

		<div class="progress">
			<progress id="progress" value="0" min="0">
				<span id="progress-bar"></span>
			</progress>
		</div>
	</div>
	<!-- videoControls -->

	<div id="containerScript"></div>
	<!-- containerScript -->
</div>

<!-- container -->
<style>
</style>
