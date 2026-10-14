export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-[#f5f5f7]">
      <style>{`
        @supports (animation-timeline: view()) {
          .reveal {
            animation: reveal linear both;
            animation-timeline: view();
            animation-range: entry 0% cover 40%;
          }
        }
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(4rem);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
      <main className="flex w-full flex-col">
        <header className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl font-semibold tracking-tight sm:text-8xl">
            dark-apple
          </h1>
          <p className="mt-6 max-w-xl text-xl text-[#a1a1a6] sm:text-2xl">
            Placeholder copy. Replace before launch.
          </p>
        </header>
        <section className="reveal flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Placeholder heading 1
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[#a1a1a6] sm:text-xl">
            Placeholder paragraph. Replace before launch.
          </p>
        </section>
        <section className="reveal flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Placeholder heading 2
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[#a1a1a6] sm:text-xl">
            Placeholder paragraph. Replace before launch.
          </p>
        </section>
        <section className="reveal flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Placeholder heading 3
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[#a1a1a6] sm:text-xl">
            Placeholder paragraph. Replace before launch.
          </p>
        </section>
      </main>
    </div>
  );
}
