// pages/index.js

import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>My Tailwind Next.js Home Page</title>
        <meta name="description" content="Home page of my Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-extrabold text-blue-600">
          Welcome to <a href="https://nextjs.org" className="text-blue-500">Next.js!</a>
        </h1>

        <p className="mt-4 text-xl text-gray-700">
          Get started by editing <code className="font-mono bg-gray-200 p-2 rounded-lg">pages/index.js</code>
        </p>

        <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl">
          <a href="https://nextjs.org/docs" className="card hover:shadow-xl transform hover:scale-105 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Documentation &rarr;</h3>
            <p className="mt-2 text-gray-600">Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card hover:shadow-xl transform hover:scale-105 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Learn &rarr;</h3>
            <p className="mt-2 text-gray-600">Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className="card hover:shadow-xl transform hover:scale-105 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Examples &rarr;</h3>
            <p className="mt-2 text-gray-600">Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new" className="card hover:shadow-xl transform hover:scale-105 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Deploy &rarr;</h3>
            <p className="mt-2 text-gray-600">Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className="w-full py-6 mt-20 bg-gray-800 text-center">
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-white">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="inline-block h-6 ml-1" />
        </a>
      </footer>
    </div>
  )
}
