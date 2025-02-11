import Image from "next/image";
import Hero from "./components/hero";
import Products from "./components/products";
import Slides from "./components/slides";
import SubHero from "./components/subhero";
import Grid from "./components/grid";

export default function Home() {
  return (
   
<main>
    <Hero/> 
    <SubHero/>
    <Products />
    <Slides/>
   <Grid/>

 
</main>

  );
}
