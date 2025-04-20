import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedJuices } from "@/components/featured-juices"
import { FeaturedDishes } from "@/components/featured-dishes"
import { SeasonalMenu } from "@/components/seasonal-menu"
import { NutritionCalculator } from "@/components/nutrition-calculator"
import { JuiceBarLocator } from "@/components/juice-bar-locator"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SeasonalMenu />
      <FeaturedJuices />
      <FeaturedDishes />
      <NutritionCalculator />
      <JuiceBarLocator />
      <Benefits />
      <Testimonials />
      <Footer />
    </main>
  )
}
