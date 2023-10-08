import { maliFont } from '@/constants/fonts';

export default function Home() {
  return (
    <main className="relative">
      <p
        className={`text-5xl text-center sm:text-4xl ${maliFont.className}`}
      >
        In Progress...
      </p>
    </main>
  );
}
