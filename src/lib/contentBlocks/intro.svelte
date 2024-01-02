<script>
	import { languageConfig } from '../../stores.js';
</script>

<p>intro {$languageConfig[0]['value']}</p>

{#key $languageConfig[0]['value']}
	<p>{$languageConfig[0]['value']}</p>

	{#if $languageConfig[0]['value'] === 1}
		<p>in 1</p>
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
	{:else if $languageConfig[0]['value'] > 1}
		<p>bigger than 1</p>
	{:else}
		<p>else</p>
	{/if}
{/key}

<h1>header</h1>
<p>
	<a href="https://www.dropbox.com/s/spg5vtdhh66bno9/phonghtran_resume.pdf?dl=0" target="_blank"
		>Resume/CV</a
	>
</p>
logos

<img class="logo" src="../logos/fis.png" alt="" />
<img class="logo" src="../logos/826.png" alt="" />
<img class="logo" src="../logos/csod.png" alt="" />
<img class="logo" src="../logos/DroneIQ.png" alt="" />
<img class="logo" src="../logos/fedex.png" alt="" />
<img class="logo" src="../logos/gsk.png" alt="" />
<img class="logo" src="../logos/mastercard.png" alt="" />
<img class="logo" src="../logos/obviously.png" alt="" />
<img class="logo" src="../logos/pnc.png" alt="" />

<style>
</style>
