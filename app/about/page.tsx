import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Droplet, Award, Users } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nikita Solanki",
      role: "Founder & CEO",
      bio: "A nutritionist with a passion for healthy living, Sarah founded JuiceVibe to share her love of nutritious juices with the world.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Sumit Kumar",
      role: "Head of Product Development",
      bio: "With a background in culinary arts, Michael leads our product development team, creating new and exciting juice blends.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-6">Our Story</h1>
                <p className="text-muted-foreground mb-6">
                  Livwell was founded in 2025 with a simple mission: to provide delicious, nutritious juices that help
                  people live healthier lives. What started as a small juice bar has grown into a beloved brand, but our
                  commitment to quality and health remains unchanged.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe that what you put into your body matters. That's why we use only the freshest,
                  highest-quality fruits and vegetables in our juices. Our cold-press technology ensures that all the
                  nutrients, enzymes, and flavor are preserved, giving you the maximum health benefits with every sip.
                </p>
                <Button asChild>
                  <a href="/juices">Explore Our Juices</a>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format"
                  alt="Fresh fruits and vegetables"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Livwell, we're guided by a set of core values that influence everything we do, from sourcing
                ingredients to serving customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                    <p className="text-muted-foreground">
                      We're committed to sustainable practices that minimize our environmental impact and support local
                      farmers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <Droplet className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Quality</h3>
                    <p className="text-muted-foreground">
                      We never compromise on quality. From farm to bottle, we ensure that only the best ingredients make
                      it into our juices.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      We're constantly exploring new flavors, ingredients, and techniques to create the most delicious
                      and nutritious juices.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      We believe in building strong relationships with our customers, employees, and the communities we
                      serve.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind JuiceVibe who work tirelessly to bring you the best juices and healthy
                foods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary-foreground/90">{member.role}</p>
                    <p className="text-muted-foreground mt-4">{member.bio}</p>
                    <div className="flex gap-4 mt-4">
                      <Button variant="ghost" size="sm" className="rounded-full" asChild>
                        <a href={member.social.linkedin}>
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full" asChild>
                        <a href={member.social.twitter}>
                          Twitter
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full" asChild>
                        <a href={member.social.instagram}>
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
