<script>
	import ImageSlider from '../components/ImageSlider.svelte';

	let imagesBeforeAfter = [
		{
			before: {
				src: '../caseStudies/obviously/beforepic_cropped.png',
				alt: 'sample page before the redesign'
			},
			after: { src: '../caseStudies/obviously/after.png', alt: 'sample page after the redesign' }
		},
		{
			before: {
				src: '../caseStudies/obviously/obv_uiAudit.png',
				alt: 'audit of buttons in the old system'
			},
			after: { src: '../caseStudies/obviously/obv3a.png', alt: 'styleguide of components' }
		}
	];
</script>

<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<h2>Obviously #1</h2>
		<h3>Building a Design Foundation</h3>
		<p>
			Starting in 2020, I was Obviously’s first UX designer hire. The nine-year startup focused on
			influencer marketing campaigns and supporting its custom SASS platform to facilitate these
			campaigns. The company executes campaigns by finding influencers, managing the content
			creation process, and collecting analytics on the collective performance of those social media
			posts. Before I joined, they relied on the Engineering team and occasional freelancers to
			fulfill design needs.
		</p>
		<ImageSlider {imagesBeforeAfter} index="0" />
		<h2>The Need for Foundation Design</h2>
		<h3>No Consistency</h3>

		<p>
			Years of engineer-led design decisions led to hundreds of inconsistencies on the component,
			page, and architecture levels. Also, half-hearted do-overs of the CSS meant it wasn’t an easy
			fix.
		</p>

		<p>To tackle this, I initiated a series of phases and activities.</p>

		<ul>
			<li>A complete UI audit of every page.</li>
			<li>
				Interviews with the Director of Engineering to get the history the UI and CSS front-end
				stack.
			</li>
			<li>
				Building a brand new Design System with new typography, colors, layouts, and components
				based the existing Bootstrap framework.
			</li>
			<li>Working with Product on where we could implement this safely.</li>
			<li>
				Overhauling an isolated part of the system to completely redo the CSS architecture under the
				new Design System
			</li>
			<li>
				Progressively enhancing sub-system by sub-system until the transformation was complete.
			</li>
		</ul>

		<div>
			<ImageSlider {imagesBeforeAfter} index="1" />
		</div>

		<h2>Workshops & Design Thinking</h2>

		<h3>Virtual & In-Person</h3>
		<p>
			As the solo designer, I facilitated over 20 workshops. Not just for design but for executive
			leadership decision making, internal processes, and restructuring departmental teams.
		</p>
		<p>
			I would leverage Miro (virtual white boarding) since we were a remote-first company. But would
			get to use traditional post-it notes and sharpies for when we met in-person.
		</p>
		<p>
			Outcomes included quarterly roadmaps, new service workflows, and new products for the sales
			team to promote. Sometimes it would be as simple as getting alignment and consensus around a
			business problem.
		</p>

		<img src="../caseStudies/obviously/IMG_2624.png" alt="colleagues in workshop" />

		<h2>Complete Rework of Design Research</h2>

		<p>
			Part of the rebuilding process was to refresh everything that the company thought it knew
			about its users and customers. This involved dozens and dozens of interviews with internal
			users, influencers and clients.
		</p>
		<p>Moving forward, we would institute:</p>

		<ul>
			<li>User Personas</li>
			<li>Buyer Personas</li>
			<li>Prototype-based testing</li>
			<li>Design Sprints</li>
		</ul>

		<p>
			<img
				src="../caseStudies/obviously/journeymap.png"
				alt="user journey of internal CS team members"
			/>
		</p>
		<h2>Recent Projects with Obviously</h2>

		<ol>
			<li>
				<h3>Efficient Workflows with AI & Automation</h3>
				<p>
					In efforts to scale up to ever bigger campaigns, I worked with Product to do a complete
					audit of the entire execution process from pre-sales to campaign reporting. This led to
					assessing over a dozen tools and vendor calls. Experimenting with tools and blending it
					with our data, I was able to spin up a rapid brainstorming process for campaign concepts.
					The main project would be to iterate our software platform for better notifications and
					automated reporting to reduce the amount of micro-management our teams were doing.
				</p>
			</li>

			<li>
				<h3>Design Ops</h3>
				<p>
					Working with Engineering, we instituted several changes to the Design-Engineering hand-off
					to include looms and sample front-end code. For every JIRA ticketing involving designs, I
					inserted a Design QA step to make sure every design was implemented correctly and was
					mobile-responsive. Separate tickets would be filed as low or high priority to not block
					the overall sprint, but still catch the errors. As overall internal visual design needs
					grew with client-facing materials, I built up a JIRA-based design request flow to manage
					the demands.
				</p>
			</li>

			<li>
				<h3>Marketing for Us</h3>
				<p>
					Historically, Obviously only leveraged PR interviews and paid SEO for marketing. Later on,
					when UX and software efforts were under control, an internal team was ramped up to handle
					more extensive marketing efforts. I updated our buyer personas, oversaw our team’s
					analysis on our corporate site and leads generation, and helped organize a marketing plan
					based on specific products we sold as opposed.
				</p>
			</li>

			<li>
				<h3>Acquisition Transition</h3>
				<p>
					While I was at Obviously, we were acquired by a global advertising conglomerate. This
					transition required a rapid expansion of our visual language to account for our new
					partnership and ways of working. In addition, working out how we interfaced with our
					parent companies’ clients via their various forms of relationships.
				</p>
			</li>
		</ol>
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<div class="imageGrid">
	<h4 id="headline1" class="headline">Project Details of Design Process</h4>

	<img
		id="img1"
		src="../caseStudies/obviously/obv1.png"
		alt="timeline of design system and major redesign"
	/>
	<img id="img2" src="../caseStudies/obviously/obv2.png" alt="design thinking process mapping" />

	<img
		id="img9"
		src="../caseStudies/obviously/journeymap.png"
		alt="user journey of internal CS team members"
	/>

	<h4 id="headline2" class="headline">Styleguide</h4>
	<img id="img3" src="../caseStudies/obviously/obv3a.png" alt="styleguide of components" />
	<img id="img4" src="../caseStudies/obviously/obv3b.png" alt="styleguide of colors" />

	<h4 id="headline3" class="headline">Redesigned Pages</h4>
	<img id="img5" src="../caseStudies/obviously/obv4.png" alt="redesigned pages" />

	<img
		id="img6"
		src="../caseStudies/obviously/obv7.png"
		alt="figma file of all the redesigned screens"
	/>

	<h4 id="headline4" class="headline">Presentation of Project</h4>
	<img id="img7" src="../caseStudies/obviously/obv5.png" alt="presenting to executive team" />
	<img
		id="img8"
		src="../caseStudies/obviously/obv6.png"
		alt="another angle of presenting to executive team "
	/>
