# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

Vercel Deployment
		"@sveltejs/adapter-static": "^3.0.1",
        For static build to folder "build"


https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores#making_stores_reactive_with_the_reactive_store_syntax

https://stackoverflow.com/questions/75056422/how-to-use-vitepreprocess-with-global-scss-mixins-in-sveltekit

https://fontawesome.com

https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player

https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video

audio % for f in ./*.mp3; do ffmpeg -i "$f" -c:a libvorbis -q:a 4 "${f/%mp3/ogg}"; done
ffmpeg -i 001_background-history.mp3 -c:a aac -b:a 192k 001_background-history.m4a

https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion

https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform

