// import Image from "next/image";

import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch ur starup <br /> Connect with entrepreueers
      </h1>

      <p className="sub-heading !max-w-3xl">
        Sumbmit Ideas, Vote on Pitches, and get noticed in Virutal Competitions.
      </p>
      <SearchForm />
    </section>
  );
}
