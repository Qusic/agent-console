import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://qusic.github.io',
	base: '/agent-console',
	integrations: [
		starlight({
			title: 'Agent Console',
			favicon: '/favicon.png',
			sidebar: [
				{
					label: 'Docs',
					items: [{ autogenerate: { directory: 'docs' } }],
				},
				'privacy',
			],
			social: [
				{
					icon: 'comment',
					label: 'Feedback',
					href: 'https://github.com/Qusic/agent-console/discussions',
				},
				{
					icon: 'apple',
					label: 'App Store',
					href: 'https://apps.apple.com/app/id6786123190',
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://qusic.github.io/agent-console/og.png' },
				},
			],
		}),
	],
});
