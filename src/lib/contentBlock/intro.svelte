<script>
	import { languageConfig } from '../../stores.js';

	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const careerLength = year - 2008;
</script>

<h1>phonghtran</h1>
<h2>{careerLength} year ux designer & occasional coder</h2>

{#if $languageConfig[1]['value'] === 0 && $languageConfig[0]['value'] === 0}
	<p>
		Portfolio currently configured for <span class="settingKeyword">HR</span> with
		<span class="settingKeyword">minimal</span> verbosity
	</p>
	<p id="introHashtags">
		<span class="seoHashtag">UserExperience</span>,
		<span class="seoHashtag">DesignThinking</span>,
		<span class="seoHashtag">ResponsiveDesign</span>,
		<span class="seoHashtag">PageSpeedOptimization</span>,
		<span class="seoHashtag">Accessibility</span>,
		<span class="seoHashtag">UI</span>,
		<span class="seoHashtag">Illustration</span>,
		<span class="seoHashtag">InformationArchitecture</span>,
		<span class="seoHashtag">MobileFirst</span>,
		<span class="seoHashtag">Figma</span>,
		<span class="seoHashtag">Miro</span>,
		<span class="seoHashtag">Adobe</span>,
		<span class="seoHashtag">AnalyticsAndTracking</span>,
		<span class="seoHashtag">UserResearch</span>,
		<span class="seoHashtag">Persona</span>,
	</p>
	<p id="introHashtags">
		<span class="seoHashtag">FrontEnd</span>,
		<span class="seoHashtag">Firebase</span>,
		<span class="seoHashtag">Svelte</span>,
		<span class="seoHashtag">React</span>,
		<span class="seoHashtag">Angular</span>,
		<span class="seoHashtag">CSS</span>,
		<span class="seoHashtag">HTML</span>,
		<span class="seoHashtag">JS</span>
	</p>
{:else if $languageConfig[1]['value'] === 1 && $languageConfig[0]['value'] === 0}
	<h3>Generated from ChatGPT AI:</h3>
	<p>
		A seasoned UX designer who codes with 15 years of experience brings a wealth of expertise to the
		table. Their extensive background not only includes a deep understanding of coding but also
		encompasses a comprehensive knowledge of design thinking principles. Having likely facilitated
		numerous workshops, this professional excels in fostering collaborative problem-solving
		environments, where they leverage their coding skills to transform innovative design concepts
		into user-friendly digital experiences, making them a valuable asset to any project or
		organization.
	</p>
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
{:else if $languageConfig[1]['value'] === 2 && $languageConfig[0]['value'] === 0}
	<p>hr - verbose</p>
{:else if $languageConfig[1]['value'] === 0 && $languageConfig[0]['value'] === 1}
	minimal - design
{:else if $languageConfig[1]['value'] === 1 && $languageConfig[0]['value'] === 1}
	expressive - design
{:else if $languageConfig[1]['value'] === 2 && $languageConfig[0]['value'] === 1}
	verbose - design
{:else if $languageConfig[1]['value'] === 0 && $languageConfig[0]['value'] === 2}
	minimal - tech
{:else if $languageConfig[1]['value'] === 1 && $languageConfig[0]['value'] === 2}
	expressive - tech
{:else if $languageConfig[1]['value'] === 2 && $languageConfig[0]['value'] === 2}
	verbose - tech
{:else}
	{$languageConfig[1]['value']} - {$languageConfig[0]['value']}
	<p>else</p>
{/if}

<h1>PDF Resume</h1>
<p>
	<a href="https://www.dropbox.com/s/spg5vtdhh66bno9/phonghtran_resume.pdf?dl=0" target="_blank"
		>Resume/CV</a
	>
</p>

<div class="introLogos">
	<img class="logo" src="../logos/ibm.png" alt="" />
	<img class="logo" src="../logos/mastercard.png" alt="" />
	<img class="logo" src="../logos/pnc.png" alt="" />
	<img class="logo" src="../logos/fedex.png" alt="" />
	<img class="logo" src="../logos/gsk.png" alt="" />
	<img class="logo" src="../logos/fis.png" alt="" />
	<img class="logo" src="../logos/826.png" alt="" />
	<img class="logo" src="../logos/csod.png" alt="" />
	<img class="logo" src="../logos/DroneIQ.png" alt="" />
	<img class="logo" src="../logos/obviously.png" alt="" />
</div>

<style>
</style>
