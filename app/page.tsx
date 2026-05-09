import Image from "next/image";

const streamingUrl = "https://stream.noobz.space";
const telegramUrl = "https://t.me/noobzchannel";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-10">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="Noobz Streaming"
          width={96}
          height={96}
          priority
          className="mb-8 h-20 w-20 rounded-2xl shadow-2xl shadow-black/35 sm:h-24 sm:w-24"
        />

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
          Noobz Space
        </p>
        <h1 className="text-5xl font-bold tracking-normal text-white sm:text-6xl">
          Noobz Streaming
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
          Nonton Film dan Series Bahasa Indonesia
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={streamingUrl}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-amber-400 px-6 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Buka Streaming
          </a>
          <a
            href={telegramUrl}
            className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-white/8 px-6 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            Telegram
          </a>
        </div>
      </section>
    </main>
  );
}
