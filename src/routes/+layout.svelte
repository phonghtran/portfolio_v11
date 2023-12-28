<script>
	import '../styles/reset.css';
	import '../styles/global.css';

	import { sliderValue } from '../stores.js';

	import Nav from '../components/Nav.svelte';

	let maxSliderValue = 3;

	function handleSliderChange(event) {
		console.log(event);
		$sliderValue = event.detail;
		// send up 0-4
	}
</script>

<Nav on:changeSlider={(e) => handleSliderChange(e)} />
<!-- slot start -->
<slot />
<!-- slot end -->
