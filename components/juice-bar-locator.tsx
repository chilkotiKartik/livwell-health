"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Search, ArrowRight } from "lucide-react"

export function JuiceBarLocator() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchPerformed, setSearchPerformed] = useState(false)

  const juiceBars = [
    {
      id: "jb1",
      name: "Fresh Squeeze Haven",
      address: "123 Healthy Street, Downtown",
      distance: "0.8 miles away",
      rating: 4.8,
      hours: "7AM - 8PM",
      image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=1000&auto=format",
      featured: true,
    },
    {
      id: "jb2",
      name: "Green Vitality Bar",
      address: "456 Wellness Avenue, Midtown",
      distance: "1.2 miles away",
      rating: 4.6,
      hours: "8AM - 7PM",
      image: "https://images.unsplash.com/photo-1563304997-8b7d1baa9b2f?q=80&w=1000&auto=format",
      featured: false,
    },
    {
      id: "jb3",
      name: "Tropical Juice Oasis",
      address: "789 Nutrition Blvd, Uptown",
      distance: "1.5 miles away",
      rating: 4.9,
      hours: "7AM - 9PM",
      image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=1000&auto=format",
      featured: false,
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchPerformed(true)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 p-3 rounded-full mb-4"
          >
            <MapPin className="h-6 w-6 text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Find a Juice Bar Near You</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our juice bars and cafés in your neighborhood. Enjoy fresh, healthy drinks and snacks on the go!
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter your location or zip code"
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit">Find Juice Bars</Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {juiceBars.map((bar, index) => (
            <motion.div
              key={bar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={bar.image || "/placeholder.svg"}
                    alt={bar.name}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                  {bar.featured && <Badge className="absolute top-2 right-2 bg-primary">Staff Pick</Badge>}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{bar.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{bar.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{bar.address}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 pt-0">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{bar.distance}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Open: {bar.hours}</span>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button variant="outline" className="w-full group">
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Can't find a location near you? We're expanding rapidly!</p>
          <Button variant="outline" size="lg">
            Suggest a New Location
          </Button>
        </div>
      </div>
    </section>
  )
}
