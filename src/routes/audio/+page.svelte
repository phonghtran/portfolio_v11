<script>
	import { languageConfig } from '../../stores.js';

	import { onMount } from 'svelte';

	const audioFiles = [
		{
			id: 0,
			label: 'How do you determine success? ',
			ogg: '../audio/007_success.ogg',
			mp3: '../audio/007_success.mp3',
			subtitles: '../audio/007_success.vtt'
		},
		{
			id: 1,
			label: 'What is your work and leadership style?',
			ogg: '../audio/008_leadership-style.ogg',
			mp3: '../audio/008_leadership-style.mp3',
			subtitles: '../audio/008_leadership-style.vtt'
		}
	];

	function resetVideo() {
		let video;
		let metadataTrack;
		console.log('reset');

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

		const progress = document.getElementById('progress');

		progress.value = 0;
	}

	function loadAudioFile(id) {
		resetVideo();

		const containerScript = document.getElementById('containerScript');
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

		const t_captions = document.createElement('track');
		t_captions.kind = 'captions';
		t_captions.src = audioFiles[id]['subtitles'];

		let video = document.createElement('video');
		video.appendChild(s_ogg);
		video.appendChild(s_mp3);
		video.appendChild(t_vtt);
		video.appendChild(t_captions);
		video.id = 'video';

		console.log('new children', video);

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
				containerScript.innerHTML += metadataTrack.activeCues[0].text + ' ';
			}
		});

		const container = document.getElementById('container');

		container.append(video);
		containerScript.innerHTML = audioFiles[id]['label'];

		const newVideoObj = document.getElementById('video');
		newVideoObj.load();
		newVideoObj.play();

		console.log('finishing');
	}

	function loadAudio(id) {
		const video = document.getElementById('video');
		video.load();
	}

	onMount(() => {
		const supportsVideo = !!document.createElement('video').canPlayType;
		if (supportsVideo) {
			const playpause = document.getElementById('playpause');
			const progress = document.getElementById('progress');

			playpause.addEventListener('click', (e) => {
				const video = document.getElementById('video');
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

<div class="container" id="container">
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

	audioFiles

	<button
		on:click={() => {
			loadAudioFile(0);
		}}>Load Track 7</button
	>
	<button
		on:click={() => {
			loadAudioFile(1);
		}}>Load Track 8</button
	>
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
	#video {
		display: none;
	}
</style>
