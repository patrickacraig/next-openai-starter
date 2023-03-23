import Head from 'next/head'
// OpenAI Component 
import OpenAIComponent from '../components/OpenAIComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next OpenAI Starter App</title>
        <meta name="description" content="A Next.js OpenAI starter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next.js OpenAI Starter App</h1>
        <p>This is a starter kit for integrating <a target="_blank" href="https://platform.openai.com/docs/api-reference">OpenAI's API</a> into a <a target="_blank" href="https://nextjs.org">Next.js</a> project. It is crafted with minimal styling and basic API integration so you can strip it and bring your own libraries to make it your own. Feel free to fork and create something amazing!</p>
        <OpenAIComponent />
      </main>
    </>
  )
}