</div>

<!-- <img src="../caseStudies/obviously/obv8.jpg" alt="" /> -->

<!-- imageGrid -->
<style>
	img {
		width: 100%;
	}

	@media (min-width: 600px) {
		#headline1 {
			grid-column: col-start 1 / span 3;
			grid-row: 1;
		}
		#img1 {
			grid-column: col-start 4 / span 9;
			grid-row: 1;
		}
		#img2 {
			grid-column: col-start 4 / span 9;
			grid-row: 2;
		}

		#img9 {
			grid-column: col-start 1 / span 12;
			grid-row: 4;
		}

		#headline2 {
			grid-column: col-start 1 / span 12;
			grid-row: 4;
		}

		#img3 {
			grid-column: col-start 1 / span 6;
			grid-row: 5;
		}

		#img4 {
			grid-column: col-start 7 / span 6;
			grid-row: 5;
		}

		#headline3 {
			grid-column: col-start 10 / span 2;
			grid-row: 6;
		}
		#img5 {
			grid-column: col-start 1 / span 9;
			grid-row: 6;
		}
		#img6 {
			grid-column: col-start 1 / span 9;
			grid-row: 7;
		}

		#headline4 {
			grid-column: col-start 1 / span 6;
			grid-row: 8;
			text-align: right;
		}

		#img7 {
			grid-column: col-start 7 / span 6;
			grid-row: 8 / span 3;
		}

		#img8 {
			grid-column: col-start 1 / span 6;
			grid-row: 9;
		}
	}
</style>
