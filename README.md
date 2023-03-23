# Next.js OpenAI Starter App

This is a starter kit for integrating [OpenAI's API](https://platform.openai.com/docs/api-reference) into a [Next.js](https://nextjs.org/) application. It is crafted with minimal styling and basic API integration so you can strip it and bring your own libraries to make it your own. Feel free to fork and create something amazing!


## Getting Started
First, fork the repo to your dev environment and install the packages:
```bash
npm install
#or
yarn
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

If you use something besides `yarn`, be sure to delete any other package manager lockfiles. 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Important!
Make sure that update the `OPENAI_API_KEY=yourApiKey` in the `.env.example` file, and then change the file name to `.env.local`. You can get an API key by [creating an account with OpenAI](https://platform.openai.com/signup) and then navigating [here](https://platform.openai.com/account/api-keys).

## OpenAI API Endpoint

OpenAI's [API route](https://nextjs.org/docs/api-routes/introduction) is located at `src/pages/api/openai.js`.



The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js and OpenAI, take a look at the following resources:
### Next.js
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
### OpenAI
- [OpenAI Documentation](https://platform.openai.com/) – learn abou OpenAI's features and API, as well as how to use them. 
- [OpenAI Examples](https://platform.openai.com/examples) – see what others have already created with OpenAI.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
