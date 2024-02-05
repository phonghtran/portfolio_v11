<script>
	import { onMount } from 'svelte';

	let keywords = [
		{
			header: 'UX Design',
			duration: 2010,
			desc: 'Very comfortable in the end-to-end process connecting Product Discovery to Engineering. Can employ sketches, mock-ups, and prototypes to represent concepts and ideas to the team and stakeholders. Figma, Illustrator, Sketch.'
		},
		{
			header: 'Prototyping',
			duration: 2013,
			desc: 'Started with Invision but primarily use Figma currently. I can also code live demos as needed. Also, Keynote or any slide software in a pinch. '
		},
		{
			header: 'Design Research',
			duration: 2013,
			desc: 'Was going to be a scientist before switching majors to Fine Arts. I can build hypotheses and research protocols to reduce bias and blindspots. Much of my experiences are qualitative over quantitive. But I can implement A/B testing, analytics, and heat mapping to track users. Most recently deployed a Heap Analytics platform to track a custom SaaS platform.'
		},
		{
			header: 'Service Design',
			duration: 2018,
			desc: 'Combining qualitative research and ethnographic tactics, I can synthesize insights into service maps and user journeys. Often this transitions into system-wide changes to both work processes and software. FedEx underpins this as they needed in-depth research into the ramifications of transitioning their mainframe software into the cloud. '
		},
		{
			header: 'Product Design',
			duration: 2012,
			desc: 'Often my process bleeds into Product Management as I really insist on starting at the business needs with PMs (and try to get Engineering involved early also.) That allows me to maximize the design&rsquo;s impact from a system&rsquo;s POV and anticipate any UI needs early. '
		},
		{
			header: 'Design Systems',
			duration: 2018,
			desc: 'Whether it&rsquo;s scaling up rapidly by modifying an existing system or starting fresh--I can leverage Figma libraries to build extensible components and variants. A small example is building a system to build Google Looker dashboard mockups for the sales team. We reduced the production time from 2 weeks to 2 hours using just a Figma library. '
		},
		{
			header: 'UI Design ',
			duration: 2002,
			desc: 'Been tinkering with visuals since I was making Winamp UI skins and Half-Life maps when I was a teenager. Trends come and go, so I like to build from a brand&rsquo;s identity and core values. When the budget and constraints allow, I like to also specify motion and animation in code snippets. When it comes to software, accessibility, and mobile-ready designs are table stakes. I use a combination of Figma and Adobe products. '
		},
		{
			header: 'Design Thinking ',
			duration: 2013,
			desc: 'As a practice that I picked up while at IBM, I like to improvise and be dynamic with the participants involved. From post-it note exercises, crazy 8s, and stack-rank voting--these are all just tools to be used at the right time to solve problems. I&rsquo;m comfortable with in-person or virtual. You can get a lot done with Zoom and Miro. '
		},
		{
			header: 'Workshop Facilitation',
			duration: 2013,
			desc: 'Having worked with several Fortune 500 companies (Cornerstone OnDemand, Mastercard, GSK, PNC Bank) running workshops is pretty fun for me. It requires a blend of reading social cues, staying flexible, and driving people toward the same goals. I&rsquo;ve adapted Google&rsquo;s Design Sprints and IBM&rsquo;s flavor of Design Thinking to blend together best practices. '
		},
		{
			header: 'Leadership & Management',
			duration: 2015,
			desc: 'At HRCloud, I led a team of 6 designers to work across a suite of HR functions to scale up UX and research efforts. I would ultimately struggle with difficult leadership and chaotic planning. Recently, in a startup, I led another designer to split up software and marketing tasks while mentoring young PMs to walk them through the product lifecycle. '
		},
		{
			header: 'SaaS Enterprise Software Design',
			duration: 2013,
			desc: 'Since IBM, I&rsquo;ve become accustomed to large-scale enterprise software. Being able to track sprawling systems and sub-systems with unique feature flags and tech debt. I&rsquo;m familiar with different software philosophies like one monolithic codebase or distributed systems of micro-services. It often has unforeseen consequences on what design can do. '
		},
		{
			header: 'Front-End Development',
			duration: 2002,
			desc: 'Been coding for fun since high school starting with PHP and mySQL. Over the years, I&rsquo;ve picked up React, Angular, Vue, and most recently Svelte. I&rsquo;m familiar with Bootstrap and Tailwind. Knowing CSS deepens my knowledge of what&rsquo;s possible from a UI perspective, and can avoid common oversights. '
		},
		{
			header: 'Back-End Development',
			duration: 2003,
			desc: 'This is not a strength, but I know enough to scaffold up small needs. I&rsquo;m familiar with both SQL and noSQL database flavors. I can build small apps in Google Firebase or Vercel, and deploy them as demos. I would not be able to load-balance servers or engineer CI/CD pipelines. '
		},
		{
			header: 'Illustration',
			duration: 2004,
			desc: 'This was my college degree and have a fair comfort in sketching and illustration. It lends itself well in a pinch for a marketing asset or logo, but it&rsquo;s not something I stress as a skill. '
		}
	];

	const currentDate = new Date();
	const year = currentDate.getFullYear();

	const wordColors = [
		{
			label: 'Tools',
			color: '#009CEB',
			words: [
				'Figma',
				'Illustrator',
				'Sketch',
				'Invision',
				'Adobe',
				'Miro',
				'Heap Analytics',
				'Zoom',
				'React',
				'Vue',
				'Angular',
				'Svelte',
				'Bootstrap',
				'Tailwind',
				'Vercel',
				'Google Firebase',
				'Keynote',
				'Google Looker',
				'PHP',
				'mySQL',
				'noSQL',
				'SQL'
			]
		},
		{
			label: 'Skills',
			color: '#EB8200',
			words: [
				'mock-ups',
				'sketches',
				'sketching',
				'illustration',
				'prototypes',
				'research',
				'A/B testing',
				'heat mapping',
				'service maps',
				'user journeys',
				'UI',
				'UX',
				'identity',
				'accessibility',
				'Design Sprints',
				'Design Thinking'
			]
		},
		{
			label: 'Clients',
			color: '#34B844',
			words: ['IBM', 'FedEx', 'Mastercard', 'GSK', 'PNC Bank', 'Cornerstone OnDemand']
		}
	];
	function colorCode(text) {
		let words = text.split(' ');
		let newText = '';

		for (var i = 0; i < words.length; i++) {
			for (var j = 0; j < wordColors.length; j++) {
				const isMatch = wordColors[j].words.every((rx) => rx.test(words[i]));

				if (isMatch) {
					newText += `<span class="keyword ${wordColors[j].class}">` + words[i] + '</span> ';
				} else {
					newText += words[i] + ' ';
				}
			}
		}

		return newText;
	}

	onMount(() => {
		for (var i = 0; i < keywords.length; i++) {
			let desc = keywords[i].desc;

			for (var j = 0; j < wordColors.length; j++) {
				wordColors[j].words.forEach((str) => {
					desc = desc.replaceAll(
						str,
						`<span style="color:${wordColors[j].color}; font-weight: 700">${str}</span>`
					);
				});
			}

			keywords[i].desc = desc;
		}
	});
</script>

<div id="introKeywords" class="introSectionPadding">
	<h3>Keywords</h3>
	<div id="legend">
		{#each wordColors as color, index}
			<div class="legendItem">
				<span class="color" style="background-color: {color.color};"></span>
				{color.label}
			</div>
		{/each}
	</div>
	{#each keywords as keyword, index}
		<div id="section{index}">
			<h4>{keyword.header}</h4>
			<small>Practice: {year - keyword.duration} years</small>
			<p>{@html keyword.desc}</p>
		</div>
	{/each}
</div>

<style>
	small {
		margin-top: 0.25rem;
	}

	#legend {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		margin-top: 1rem;
	}
	.legendItem {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
	}

	.legendItem .color {
		border-radius: 2px;
		display: inline-block;
		height: 1rem;
		width: 1rem;
	}
</style>
