<script>
	import Todos from '../tutorial/Todos.svelte';
	import Alert from '../tutorial/Alert.svelte';
	import Slider from '../components/Slider.svelte';

	import { todos } from '../stores.js';

	import '../styles/global.css';

	let sliderValue = 0;

	function handleSliderChange(event) {
		sliderValue = event.detail;
	}
</script>

<Slider initialValue={sliderValue} on:change={handleSliderChange} />
<p>Selected Value: {sliderValue}</p>

testing for vercel

<h2>test</h2>

<div class="videoContainer">
	<div style="padding:177.78% 0 0 0;position:relative;">
		<iframe
			src="https://player.vimeo.com/video/898366636?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
			frameborder="0"
			allow="autoplay; fullscreen; picture-in-picture"
			style="position:absolute;top:0;left:0;width:100%;height:100%;"
			title="IMG_0919"
		></iframe>
	</div>
	<script src="https://player.vimeo.com/api/player.js"></script>
</div>

https://drive.google.com/file/d/1_6T4_bIRXkEsXealpfodUpi5G6Z5Tjfv/view?usp=sharing
https://dai.ly/k5DH2QhVwhfR8yzNFkn

<style>
	.videoContainer {
		width: 200px;
	}
</style>
