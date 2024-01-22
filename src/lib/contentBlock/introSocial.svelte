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
			}
		},
		{
			id: 1,
			d: '',
			label: 'Research',
			value: 6,
			dotCoors: {
				x: 0,
				y: 0
			}
		},
		{
			id: 2,
			d: '',
			label: 'Workshops',
			value: 9,
			dotCoors: {
				x: 0,
				y: 0
			}
		},
		{
			id: 3,
			d: '',
			label: 'Visual',
			value: 5,
			dotCoors: {
				x: 0,
				y: 0
			}
		},

		{
			id: 4,
			d: '',
			label: 'Strategy',
			value: 9,
			dotCoors: {
				x: 0,
				y: 0
			}
		},
		{
			id: 5,
			d: '',
			label: 'Leadership',
			value: 7,
			dotCoors: {
				x: 0,
				y: 0
			}
		},

		{
			id: 6,
			d: '',
			label: 'Coding',
			value: 7,
			dotCoors: {
				x: 0,
				y: 0
			}
		}
	];

	const circleSegmentsAngle = 360 / svgTextArcs.length;
	const coordinateMathOffsets = {
		x: 50,
		y: 50,
		r: 5,
		dotOffset: 25
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

	let prevCoor = '';

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

			if (i > 1) {
				wavyPath +=
					'T ' + svgTextArcs[i]['dotCoors']['x'] + ' ' + svgTextArcs[i]['dotCoors']['y'] + ' ';
			}

			prevCoor = svgTextArcs[i]['dotCoors'];
		}

		wavyPath += ' Z';
	}

	onMount(() => {
		for (var i = 1; i < 11; i++) {
			svgCircles[i] = 4 * i;
		}

		//Q x1 y1, x y
		let prevCoor = polarToCartesian(
			coordinateMathOffsets.x,
			coordinateMathOffsets.y,
			svgTextArcs[0]['value'] * 4,
			coordinateMathOffsets.dotOffset,
			circleSegmentsAngle + coordinateMathOffsets.dotOffset
		);

		wavyPath = 'M ' + prevCoor.x + ' ' + prevCoor.y + ', ';
		wavyPath += 'Q ' + prevCoor.x + ' ' + prevCoor.y + ', ';

		prevCoor = polarToCartesian(
			coordinateMathOffsets.x,
			coordinateMathOffsets.y,
			svgTextArcs[1]['value'] * 4,
			circleSegmentsAngle + coordinateMathOffsets.dotOffset,
			2 * circleSegmentsAngle + coordinateMathOffsets.dotOffset
		);

		wavyPath += prevCoor.x + ' ' + prevCoor.y + ' ';

		textArcs();
	});
</script>

<div class="introSocial">
	<div id="containerSVG">
		<svg id="svgMain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			{#each svgCircles as svgCircle, index}
				<circle cx="50" cy="50" r={svgCircle} class="svgCircle" />
			{/each}

			<path id="wavyPath" fill="rgba(100,100,0,0.5" stroke="none" stroke-width="0" d={wavyPath} />

			{#each svgTextArcs as svgTextArc, index}
				<circle
					id="svgDot{index}"
					cx={svgTextArc.dotCoors.x}
					cy={svgTextArc.dotCoors.y}
					r="2"
					class="svgDot"
				>
					<!-- <animateMotion
					dur="10s"
					repeatCount="indefinite"
					path=" M 100, 100
        m 75, 0
        a 75,75 0 1,0 -150,0
        a 75,75 0 1,0  150,0"
				/> -->
				</circle>
			{/each}

			{#each svgTextArcs as svgTextArc, index}
				<path id="arc{index}" fill="none" stroke="none" stroke-width="0" d={svgTextArc.d} />
			{/each}

			{#each svgTextArcs as svgTextArc, index}
				<text x="5" y="50" style="stroke: #000000;" text-anchor="middle">
					<textPath
						class="svgText"
						xlink:href="#arc{index}"
						startOffset="1rem"
						spacing="auto"
						lengthAdjust="spacingAndGlyphs">{svgTextArc.label}</textPath
					>
				</text>
			{/each}
		</svg>
	</div>
	<!-- containerSVG -->

	<blockquote>
		He is extremely smart, he can listen to a few words of a problem and understanding the situation
		the user is facing. He can tease out information at a moments notice and can organize those
		findings into small digestible nuggets that everyone can relate to. He can quickly lay out a
		vision for the solution and capture buy in. -Recent Manager
	</blockquote>

	<blockquote>
		Phong is a great mentor to the PMs. When Phong is at his best, he pushes for big ideas, offers
		wider perspective, and coaches the team on communication. He also works very quickly when he's
		focused, which can be extremely helpful. -Colleague
	</blockquote>

	<blockquote>
		Phong encourages me to expand my horizons, potentially grow the team, and take charge of all
		things visual for the company, including client-facing projects and collaborating with different
		departments across Obviously. Phong's an outstanding colleague, and he makes me feel like an
		equal partner in our endeavours. -Colleague
	</blockquote>
	<h3>Work Style Compatibility</h3>

	<h4>Gallup's StrengthsFinder 2.0</h4>
	<h5>Your Top 5 Themes</h5>

	<h6>Strategic</h6>
	<p>
		People who are especially talented in the Strategic theme create alternative ways to proceed.
		Faced with any given scenario, they can quickly spot the relevant patterns and issues.
	</p>
	<h6>Individualization</h6>
	<p>
		People who are especially talented in the Individualization theme are intrigued with the unique
		qualities of each person. They have a gift for figuring out how people who are different can
		work together productively.
	</p>
	<h6>Futuristic</h6>
	<p>
		People who are especially talented in the Futuristic theme are inspired by the future and what
		could be. They inspire others with their visions of the future.
	</p>
	<h6>Restorative</h6>
	<p>
		People who are especially talented in the Restorative theme are adept at dealing with problems.
		They are good at figuring out what is wrong and resolving it.
	</p>
	<h6>Ideation</h6>
	<p>
		People who are especially talented in the Ideation theme are fascinated by ideas. They are able
		to find connections between seemingly disparate phenomena.
	</p>

	<h4>DiSC Overview</h4>

	<h6>CS Style</h6>

	<p>
		Because you have a CS style, Phong, you're probably a reliable person who works conscientiously
		to perform in a steady and predictable manner. More than anything, you want a sense of security.
		You appreciate clearly defined expectations, and although you usually maintain a calm exterior,
		you may worry about unpredictable, uncontrollable events.
	</p>
	<p>
		Because you want to build a stable environment for yourself, you may make sure standard systems
		and procedures are in place. Furthermore, you're probably most comfortable working with those
		who share your systematic nature.
	</p>
	<p>
		You have specific expectations for yourself and a desire to do things correctly. Accuracy and
		precision tend to be important to you, and you sometimes strive for perfection to avoid being
		criticized. Most likely, you tend to doublecheck your work, so others may be comfortable calling
		on you to complete projects that require precise care. However, while you tend to produce
		high-quality results, you may occasionally get bogged down in the specifics.
	</p>
</div>

<!-- introSocial -->

<style>
	@keyframes rotateGraph {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	#containerSVG {
		clip: auto;
	}
	#svgMain {
		animation: 360s linear infinite rotateGraph;
		height: 300px;
		width: 300px;
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
</style>
