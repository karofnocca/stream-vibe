import Categories from "@/layouts/Section/Categories"
import Hero from "@/layouts/Section/Hero"
import Devices from "@/layouts/Section/Devices"
import Questions from "@/layouts/Section/Questions"
import Plans from "@/layouts/Section/Plans"

export const metadata = {
  title: "Home",
  isHeaderFixed: true,
}

export default function () {
    return (
      <>
        <Hero/>
        <Categories/>
        <Devices/>
        <Questions/>
        <Plans/>
      </>
    )
}
