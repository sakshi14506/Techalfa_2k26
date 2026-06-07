import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Techalfa"
            width={50}
            height={50}
            className="drop-shadow-[0_0_20px_rgba(139,92,246,0.8)]"
          />

          <span className="font-bold text-xl">
            TECHALFA
          </span>

        </div>

        <div className="hidden md:flex gap-8">

          <div className="hidden md:flex gap-8">

  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/workshops">Workshops</Link>
  <Link href="/events">Events</Link>
  <Link href="/opportunities">Opportunities</Link>
  <Link href="/certificates">Certificates</Link>
  <Link href="/gallery">Gallery</Link>
  <Link href="/contact">Contact</Link>

</div>

        </div>

      </div>

    </nav>
  );
}