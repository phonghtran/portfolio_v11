<script>
	import { onMount } from 'svelte';
	let angleDelta = 0;

	let svgCircles = [1, 5, 10, 15, 20, 25, 30, 35, 40];

	let wavyPath = '';

	let svgTextArcs = [
		{
			id: 0,
			d: '',
			label: 'Prototyping',
			value: 8,
			dotCoors: {
				x: 0,
				y: 0
			},
			desc: 'Comfortable using any tools including coding it.'
		},
		{
			id: 1,
			d: '',
			label: 'Research',
			value: 6,
			dotCoors: {
				x: 0,
				y: 0
			},
			desc: 'Can build good protocols and execute adequately.'
		},
		{
			id: 2,
			d: '',
			label: 'Workshops',
			value: 9,
			dotCoors: {
				x: 0,
				y: 0
			},
			desc: 'Great on being flexible & communicating.'
		},
		{
			id: 3,
			d: '',
			label: 'Visual',
			value: 5,
			dotCoors: {
				x: 0,
				y: 0
			},
			desc: 'Perfectly fine given enough time.'
		},

		{
			id: 4,
			d: '',
			label: 'Strategy',
			value: 9,
			dotCoors: {
				x: 0,
				y: 0
			},
			desc: 'Can integrate design, business & engineering needs.'
		},
		{
			id: 5,
			d: '',
			label: 'Leadership',
			value: 7,
			dotCoors: {
				x: 0,
				y: 0
			},
			desc: 'Mentorship and can up-manage to orient priorities.'
		},

		{
			id: 6,
			d: '',
			label: 'Coding',
			value: 7,
			dotCoors: {
				x: 0,
				y: 0
			},
			desc: 'Scrappy and dirty but gets you there.'
		}
	];

	const circleSegmentsAngle = 360 / svgTextArcs.length;
	const coordinateMathOffsets = {
		x: 50,
		y: 50,
		r: 5,
		dotOffset: 20
	};

	function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
		var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

		return {
			x: centerX + radius * Math.cos(angleInRadians),
			y: centerY + radius * Math.sin(angleInRadians)
		};
	}

	function describeArc(x, y, radius, startAngle, endAngle) {
		var start = polarToCartesian(x, y, radius, endAngle);
		var end = polarToCartesian(x, y, radius, startAngle);

		var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

		var d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(
			' '
		);

		return d;
	}

	let wavyPathCmd = 'M ';

	function textArcs() {
		for (var i = 0; i < svgTextArcs.length; i++) {
			svgTextArcs[i]['d'] = describeArc(
				coordinateMathOffsets.x,
				coordinateMathOffsets.y,
				45,
				i * circleSegmentsAngle,
				(i + 1) * circleSegmentsAngle
			);

			//Q x1 y1, x y

			svgTextArcs[i]['dotCoors'] = polarToCartesian(
				coordinateMathOffsets.x,
				coordinateMathOffsets.y,
				svgTextArcs[i]['value'] * 4,
				i * circleSegmentsAngle + coordinateMathOffsets.dotOffset,
				(i + 1) * circleSegmentsAngle + coordinateMathOffsets.dotOffset
			);

			wavyPathCmd = i > 0 ? 'L ' : 'M ';
			wavyPath +=
				wavyPathCmd + svgTextArcs[i]['dotCoors']['x'] + ' ' + svgTextArcs[i]['dotCoors']['y'] + ' ';
		}

		wavyPath += 'Z';
	}

	onMount(() => {
		for (var i = 1; i < 11; i++) {
			svgCircles[i] = 4 * i;
		}

		textArcs();
	});
</script>

<div id="introSkills">
	<h3>Self-Rated Skill Assessment</h3>

	<blockquote>
		He is extremely smart, he can listen to a few words of a problem and understanding the situation
		the user is facing. He can tease out information at a moments notice and can organize those
		findings into small digestible nuggets that everyone can relate to. He can quickly lay out a
		vision for the solution and capture buy in.&rdquo;<br /><br /> -Recent Manager
	</blockquote>

	<div id="containerSkills">
		<div id="containerSVG">
			<svg id="svgMain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				{#each svgCircles as svgCircle, index}
					<circle cx="50" cy="50" r={svgCircle} class="svgCircle" />
				{/each}

				<path id="wavyPath" stroke="none" stroke-width="0" d={wavyPath} />

				{#each svgTextArcs as svgTextArc, index}
					<circle
						id="svgDot{index}"
						cx={svgTextArc.dotCoors.x}
						cy={svgTextArc.dotCoors.y}
						r="2"
						class="svgDot"
					>
					</circle>
				{/each}

				{#each svgTextArcs as svgTextArc, index}
					<path id="arc{index}" fill="none" stroke="#554455" stroke-width="0" d={svgTextArc.d} />
				{/each}

				{#each svgTextArcs as svgTextArc, index}
					<text x="5" y="50" style="stroke: #000000;" text-anchor="middle">
						<textPath
							class="svgText"
							xlink:href="#arc{index}"
							startOffset="50%"
							spacing="auto"
							lengthAdjust="spacingAndGlyphs">{svgTextArc.label}</textPath
						>
					</text>
				{/each}
			</svg>
		</div>
		<!-- containerSVG -->

		<div id="containerSkillsDesc">
			{#each svgTextArcs as svgTextArc, index}
				<div class="pillboxSkill">
					<h6>{svgTextArc.label}: {svgTextArc.value}</h6>
					<p>{svgTextArc.desc}</p>
				</div>
			{/each}
		</div>
		<!-- containerSkillsDesc -->
	</div>
	<!-- containerSkills -->
</div>

<!-- introSkills -->

<style>
	@keyframes rotateGraph {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	#introSkills {
		margin: 4rem 1rem 2rem;
	}

	#svgMain {
		animation: 360s linear infinite rotateGraph;
	}
	#wavyPath {
		fill: var(--accentColor3);
	}
	.svgCircle {
		fill: none;
		stroke: var(--gray1);
		stroke-width: 0.5px;
	}

	.svgDot {
		fill: var(--accentColor);
	}

	.svgText {
		font-size: 0.25rem;
		font-weight: 400;
		fill: black;
		stroke-width: 0;
	}

	.pillboxSkill {
		background-color: var(--gray0);
		border-radius: var(--borderRadius);
		margin: 1rem 0 0;
		padding: 1rem;
	}

	.pillboxSkill h6,
	.pillboxSkill p {
		margin: 0;
	}

	h6 {
		margin-top: 1rem;
	}

	@media (min-width: 600px) {
		#containerSVG {
			margin-left: 20%;
			width: 60%;
		}

		#introSkills {
			margin: 4rem 0 2rem;
		}
	}
</style>
