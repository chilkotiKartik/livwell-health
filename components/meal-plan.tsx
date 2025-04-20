"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Calendar, Utensils, ShoppingBag } from "lucide-react"

export function MealPlan() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      price: 49.99,
      period: "weekly",
      description: "Perfect for individuals looking to start their healthy eating journey",
      meals: 5,
      features: ["5 meals per week", "Basic nutritional guidance", "Weekly menu selection", "Standard delivery"],
      popular: false,
      color: "bg-blue-50 dark:bg-blue-950",
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
    },
    {
      id: "standard",
      name: "Standard Plan",
      price: 89.99,
      period: "weekly",
      description: "Our most popular plan with a perfect balance of variety and value",
      meals: 10,
      features: [
        "10 meals per week",
        "Detailed nutritional information",
        "Customizable menu options",
        "Priority delivery",
        "Weekly nutrition consultation",
      ],
      popular: true,
      color: "bg-green-50 dark:bg-green-950",
      icon: <Utensils className="h-6 w-6 text-green-600" />,
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: 129.99,
      period: "weekly",
      description: "The ultimate healthy eating experience with maximum flexibility",
      meals: 15,
      features: [
        "15 meals per week",
        "Personalized meal plans",
        "Full nutritional analysis",
        "Premium ingredients",
        "Priority delivery with flexible scheduling",
        "Bi-weekly consultation with nutritionist",
      ],
      popular: false,
      color: "bg-purple-50 dark:bg-purple-950",
      icon: <ShoppingBag className="h-6 w-6 text-purple-600" />,
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meal Plan Subscriptions</h2>
          <p className="text-muted-foreground max-w-2xl">
            Subscribe to our meal plans and enjoy delicious, nutritious meals delivered to your doorstep. Perfect for
            busy professionals and health-conscious individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full flex flex-col relative overflow-hidden ${
                  selectedPlan === plan.id ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && <Badge className="absolute top-4 right-4 bg-primary">Popular</Badge>}
                <CardHeader className={`${plan.color}`}>
                  <div className="mb-4">{plan.icon}</div>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-medium mb-4">{plan.meals} meals per week</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include free delivery and can be paused or canceled anytime.
          </p>
          <Button size="lg" disabled={!selectedPlan}>
            {selectedPlan ? "Subscribe Now" : "Select a Plan"}
          </Button>
        </div>
      </div>
    </section>
  )
}
