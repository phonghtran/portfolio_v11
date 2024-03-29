<script>
	import { languageConfig, toggleSections } from '../../stores.js';

	import Select from '../components/Select.svelte';
	import SectionToggle from '../components/SectionToggle.svelte';
	import NavIntro from '../components/NavIntro.svelte';

	import IntroLogos from '$lib/contentBlock/introLogos.svelte';
	import IntroAudio from '$lib/contentBlock/introAudio.svelte';
	import IntroCaseStudies from '$lib/contentBlock/introCaseStudies.svelte';
	import IntroWork from '$lib/contentBlock/introWork.svelte';
	import IntroTechDemos from '$lib/contentBlock/introTechDemos.svelte';
	import IntroSocial from '$lib/contentBlock/introSocial.svelte';
	import IntroSkills from '$lib/contentBlock/introSkills.svelte';
	import IntroKeywords from '$lib/contentBlock/introKeywords.svelte';

	let showMenu = false;

	const modes = [
		{
			id: 1,
			label: 'The Basics'
		},
		{
			id: 2,
			label: 'Team Fit'
		},
		{
			id: 3,
			label: 'Keywords'
		}
	];
	let mode = 1;

	function updateToggle(toggleSection) {
		toggleSections[toggleSection.id] = toggleSection;

		if (toggleSection.isVisible && innerWidth > 600) {
			console.log(innerWidth);
			setTimeout(() => {
				const elem = document.getElementById(toggleSection.div);
				elem.scrollIntoView({
					behavior: 'smooth'
				});
			}, 250);
		}

		mode = 0;
	}

	function switchSections(id) {
		showMenu = true;

		setTimeout(() => {
			let toggleArray = [0, 1, 5, 6, 7];
			if (id === 2) {
				toggleArray = [3, 4];
			}

			if (id === 3) {
				toggleArray = [8];
			}

			for (var i = 0; i < toggleSections.length; i++) {
				let section = toggleSections[i];
				section.isVisible = false;

				for (var j = 0; j < toggleArray.length; j++) {
					if (section.id === toggleArray[j]) {
						section.isVisible = true;
						break;
					}
				}

				toggleSections[i] = section;
			}
		}, 250);
	}

	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const careerLength = year - 2008;

	$: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<NavIntro {modes} {mode} on:update={(e) => switchSections(e.detail)} />
<div class="wrapperMaxWidth">
	<div class="containerMaxWidth">
		{#if toggleSections[0].isVisible}
			<div id="introLetter" class="introCard">
				<div>
					<Select />
				</div>

				<div>
					{#if $languageConfig[0]['value'] === 1}
						<p class="introLetter">
							I'm a systems-based thinker who solves problems with design and Design Thinking. The
							majority of my career is working with large enterprise clients helping scale up their
							SaaS platforms and applications. I believe in collaboration and getting to rapid
							conclusions with workshops and moderated conversations. I leverage the tools of design
							(sketching, prototyping, whiteboarding) to translate business needs into UX design and
							code.
						</p>
					{:else if $languageConfig[0]['value'] === 2}
						<span>
							<p class="introLetter">
								My priority is always helping you solve business problems with design tools. I'll be
								your partner from discovery to ideation to execution. I believe my work exists in
								both Figma and the meeting room.
							</p>
							<p class="introLetter">
								Ultimately, an idea not well translated to other teams is not an effective idea.
								Business, product, design, and engineering are all different languages but often
								have common goals. My skills can lead our teams towards those goals.
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
		{/if}
		<!-- toggle state check -->

		{#if toggleSections[1].isVisible}
			<IntroLogos />
		{/if}

		<SectionToggle
			{toggleSections}
			{showMenu}
			on:update={(e) => updateToggle(e.detail)}
			on:updateShowMenu={(e) => {
				showMenu = e.detail;
			}}
		/>

		{#if toggleSections[2].isVisible}
			<IntroAudio />
		{/if}

		{#if toggleSections[3].isVisible}
			<IntroSkills />
		{/if}

		{#if toggleSections[4].isVisible}
			<IntroSocial />
		{/if}

		{#if toggleSections[5].isVisible}
			<IntroCaseStudies />
		{/if}

		{#if toggleSections[6].isVisible}
			<IntroTechDemos />
		{/if}

		{#if toggleSections[7].isVisible}
			<IntroWork />
		{/if}

		{#if toggleSections[8].isVisible}
			<IntroKeywords />
		{/if}

		<div class="introCard">
			<h6>phonghtran llc</h6>
			<ul class="contactList">
				<li>
					<i class="fa-solid fa-file"></i>
					<a
						href="https://drive.google.com/file/d/1mV6YmcOtbtGZBgOERzwr5SmDBpGyNkNU/view?usp=sharing"
						target="_blank">Resume/CV</a
					>
				</li>
				<li>
					<i class="fa-regular fa-envelope"></i>
					<a href="mailto:phong@phonghtran.com">phong@phonghtran.com</a>
				</li>
				<li><i class="fa-solid fa-mobile-retro"></i> 612-481-4203</li>
				<li>
					<i class="fa-brands fa-linkedin"></i>
					<a href="https://www.linkedin.com/in/phonghtran/" target="_blank">LinkedIn</a>
				</li>
				<li>
					<i class="fa-brands fa-instagram"></i>
					<a href="https://www.instagram.com/phonghtran/" target="_blank">Instagram</a>
				</li>
				<li>
					<i class="fa-brands fa-github"></i>
					<a href="https://github.com/phonghtran/" target="_blank">Github</a>
				</li>
			</ul>
		</div>
		<!-- intro outro -->
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<style>
	#introLetter {
		border-radius: var(--borderRadius);
		margin: 1rem 1rem 5rem 1rem;
	}

	.introCard {
		background-color: var(--gray0);

		padding: 2rem;
	}

	.contactList {
		margin: 1rem 0 0 0;
	}
	.contactList li {
		list-style: none;
		margin: 0 0 0.75rem 0;
		padding-left: 0;
	}

	.introCard h6 {
		margin-top: 0;
	}

	@media (min-width: 600px) {
		#introLetter {
			margin-left: 0;
			margin-right: 0;
		}
		.introCard {
			background-color: var(--gray0);
			border-radius: var(--borderRadius);
			margin-top: 2rem;
			padding: 2rem;
		}
	}
</style>
