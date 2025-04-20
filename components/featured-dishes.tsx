"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { dishes } from "@/lib/data"
import { DishCard } from "@/components/dish-card"
import { Button } from "@/components/ui/button"

export function FeaturedDishes() {
  const featuredDishes = dishes.filter((dish) => dish.featured).slice(0, 3)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Healthy Dishes</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our range of nutritious and delicious dishes, crafted with the freshest ingredients to nourish your
            body and delight your taste buds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/dishes">View All Dishes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
