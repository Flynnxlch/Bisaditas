import Hero from "@/components/Hero";
import Jobland from "@/components/Jobland";
import Navbar from "@/components/Navbar";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Hero/>
      <Jobland/>
      <Testimony/>
    </main>
    </>
  );
}
