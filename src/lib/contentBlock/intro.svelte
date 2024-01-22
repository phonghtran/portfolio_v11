<script>
	import { languageConfig } from '../../stores.js';

	import Select from '../components/Select.svelte';
	import IntroLogos from '$lib/contentBlock/introLogos.svelte';
	import IntroAudio from '$lib/contentBlock/introAudio.svelte';
	import IntroCaseStudies from '$lib/contentBlock/introCaseStudies.svelte';
	import IntroWork from '$lib/contentBlock/introWork.svelte';
	import IntroTechDemos from '$lib/contentBlock/introTechDemos.svelte';
	import IntroSocial from '$lib/contentBlock/introSocial.svelte';

	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const careerLength = year - 2008;

	$: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="wrapperMaxWidth">
	<div class="containerMaxWidth">
		<div class="introCard">
			<div>
				<Select />
			</div>

			<div>
				{#if $languageConfig[0]['value'] === 1}
					<p class="introLetter">
						<small>Via ChatGPT:</small>
						As a seasoned UX Designer, I excel in unraveling complex business challenges through a holistic
						approach. My expertise lies in conducting immersive workshops, leveraging the power of design
						thinking, and implementing user experience strategies that resonate deeply with your target
						audience. I don't just design; I craft solutions that align seamlessly with your business
						goals. With a keen eye for detail and a passion for perfection, I ensure that every aspect
						of the user experience is meticulously thought out and executed. Let me be the architect
						of your digital transformation, where innovation meets functionality, and every interaction
						becomes a step toward your success. Choose me, and let's redefine the way your customers
						engage with your brand.
					</p>
				{:else if $languageConfig[0]['value'] === 2}
					<span>
						<p class="introLetter">
							My priority is always helping you solve business problems with design tools. I'll be
							your partner from discovery to ideation to execution. I believe my work exists in both
							Figma and the meeting room.
						</p>
						<p class="introLetter">
							Ultimately, an idea not well translated to other teams is not an effective idea.
							Business, product, design, and engineering are all different languages but often have
							common goals. My skills can lead our teams towards those goals.
						</p></span
					>
				{:else}
					<p class="introLetter">
						I make websites for the internet. Yeah, computer stuff. No, that cousin posts her
						illustrations to Instagram. We don&rsquo;t do the same thing.
					</p>
				{/if}
			</div>
			<!-- intro paragraph-->

			<h6>Phong Tran</h6>
			<span>{careerLength}-year UX designer & occasional coder</span>
		</div>
		<!-- introCard -->

		<IntroLogos />
		<IntroSocial />
		<IntroCaseStudies />
		<IntroTechDemos />
		<IntroWork />

		<div class="introCard">
			<h6>phonghtran llc</h6>
			<ul class="contactList">
				<li>
					<i class="fa-regular fa-envelope"></i>
					<a href="mailto:phong@phonghtran.com">phong@phonghtran.com</a>
				</li>
				<li><i class="fa-solid fa-mobile-retro"></i> 612-643-1555</li>
				<li>
					<i class="fa-brands fa-linkedin"></i>
					<a href="https://www.linkedin.com/in/phonghtran/" target="_blank">LinkedIn</a>
				</li>
				<li>
					<i class="fa-brands fa-instagram"></i>
					<a href="https://www.instagram.com/phonghtran/" target="_blank">Instagram</a>
				</li>
			</ul>
		</div>
		<!-- intro outro -->
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<style>
	.introCard {
		background-color: var(--gray0);

		padding: 2rem;
	}
	.introLetter {
		margin: 2rem 0;
	}

	.contactList {
		margin: 1rem 0 0 0;
	}
	.contactList li {
		list-style: none;
		margin: 0 0 0.25rem 0;
		padding-left: 0;
	}

	.introCard h6 {
		margin-top: 0;
	}

	@media (min-width: 600px) {
		.introCard {
			background-color: var(--gray0);
			border-radius: var(--borderRadius);
			margin-top: 2rem;
			padding: 2rem;
		}
	}
</style>
