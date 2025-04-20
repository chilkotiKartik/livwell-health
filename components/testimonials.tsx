"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/images/avatars/avatar-1.png",
      role: "Fitness Enthusiast",
      content:
        "I've been drinking JuiceVibe's Detox Green for a month now and I feel amazing! My energy levels have increased and my skin has never looked better.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/images/avatars/avatar-2.png",
      role: "Busy Professional",
      content:
        "The Energy Blast is my go-to morning drink. It gives me the perfect boost to start my day without the crash that comes with coffee.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/images/avatars/avatar-3.png",
      role: "Yoga Instructor",
      content:
        "I love that I can create my own juice combinations. The custom juice creator is so intuitive and fun to use!",
      rating: 4,
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 container">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-2xl">
          Don't just take our word for it. Here's what our customers have to say about our juices.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-lg p-8 shadow-sm"
          >
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage
                  src={testimonials[current].avatar || "/placeholder.svg"}
                  alt={testimonials[current].name}
                />
                <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
                {Array.from({ length: 5 - testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-muted-foreground" />
                ))}
              </div>
              <blockquote className="text-xl italic mb-6">"{testimonials[current].content}"</blockquote>
              <div>
                <div className="font-semibold">{testimonials[current].name}</div>
                <div className="text-muted-foreground">{testimonials[current].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8 gap-2">
          <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant={index === current ? "default" : "outline"}
              size="icon"
              className="w-3 h-3 rounded-full p-0"
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
          <Button variant="outline" size="icon" onClick={next} className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
