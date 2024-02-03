<script>
</script>

<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<h2>AI Yelp + Maps</h2>
		<h3>Context</h3>
		<p>
			Using ChatGPT for a few months now, I found several great uses that substitute the need for a
			search engine. But the biggest limitation is the lack of my data inside those searches.
			There's a rush of startups and companies looking to fill that gap that promises to ingest
			spreadsheets, documents, and internal wikis.
		</p>
		<p>
			But I wanted to experiment with a specific scenario: help me find a restaurant that's
			contextually relevant to the moment but also prioritize the things I saved before. There's a
			huge difference in what I would want depending on if it was a work lunch, a date night, or a 3
			am craving.
		</p>
		<p>
			Enter RAGs (or Retrieval-Augmented Generation) principles. At its most basic, you're just
			stuffing the chat prompt to the AI bot with your preferences beforehand. But there's a bit of
			prep beforehand to stuff it with the right data.
		</p>

		<p>
			Huge lift by referencing Learn By Building AI's <a
				href="https://learnbybuilding.ai/tutorials/rag-from-scratch"
				target="_blank">article</a
			>.
		</p>
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<img
	src="../techStudies/aiMaps3.png"
	alt="user flow diagrams of google searching vs my ai custom bot"
/>
<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<small>Diagram flows of what I'm thinking</small>
		<div class="meta">
			<div class="main">
				<h5>Tech Stack</h5>
				<ul>
					<li>Ubuntu & ROCm (I have a AMD GPU)</li>
					<li>Ollama (Llama2 model)</li>
					<li>Svelte</li>
					<li>Google Takeout & Maps</li>
					<li>Yelp Fusion API</li>
					<li>NPM: wuzzy</li>
					<li>NPM: svelte-maplibre</li>
				</ul>
			</div>
		</div>
		<!-- meta -->

		<h3>Phase 1: Getting the Data</h3>

		<p>
			For this proof-of-concept, I cached all the data I needed instead of making live API calls to
			Google and Yelp. So I downloaded a cache of my Google Maps data. I then ran a handful of saved
			locations against the Yelp Fusion database. I blended their data into my existing list namely
			price and recent reviews.
		</p>

		<h3>Phase 2: Prepping the Machine</h3>

		<p>
			My PC is an AMD-build which is great for gaming but it's been lacking for AI testing. The
			drivers have just caught up for my GPU card, so I set up ROCm in Ubuntu so the AI models could
			leverage my GPU instead of my CPU.
		</p>
		<p>
			Ollama is a great piece of software. It runs in the background as its own server so I can
			treat it like an API endpoint within my web app. I can even track the calls in the terminal
			itself.
		</p>
		<p>
			I'm still testing Svelte as a framework for building websites. I still really like its easy
			syntax and layout. So I ran that app on a separate port and it could talk to Ollama all on one
			machine!
		</p>
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<div class="wrapperMaxWidth wrapperCasestudy wrapperFlex">
	<div class="containerMaxWidth containerFlex">
		<div class="text">
			<h3>Phase 3: Setting Up the RAG</h3>

			<p>
				The first novel challenge was to actually look through my saved list for relevancy to the
				user's prompt before even sending it to the AI bot. Stuffing the prompt with 100s of entries
				didn't seem great.
			</p>
			<p>
				What I found was a set of formulas that calculate the "distance" between any two words or
				phrases. In the way of how similar "cake" is to "cat" over "strawberry", it would give back
				a confidence number of how different the words are.
			</p>
			<p>
				To get a sense of the location, I smashed the Yelp reviews together with the price and name
				of the business into a test string. I would then compare the user's prompt against that test
				string. If many words overlapped, it would get a higher score. This sorted the overall list
				of my saved places.
			</p>

			<p>
				You can see in the screenshot that with the words "ice cream creamery," "Ample Hills
				Creamery" would rise to the top with a composite score of 9.77. But I would discover the
				crudeness of this as many of the "Hong Kong Supermarket" reviews used the words "came" or
				"nice." This would be close enough for the "Jaro-Winkler" distance formula and grant it
				points up to 7.94.
			</p>

			<pre>function compareWords(text1, text2, id) &#123;
	text1 &#x3D; text1.toLowerCase();
	text2 &#x3D; text2.toLowerCase();

	const testArray &#x3D; text1.split(&#39; &#39;);
	const strArray &#x3D; text2.split(&#39; &#39;);

	let jaro &#x3D; 0;

	for (var i &#x3D; 0; i &lt; testArray.length; i++) &#123;
		for (var j &#x3D; 0; j &lt; strArray.length; j++) &#123;
			const value &#x3D;
			testArray[i].length &gt; 2 &amp;&amp; strArray[j].length &gt; 2
			? wuzzy.jarowinkler(testArray[i], strArray[j])
			: 0;

			jaro +&#x3D; value &gt; 0.7 ? value : 0;
		&#125;
	&#125;

	return jaro;
&#125;</pre>
		</div>
		<div class="img">
			<img src="../techStudies/aiMaps2.png" alt="raw debug output of the test" />
		</div>
	</div>
	<!-- containerMaxWidth flex -->
</div>
<!-- wrapperMaxWidth -->
<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<h3>Phase 4: Build the Prompt</h3>
		<p>
			Oddly straightforward after figuring out the string similarity between my saved places and the
			user prompt. Taking the top three closest locations, you can stuff that into the chat message
			with the user's prompt. The bot is very amendable in defining its personality and chat style.
		</p>
		<pre>prompt =
'You are a bot that makes recommendations for places to go. 
You answer in very short sentences.\n' +
'This is a list of related and possible choices:\n' +
items +
'\nThe user input is: ' +
user_input +
'\nCompile a recommendation to the user based on the possible 
choices and the user input. \n' +
'Add a few more extra choices beyond the possible choices that are 
still related to the user input ' +
'and close to the possible choices in geographic proximity.';</pre>
		<h3>Final Phase: Render the Results</h3>

		<p>
			From there, you can send that prompt to Ollama's server to get back a response. Then
			reverse-engineer the recommendations to populate the map with markers.
		</p>
		<p>
			A fascinating quirk is how the model will try to rationalize locations that weren't very
			relevant but because I told it to prioritize it:
		</p>

		<ol>
			<li>
				"Chinatown Supermarket of Manhattan at 109 E Broadway, New York, NY 10002. While they don't
				specialize in ice cream, they do have a variety of Asian snacks and drinks that might
				interest you."
			</li>
			<li>
				"Los Tacos No.1 at 229 W 43rd St, New York, NY 10036. They offer tasty Mexican-style food,
				including tacos and burritos, but they don't have ice cream on the menu."
			</li>
		</ol>

		<p>
			There are plenty of smoke and mirrors for this proof-of-concept, but some follow-up
			experiments come to mind:
		</p>

		<ol>
			<li>Accessing an AI model from the cloud instead of my local machine.</li>
			<li>Pulling fresh lists of my saved places from Google Maps.</li>
			<li>Pulling articles from food websites I trust to further augment the starting list.</li>
			<li>
				Moving to a true chat model, this concept just sends one prompt to the AI model. This would
				open up the true loop of refining the results.
			</li>
			<li>Polling Yelp or Google Maps in real-time to gather price points and hours open.</li>
		</ol>
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth --> <img src="../techStudies/aiMaps1.png" alt="mvp of chat and map" />

<style>
	img {
		width: 100%;
	}

	small {
		margin-bottom: 2rem;
	}

	pre {
		background-color: var(--gray0);
		font-family: monospace;
		font-size: 0.75rem;
		margin-bottom: 1rem;
		overflow: hidden;
		padding: 1rem;
	}

	li:nth-child(n + 2) {
		margin-top: 0;
	}

	@media (min-width: 600px) {
		.containerFlex {
			background-color: black;
			color: white;
			display: flex;
			max-width: none !important;
			padding: 1rem;
		}

		.containerFlex .text {
			flex: 1;
			padding: 0 2rem;
			max-width: 38rem;
		}
		.containerFlex .img {
			flex: 1;
		}

		.containerFlex pre {
			color: black;
		}
	}
</style>
