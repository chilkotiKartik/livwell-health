"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { juices } from "@/lib/data"
import { JuiceCard } from "@/components/juice-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FeaturedJuices() {
  const [activeTab, setActiveTab] = useState("featured")

  const featuredJuices = juices.filter((juice) => juice.featured)
  const popularJuices = juices.filter((juice) => juice.popular)
  const newJuices = juices.filter((juice) => juice.new)

  return (
    <section className="py-16 container">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Discover Our Juices</h2>
        <p className="text-muted-foreground max-w-2xl">
          Explore our range of delicious and nutritious juices, crafted with the freshest ingredients to boost your
          health and energy.
        </p>
      </div>

      <Tabs defaultValue="featured" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="new">New Arrivals</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="featured" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJuices.map((juice, index) => (
              <motion.div
                key={juice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <JuiceCard juice={juice} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularJuices.map((juice, index) => (
              <motion.div
                key={juice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <JuiceCard juice={juice} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newJuices.map((juice, index) => (
              <motion.div
                key={juice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <JuiceCard juice={juice} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-12">
        <Button size="lg" asChild>
          <Link href="/juices">View All Juices</Link>
        </Button>
      </div>
    </section>
  )
}
