import ShopNow from "@/components/landing-page/shop-now";
import FeaturedProducts from "@/components/landing-page/featured-products";
import Testimonials from "@/components/landing-page/testimonials";
import AboutUs from "@/components/landing-page/about-us";
import Footer from "@/components/landing-page/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-amber-100">
      <ShopNow />
      <main>
        <FeaturedProducts />
        <Testimonials />
        <AboutUs />
        <Footer />
      </main>
    </div>
  );
}
