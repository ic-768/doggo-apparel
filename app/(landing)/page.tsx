import FeaturedProducts from "@/components/landing-page/featured-products";
import ShopNow from "@/components/landing-page/shop-now";
import Testimonials from "@/components/landing-page/testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-amber-100">
      <main className="pt-28">
        <ShopNow />
        <FeaturedProducts />
        <Testimonials />
      </main>
    </div>
  );
}
