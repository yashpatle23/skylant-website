import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CoursesSection from "@/components/courses-section"
import PlacementHighlight from "@/components/placement-highlight"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CoursesSection />
      <PlacementHighlight />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
