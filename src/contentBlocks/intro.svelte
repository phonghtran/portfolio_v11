<script>
	import { languageConfig } from '../stores.js';

	let targetAudienceValue = $languageConfig['targetAudience']['value'];
	let verboseLevelValue = $languageConfig['verboseLevel']['value'];
</script>

<p>intro {$languageConfig['targetAudience']['value']}</p>

{#key $languageConfig['targetAudience']['value']}
	<p>{$languageConfig['targetAudience']['value']}</p>

	{#if $languageConfig['targetAudience']['value'] === 1}
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
	{:else if $languageConfig['targetAudience']['value'] > 1}
		<p>bigger than 1</p>
	{:else}
		<p>else</p>
	{/if}
{/key}
