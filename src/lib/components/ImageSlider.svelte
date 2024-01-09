<script>
	let value = 50;

	function updateImageWidth(event) {
		value = parseInt(event.target.value);
	}
</script>

<div class="wrapperImageSlider">
	<div class="toolbar">
		<small>Before & After</small>
		<input type="range" min="0" max="100" {value} on:input={updateImageWidth} class="slider" />
	</div>

	<div class="image before" style="clip-path: polygon(0 0, {value}% 0, {value}% 100%, 0% 100%);">
		<img
			src="../caseStudies/obviously/beforepic_cropped.png"
			alt="sample page before the redesign"
		/>
	</div>
	<div class="image after">
		<img src="../caseStudies/obviously/after.png" alt="sample page after the redesign" />
	</div>

	<div class="line" style="left: {value}%"></div>
</div>

<style>
	.wrapperImageSlider {
		margin: 2rem 0 4rem;
		position: relative;
		width: 100%;
	}

	.image {
		top: 2rem;

		width: 100%;
	}
	.before {
		position: absolute;
		overflow: hidden;
		z-index: 2;
	}

	.after {
		position: relative;
		z-index: 1;
	}

	img {
		left: 0;

		width: 100%;
		top: 0;
		object-fit: contain;
	}

	.line {
		border-left: 1px solid var(--accentColor);
		height: 100%;
		left: 2rem;
		position: absolute;
		top: 2rem;
		z-index: 4;
	}
	.slider {
		z-index: 3;
		/* Set other styles as needed */
	}

	.toolbar {
		text-align: center;
	}

	small {
		display: inline;
	}

	.slider {
		-webkit-appearance: none;
		/* width: calc(100% - (73px)); */
		height: 10px;
		border-radius: 5px;
		background: var(--accentColor3);
		outline: none;
		padding: 0;
		margin: 0;
	}
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--accentColor);
		cursor: pointer;
		-webkit-transition: background 0.15s ease-in-out;
		transition: background 0.15s ease-in-out;
	}
	.slider::-webkit-slider-thumb:hover {
		background: var(--accentColor);
	}
	.slider:active::-webkit-slider-thumb {
		background: var(--accentColor);
	}
	.slider::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border: 0;
		border-radius: 50%;
		background: #2c3e50;
		cursor: pointer;
		-moz-transition: background 0.15s ease-in-out;
		transition: background 0.15s ease-in-out;
	}
	.slider::-moz-range-thumb:hover {
		background: var(--accentColor);
	}
	.slider:active::-moz-range-thumb {
		background: var(--accentColor);
	}
	.slider:focus::-webkit-slider-thumb {
		box-shadow:
			0 0 0 3px #fff,
			0 0 0 6px var(--accentColor);
	}
</style>
