<script>
	import Toggle from '../components/Toggle.svelte';
	import { languageConfig } from '../../stores.js';

	let jobDescriptionVerboseLevel = $languageConfig[1]['value'];

	// let companyDescription = true;
	// let kpis = true;
</script>

<div id="introWork" class="introSectionPadding">
	<div class="header">
		<h3>Recent Work History</h3>
		<p>
			<a
				href="https://drive.google.com/file/d/1mV6YmcOtbtGZBgOERzwr5SmDBpGyNkNU/view?usp=sharing"
				target="_blank">Resume/CV</a
			>
		</p>
	</div>
	<!-- header -->

	<div class="jobControls">
		<!-- <input type="checkbox" id="controlKpis" name="controlKpis" bind:checked={companyDescription} />
		<label for="controlKpis">Describe the Organization</label><br /> -->
		<!-- <input type="checkbox" id="controlKpis" name="controlKpis" bind:checked={kpis} />
		<label for="controlKpis">Show KPIs</label><br /> -->

		<Toggle />
	</div>

	<div class="jobWrapper">
		<h6>Fannie Mae</h6>
		<h4 class="workTitle">Lead Associate - UX</h4>

		<span class="workDate">April 2024 - </span>{#key $languageConfig[1]['value']}
			{#if $languageConfig[1]['value'] == 2}
				<p>
					Fannie Mae is a prominent financial institution that specializes in the mortgage loan
					industry. With a rich history dating back to 1938, Fannie Mae plays a critical role in the
					housing market by providing liquidity to mortgage lenders. Its mission is to ensure that
					Americans have access to affordable housing by facilitating the flow of funds from
					investors to borrowers. During my tenure at Fannie Mae, I had the privilege of working
					within the Pricing software teams within Capital Markets. As a UX specialist, I focused on
					enhancing the user experience for both internal stakeholders and external clients. I
					collaborated closely with designers, developers, and product managers to create intuitive
					interfaces that streamlined complex processes related to mortgage pricing and risk
					assessment.
				</p>

				<p>
					Fannie Mae recognized the need for agility and innovation to stay competitive in the
					ever-evolving financial landscape. To achieve this, the organization aimed to transition
					from traditional project management methodologies (such as SAFE and Agile) to a more
					dynamic and responsive approach. Smaller, cross-functional squads were envisioned as the
					key to driving impactful changes swiftly. As an organizational change coach, I played a
					pivotal role in this transformation. I worked closely with teams across Product, Design,
					and Technology to introduce new ceremonies and processes. These changes were designed to
					foster collaboration, improve communication, and empower teams to make data-driven
					decisions. By encouraging experimentation and continuous learning, we aimed to break down
					silos and create a culture of adaptability. The shift toward smaller squads and a more
					agile mindset yielded positive results. Teams became more responsive to market dynamics,
					and innovation flourished. Fannie Mae's commitment to providing affordable housing
					remained unwavering, and I am proud to have contributed to this mission-driven
					organization's journey. Looking ahead, I anticipate further advancements as Fannie Mae
					continues to evolve and adapt to meet the needs of borrowers and investors alike.
				</p>
			{:else if $languageConfig[1]['value'] == 1}
				<p>
					Fannie Mae is a financial institution specializing in the mortgage loan industry. I worked
					within the Pricing software teams within Capital Markets as both a UX specialist and
					organizational change coach. Fannie Mae wanted smaller squads that would create more
					impact with faster pacing. I coached on new ceremonies and processes across Product,
					Design and Tech to move away from traditional SAFE and Agile.
				</p>
			{:else}
				<p>
					I worked on UX, UI and research for Pricing software within Fannie Mae's Capital Markets
					team handling mortgages.
				</p>
			{/if}
		{/key}
	</div>
	<!-- jobWrapper -->

	<div class="jobWrapper">
		<h6>Obviously</h6>
		<h4 class="workTitle">Director of Design (was Lead Designer)</h4>

		<span class="workDate">April 2021 - February 2024</span>{#key $languageConfig[1]['value']}
			{#if $languageConfig[1]['value'] == 2}
				<p>
					Joining Obviously as a Lead Designer marked the beginning of an extraordinary journey in a
					rapidly evolving digital landscape. At the time, this influencer and social media agency,
					later acquired by VMLY&R of WPP in 2022, was a remote-only startup. The company stood at a
					pivotal point, with no established design team or consistent design practices in place.
					Embracing this challenge, I embarked on a transformative mission to reshape the
					organization's approach to product and engineering processes.
				</p>
				<p>
					My primary goal was to pivot these processes to be research and design-led, a strategy
					that would permeate through every stage from discovery to the launch of nearly every
					feature. This shift required not just a change in processes but a cultural shift within
					the organization. By initiating workshops and leveraging virtual collaboration tools, I
					guided diverse teams - from operations to marketing, and up to the executive level - on
					roadmap building and general decision-making across the organization. This inclusive
					approach ensured a cohesive and unified direction in all our endeavors.
				</p>
				<p>
					A significant achievement during my tenure was the implementation of a JIRA-based visual
					QA system. This system streamlined our collaboration with the Engineering team, ensuring
					that all designs were meticulously verified and aligned with our high standards. The
					impact of this system was immediate and profound, enhancing efficiency and reducing
					turnaround times for design approvals.
				</p>
				<p>
					Understanding the vital role of internal marketing in a company's growth, I established a
					request-based workflow specifically for all internal marketing design requests. This
					workflow was tailored to meet the dynamic needs of my team, ensuring a systematic and
					organized approach to handling these essential tasks. This initiative not only optimized
					our internal processes but also significantly improved the quality and consistency of our
					marketing materials.
				</p>
				<p>
					In conclusion, my journey at Obviously was marked by a series of strategic implementations
					and leadership initiatives that profoundly transformed the organization's design and
					operational landscape. From establishing foundational design practices to enhancing
					cross-functional collaboration, my role as a Lead Designer was instrumental in steering
					the company towards a design-centric future. The legacy of these changes continues to
					resonate within the organization, underscoring the lasting impact of thoughtfully executed
					design leadership.
				</p>
			{:else if $languageConfig[1]['value'] == 1}
				<p>
					Obviously is a social media agency (acquired by VMLY&R of WPP in 2022.) I built up their
					design practice end-to-end as their first design hire. From a leadership POV, I mentored
					PMs and designers and implemented new company-wide processes for efficiency and scaling.
					Individual contributions include qualitative research, workshop facilitation, user journey
					mapping, mock-ups, high-fidelity Figma designs, and usability testing.
				</p>
			{:else}
				<p>
					As the first full-time designer at the social media agency startup, I transformed the
					Product and Engineering processes to be design and user-centric. I mentored the existing
					Product team and conducted workshops for all teams from Executive Leadership to Ops to
					Client Success.
				</p>
			{/if}
		{/key}

		{#if $languageConfig[1]['value'] > 0}
			<ul class="jobKPIList">
				<li class="jobKPI">
					Overhauled both of their user-facing portals to streamline the content creation process.
					CSAT up 10% with redesign.
				</li>
				<li class="jobKPI">
					Internal UX re-architecture saved 120+ hours (36% reduction) of time spent for the team.
				</li>
				<li class="jobKPI">
					Designed a new configuration process that scaled up campaigns 100x without having to
					rebuild the base technology.
				</li>
				<li class="jobKPI">Led the effort to build their first Design System (in Figma.)</li>
				<li class="jobKPI">
					Conducted over 30 user interviews and mentored juniors in their research efforts.
				</li>
				<li class="jobKPI">Planned and facilitated over 15 workshops (virtual and in-person.)</li>
				<li class="jobKPI">Implemented Heap Analytics to track workflow patterns.</li>
				<li class="jobKPI">Created wireframes and prototypes for over 60 features.</li>
				<li class="jobKPI">4.4% increased sign-ups after form redesign (32.7% to 37.1%).</li>
			</ul>
		{/if}
	</div>
	<!-- jobWrapper -->
	<div class="jobWrapper">
		<h6>Designit</h6>
		<h4 class="workTitle">Senior Design Technologist</h4>

		<span class="workDate">June 2018 - March 2021</span>{#key $languageConfig[1]['value']}
			{#if $languageConfig[1]['value'] == 2}
				<p>
					Embarking on a dynamic journey with Designit, a prestigious global design consultancy, I
					found myself at the crossroads of innovation and creativity. Esteemed for its association
					with a roster of Fortune 500 companies, Designit presented a vibrant landscape where my
					skills in facilitating Design Thinking processes and workshops were put to the test. My
					role was pivotal in navigating the complex interplay of design and technology, a crucial
					aspect in addressing the nuanced needs of prominent clients like MasterCard, FedEx, PNC
					Bank, and GSK.
				</p>
				<p>
					In this arena, the challenges were diverse and invigorating. A notable aspect of my
					contributions involved aiding these industry giants in their quest to evolve and adapt to
					modern realities. This often meant devising strategies for transitioning legacy systems,
					some as old as 40 years, into cutting-edge cloud solutions. The key was not just in the
					technological shift but also in providing insightful perspectives on retraining and
					development, ensuring a smooth transition for all stakeholders involved.
				</p>
				<p>
					The scope of my work spanned a broad spectrum, where I was tasked with delivering a
					variety of artifacts ranging from intricate front-end code to comprehensive journey maps
					and detailed user personas. Each project was a unique blend of art and science, requiring
					a deep understanding of both the aesthetic and functional aspects of design.
				</p>
				<p>
					My tenure at Designit was more than just a job; it was a journey of professional growth
					and creative exploration. It was an opportunity to leave a mark on some of the most
					significant technological and design advancements in contemporary business, contributing
					to solutions that shaped the future of how businesses interact with technology and design.
				</p>
			{:else if $languageConfig[1]['value'] == 1}
				<p>
					Designit is a global design consultancy with a roster of Fortune 500 companies. My
					contributions revolved around facilitating Design Thinking processes and workshops and
					providing technical expertise and deliverables. Key clients were MasterCard, FedEx, PNC
					Bank, and GSK. Often they need a blend of design & technology to solve hard problems like
					transitioning a 40-year-old platform to modern cloud solutions with a POV on retraining.
					Artifacts and deliverables ranged from front-end code to journey maps to user personas.
				</p>
			{:else}
				<p>
					As a Creative Technologist at the Designit consultancy, I facilitated Design Thinking
					workshops, executed UX and architecture, and contributed front-end code to clients.
				</p>
			{/if}
		{/key}

		{#if $languageConfig[1]['value'] > 0}
			<ul class="jobKPIList">
				<li class="jobKPI">
					Helping PNC Bank with their high-wealth customer segment, they extended my contract 3x to
					continue my services.
				</li>
				<li class="jobKPI">
					Learned AngularJS to accelerate live demos for GSK digitization of science papers.
				</li>
				<li class="jobKPI">
					Researched FedEx’s logistics model to map out the mainframe transition to the cloud.
				</li>
			</ul>
		{/if}
	</div>
	<!-- jobWrapper -->

	<div class="jobWrapper">
		<h6>Cornerstone OnDemand</h6>
		<h4 class="workTitle">Senior Product Designer</h4>

		<span class="workDate">November 2015 - January 2018</span>

		{#key $languageConfig[1]['value']}
			{#if $languageConfig[1]['value'] == 2}
				<p>
					At Cornerstone OnDemand, a leader in cloud-based SaaS HR enterprise software, I embarked
					on an illustrious journey, navigating the multifaceted realms of payroll, learning modules
					(LMS), performance management, and recruiting. As the custodian of the Learning Management
					System (LMS), I was at the helm of steering the research, UI, and UX efforts, spearheading
					initiatives that would redefine the user experience.
				</p>
				<p>
					My responsibilities, initially confined to the LMS, gradually expanded to encompass other
					significant product lines, including Reporting and Performance. This expansion was not
					just a testament to my evolving role but also to the trust and confidence placed in my
					capabilities.
				</p>
				<p>
					A pivotal cultural shift occurred during my tenure, where the focus of research and
					ideation transitioned from the Product team to the Design team. This strategic move
					underscored the increasing importance of design in the product development process. I
					played a central role in facilitating this shift, advocating for research protocols and
					activities that emphasized user-centricity over mere business considerations.
				</p>
				<p>
					This paradigm shift towards a more design-focused approach was not just a change in
					process but a revolution in perspective. It marked the dawn of an era where design was no
					longer an afterthought but a driving force in product development, ensuring that user
					needs and experiences were at the forefront of every decision.
				</p>
				<p>
					In summary, my journey at Cornerstone OnDemand was marked by significant contributions
					that went beyond traditional design roles. It was an expedition that saw the
					transformation of product lines and the redefinition of organizational culture, with
					design and user-centricity taking center stage in the narrative of innovation and
					enterprise solutions.
				</p>
			{:else if $languageConfig[1]['value'] == 1}
				<p>
					Cornerstone OnDemand is a cloud-based SASS suite of HR (Human Resources) enterprise
					software with functionality from payroll, learning modules (LMS), performance management,
					and recruiting. My main product was the LMS owning the research, UI and UX efforts.
					Eventually, my responsibilities expanded into other product lines such as Reporting and
					Performance. A culture shift during my time was moving more of the research and ideation
					onto the Design team versus the Product team. I helped facilitate the research protocols
					and activities to be more user-centric than just business considerations.
				</p>
			{:else}
				<p>
					At Cornerstone OnDemand, there is a suite of SASS-based HR applications. During my time
					there, I was overall responsible for all design functions for their LMS application from
					research to UI to UX.
				</p>
			{/if}
		{/key}

		{#if $languageConfig[1]['value'] > 0}
			<ul class="jobKPIList">
				<li class="jobKPI">
					Introduced end-to-end Design Thinking to redesign a 16-year old process with no loss in
					functionality and a vision of phased delivery from MVP to feature parity.
				</li>
			</ul>
		{/if}
	</div>
	<!-- jobWrapper -->
</div>

<!-- introWork -->

<style>
	#introWork .header p {
		margin-top: 0;
	}

	.jobWrapper {
		margin-top: 2rem;
	}

	h3,
	h4 {
		margin-top: 0;
	}

	h4 {
		margin-bottom: 0.25rem;
	}

	@media (min-width: 600px) {
		#introWork .header {
			align-items: center;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
