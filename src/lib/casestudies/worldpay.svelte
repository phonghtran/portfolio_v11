<script>
</script>

<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<h2>Worldpay (FIS)</h2>
		<h3>Context</h3>
		<p>
			After a series of acquisitions and mergers, Worldpay was left with a multitude of technologies
			each with its own developer tools and portals. As a consulting team, we were brought to
			assess, recommend, and formulate a solution to merge all the portal experiences into a unified
			platform. We were a three-person team with three months to execute. I contributed to
			conducting research, co-facilitating workshops, synthesis. Shared the architecture and UX work
			while a visual specialist extended the design system. An additional deliverable was me coding
			Angular components for their development team.
		</p>
		<h3>Working Virtually</h3>
		<p>
			During this project, the state of the world didn’t allow for easy travel. So we conducted
			everything virtually including workshops with the client. We reviewed workflows and
			architecture, sketched out ideas using screen sharing. Even conducting individual
			brainstorming and worksheets in our Miro white boarding space. The three of us took turns
			facilitating, cleaning up the boards, and taking notes to move the stakeholders from activity
			to activity throughout the Miro board.
		</p>
		<h3>Coding</h3>
		<p>
			It wasn’t planned but as we got closer to delivery, the client were rushed to get
			implementation up-and-running. I asked about their tech stack and since I could code in
			AngularJS, we offered coding up the design system and UI components for them as an add-on.
			When they agreed, I spent a two-week sprint coding up their front-end.
		</p>
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<div class="imageGrid">
	<!-- <h3 id="header">Images</h3> -->
	<h4 id="headline1" class="headline">Timeline</h4>
	<img id="img1" src="../caseStudies/worldpay/slides1.jpeg " alt="project timeline" />
	<h4 id="headline2" class="headline">Personas</h4>

	<img
		id="img2"
		src="../caseStudies/worldpay/slides2.jpeg "
		alt="persona 1 with description, characteristics and needs"
	/>
	<img id="img3" src="../caseStudies/worldpay/slides3.jpeg " alt="persona 2" />
	<img id="img4" src="../caseStudies/worldpay/slides4.jpeg" alt="persona 3" />

	<h4 id="headline3" class="headline">Virtual Collaboration</h4>

	<img
		id="img5"
		src="../caseStudies/worldpay/Screen Shot 2020-04-07 at 3.09.35 PM (2).png"
		alt="miro virtual meeting about mapping the developer experience"
	/>
	<img
		id="img7"
		src="../caseStudies/worldpay/Screen Shot 2020-05-19 at 4.01.47 PM.png"
		alt="virtual meeting with wireframes"
	/>

	<img
		id="img6"
		src="../caseStudies/worldpay/Screen Shot 2020-04-16 at 1.29.16 PM.png"
		alt="group workshop with client team members grouping problems and solutions"
	/>

	<img id="img8" src="../caseStudies/worldpay/wp_4.png" alt="wireframe of the new portal" />
	<img
		id="img9"
		src="../caseStudies/worldpay/wp_5.png"
		alt="miro board of ideas grouped by categories of themes"
	/>

	<h4 id="headline4" class="headline">Coding</h4>
	<img
		id="img12"
		src="../caseStudies/worldpay/wp_2.png"
		alt="styleguide portal of components I coded"
	/>

	<img
		id="img10"
		src="../caseStudies/worldpay/Screen Shot 2020-06-03 at 10.43.12 AM.png"
		alt="IDE editor with code shown"
	/>
	<img
		id="img11"
		src="../caseStudies/worldpay/wp_1.png"
		alt="global typography definitions of the styleguide"
	/>

	<img
		id="img13"
		src="../caseStudies/worldpay/wp_3.png"
		alt="in the styleguide portal, i left a page of special code and considerations for the developers"
	/>
</div>

<!-- <img id="img14" src="../caseStudies/worldpay/wp_6.png" alt="" /> -->

<!-- imageGrid -->
<style>
	img {
		margin: 0 0 1rem 0;
		width: 100%;
	}

	.imageGrid {
		background-color: #111;
		color: white;

		padding: 1rem;
	}
	.headline {
		display: block;
		margin: 2rem 0 1rem;
		text-align: center;
	}

	@media (min-width: 600px) {
		.imageGrid {
			column-gap: 1rem;
			display: grid;
			grid-template-columns: repeat(12, [col-start] 1fr);
			row-gap: 1rem;
		}

		.headline {
			display: none;
		}

		#header {
			grid-column: col-start 1 / span 12;
			/* grid-column-end: 12; */
			grid-row: 1;
			/* grid-row-end: ; */
			text-align: center;
		}

		#headline1 {
			grid-column: col-start 1 / span 3;
			grid-row: 2;
		}

		#img1 {
			grid-column: col-start 4 / span 9;
			grid-row: 2;
		}

		#img2 {
			grid-column: col-start 1 / span 4;
			grid-row: 4;
		}

		#img3 {
			grid-column: col-start 5 / span 4;
			grid-row: 4;
		}

		#img4 {
			grid-column: col-start 9 / span 4;
			grid-row: 4;
		}

		#headline2 {
			grid-column: col-start 10 / span 3;
			grid-row: 4;
		}

		#headline3 {
			grid-column: col-start 1 / span 12;
			grid-row: 5;
			text-align: center;
		}

		#img5 {
			grid-column: col-start 1 / span 6;
			grid-row: 6;
		}

		#img7 {
			grid-column: col-start 7 / span 6;
			grid-row: 6;
		}

		#img6 {
			grid-column: col-start 1 / span 12;
			grid-row: 7;
		}

		#img8 {
			grid-column: col-start 1 / span 6;
			grid-row: 8;
		}

		#img9 {
			grid-column: col-start 7 / span 6;
			grid-row: 8;
		}

		#headline4 {
			grid-column: col-start 1 / span 3;
			grid-row: 9;
		}

		#img12 {
			grid-column: col-start 4 / span 9;
			grid-row: 9;
		}

		#img10 {
			grid-column: col-start 1 / span 12;
			grid-row: 10;
		}

		#img11 {
			grid-column: col-start 1 / span 6;
			grid-row: 11;
		}

		#img13 {
			grid-column: col-start 7 / span 6;
			grid-row: 11;
		}
	}
</style>
