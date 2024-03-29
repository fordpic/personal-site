export const projectList = [
	{
		title: 'CryptoWatch',
		tech: [
			'TypeScript',
			'NextJS',
			'Tailwind',
			'Recharts',
			'AWS Amplify',
			'SWR',
		],
		summary:
			'CryptoWatch is a dashboard for crypto enthusiasts to check out the most important metrics for all of the most  popular tokens. Includes token-specific data over multiple timeframes and a price chart for each asset, powered by Recharts & the CoinGecko API.',
		link: 'https://github.com/fordpic/crypto-dashboard',
	},
	{
		title: 'Contact Grabber',
		tech: ['Python', 'AWS Amplify', 'AWS Lambda', 'BeautifulSoup'],
		summary:
			'This was a project worked on by myself and a fellow cohort member when graduating from our immersive bootcamp. It is a web scraper built with Python & BeautifulSoup that scrapes data from Indeed based on inputs given from the user. The scraper would execute via our AWS Lambda function and scrape, parse and feed the information to our frontend. I learned a lot while building this project; all summarized learnings can be found in the ReadMe file.',
		link: 'https://github.com/contact-grabber/grabber-lambda',
	},
	{
		title: 'fSocial',
		tech: [
			'NextJS',
			'TypeScript',
			'Express',
			'PostgreSQL',
			'Prisma',
			'Postman',
			'Vercel',
			'ElephantSQL',
			'JWT',
		],
		summary:
			'fSocial is a full stack social app that allows friends and family to interact with each other. Users must first register and sign in before they can do much, but once logged in they can view, create and comment on as much content as they desire. The frontend was developed with NextJS, while the backend server was developed with Express and utilizes Prisma to query the Postgres database hosted on ElephantSQL. Both the frontend and backend repositories are available to view on Github.',
		link: 'https://github.com/fordpic/fSocial-frontend',
	},
	{
		title: 'The Forps NFT Collection',
		tech: ['NextJS', 'Solidity', 'Hardhat', 'Ethers', 'Quicknode', 'Vercel'],
		summary:
			'The Forps NFT Collection is a unique collection of NFTs that are (literally) my face. After working in Web3 for a while, I wanted to jump back into Solidity and all of its tooling to build something simple yet neat. To mint a Forps NFT, users must first connect their wallet to the Goerli network and get their wallet address whitelisted on the whitelist site (can be found in the Github repo). Then, they simply must visit the Forps collection site, connect their whitelisted wallet, and select Mint to get their own personal, digital version of....me :)',
		link: 'https://github.com/fordpic/forp-collection',
	},
	{
		title: 'deepDive',
		tech: ['React', 'Express', 'MongoDB', 'Mongoose', 'Postman', 'Heroku'],
		summary:
			'This was a project that I worked on with fellow cohorts in my immersive bootcamp. It is a full stack music blog app, where users can sign up, login, upload their favorite albums and have a healthy discourse around them, all in once place! Both the frontend and backend repositories are available to view on Github.',
		link: 'https://github.com/team-caffeine-dreams/backend',
	},
	{
		title: 'ETH Unit Calculator',
		tech: ['NextJS', 'TypeScript', 'Tailwind', 'AWS Amplify', 'React-Feather'],
		summary:
			'This is a calculator for converting between the various units of Ethereum. Simply type the amount of the unit you would like converted into the appropriate input box, and the site will automatically convert the amount for you for every single unit possible.',
		link: 'https://github.com/fordpic/eth-calc',
	},
];
