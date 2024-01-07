<script>
	import { languageConfig } from '../../stores.js';

	import Select from '../components/Select.svelte';

	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const careerLength = year - 2008;

	import { onMount, onDestroy } from 'svelte';

	let windowWidth = window.innerWidth;

	function handleResize() {
		windowWidth = window.innerWidth;
	}

	onMount(() => {
		window.addEventListener('resize', handleResize);
	});

	onDestroy(() => {
		window.removeEventListener('resize', handleResize);
	});
</script>

<div class="wrapper">
	<div class="container">
		<div>
			<Select />
		</div>

		<div>
			{#if $languageConfig[0]['value'] === 1}
				<p class="introLetter">
					Via ChatGPT:<br /> As a seasoned UX Designer, I excel in unraveling complex business challenges
					through a holistic approach. My expertise lies in conducting immersive workshops, leveraging
					the power of design thinking, and implementing user experience strategies that resonate deeply
					with your target audience. I don't just design; I craft solutions that align seamlessly with
					your business goals. With a keen eye for detail and a passion for perfection, I ensure that
					every aspect of the user experience is meticulously thought out and executed. Let me be the
					architect of your digital transformation, where innovation meets functionality, and every interaction
					becomes a step toward your success. Choose me, and let's redefine the way your customers engage
					with your brand.
				</p>
			{:else if $languageConfig[0]['value'] === 2}
				<p class="introLetter">
					My priority is always helping you solve business problems with design tools. I'll be your
					partner from discovery to ideation to execution. I believe my work exists in both Figma
					and the meeting room.
				</p>
				<p class="introLetter">
					Ultimately, an idea not well translated to other teams is not an effective idea. Business,
					product, design, and engineering are all different languages but often have common goals.
					My skills can lead our teams towards those goals.
				</p>
			{:else}
				<p class="introLetter">
					I make websites for the internet. Yeah, computer stuff. No, that cousin posts
					illustrations to Instagram. We don&rsquo;t do the same thing.
				</p>
			{/if}
		</div>
		<!-- intro paragraph-->

		<h6>Phong Tran</h6>
		<span>{careerLength}-year UX designer & occasional coder</span>

		<div class="introLogos">
			{#if windowWidth > 600}
				<div class="row">
					<div><img class="logo" src="../logos/ibm.png" alt="logo of ibm" /></div>

					<div><img class="logo" src="../logos/pnc.png" alt="logo of pnc" /></div>
					<div><img class="logo" src="../logos/fedex.png" alt="logo of fedex" /></div>
					<div><img class="logo horz" src="../logos/DroneIQ.png" alt="logo of drone IQ " /></div>
					<div><img class="logo" src="../logos/fis.png" alt="logo of fis worldpay" /></div>
					<div><img class="logo" src="../logos/mastercard.png" alt="logo of mastercard" /></div>
				</div>
				<!-- row -->
				<div class="row">
					<div class="-s">
						<img class="logo -s" src="../logos/826.png" alt="logo of 826 non-profit org" />
					</div>
					<div class="-xl">
						<img class="logo" src="../logos/csod.png" alt="logo of cornerstone ondemand" />
					</div>

					<div class="-xl">
						<img class="logo" src="../logos/obviously.png" alt="logo of obviously" />
					</div>
					<div class="-xl">
						<img class="logo" src="../logos/designit.png" alt="logo of designit" />
					</div>
					<div class="-s">
						<img class="logo" src="../logos/hrcloud.png" alt="logo of hr cloud" />
					</div>
					<div class="-s"><img class="logo -s" src="../logos/gsk.png" alt="logo of gsk" /></div>
				</div>
				<!-- row -->
			{:else}<div class="row">
					<div><img class="logo" src="../logos/ibm.png" alt="logo of ibm" /></div>
					<div><img class="logo" src="../logos/fedex.png" alt="logo of fedex" /></div>

					<div><img class="logo" src="../logos/mastercard.png" alt="logo of mastercard" /></div>
				</div>
				<!-- row -->
				<div class="row">
					<div class="-xl">
						<img class="logo" src="../logos/designit.png" alt="logo of designit" />
					</div>
					<div class="-xl">
						<img class="logo" src="../logos/csod.png" alt="logo of cornerstone ondemand" />
					</div>

					<div class="-xl">
						<img class="logo" src="../logos/obviously.png" alt="logo of obviously" />
					</div>
				</div>
				<!-- row -->
				<div class="row">
					<div><img class="logo" src="../logos/pnc.png" alt="logo of pnc" /></div>
					<div class="-s">
						<img class="logo" src="../logos/fis.png" alt="logo of fis worldpay" />
					</div>
					<div><img class="logo horz" src="../logos/DroneIQ.png" alt="logo of drone IQ " /></div>
				</div>
				<!-- row -->

				<div class="row">
					<div class="-s">
						<img class="logo -s" src="../logos/826.png" alt="logo of 826 non-profit org" />
					</div>
					<div class="-s">
						<img class="logo" src="../logos/hrcloud.png" alt="logo of hr cloud" />
					</div>
					<div class="-s"><img class="logo -s" src="../logos/gsk.png" alt="logo of gsk" /></div>
				</div>
				<!-- row -->
			{/if}
		</div>
		<!-- introLogos -->

		<h1>PDF Resume</h1>
		<p>
			<a href="https://www.dropbox.com/s/spg5vtdhh66bno9/phonghtran_resume.pdf?dl=0" target="_blank"
				>Resume/CV</a
			>
		</p>
	</div>
	<!-- container -->
</div>

<!-- wrapper -->

<style>
	.wrapper {
		text-align: center;
		width: 100%;
	}

	.container {
		margin: 0 auto;
		max-width: 38rem;
		padding: 0 1rem;
		text-align: left;
	}

	.introLetter {
		margin: 2rem 0;
	}

	.introLogos {
		/* background-color: var(--gray0);
		border: 1px solid black;
		border-radius: var(--borderRadius); */

		margin: 4rem 0;
	}

	div.introLogos div.row {
		align-items: center;
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;

		gap: 1rem;
		margin-top: -1.5rem;
	}

	div.introLogos div.row:first-child {
		margin-top: 0;
	}
	div.introLogos div.row:last-child {
		margin-top: 0;
	}

	div.row > div {
		flex: 1; /* fg:1, fs:1, fb:0 */
	}

	div.row > div.-s {
		flex: 0.75;
	}

	div.row > div.-xl {
		flex: 1.25;
	}

	div.row div img {
		max-height: 100%;
		max-width: 100%;
		object-fit: scale-down;
	}

	/* .introLogos img.logo {
		margin: 0 0.25rem;
		width: 5rem;
	}

	img.logo.-s {
		width: 4rem;
	}
	img.logo.-xl {
		width: 6rem;
	} */
</style>
