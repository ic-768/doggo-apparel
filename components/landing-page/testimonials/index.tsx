import MotionH from "@/components/ui/motion/motion-h";
import selfie1 from "@/images/user-selfies/selfie-1.jpg";
import selfie2 from "@/images/user-selfies/selfie-2.jpg";
import selfie3 from "@/images/user-selfies/selfie-3.webp";
import { fadeIntoView } from "@/lib/motion";

import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-12 px-4 mx-auto container">
        <MotionH
          as="h2"
          {...fadeIntoView}
          className="text-4xl font-bold text-center text-gray-800"
        >
          What Our Customers Say
        </MotionH>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="I bought this outfit for my dog's first Diwali
                celebration, and it was a hit! The fabric is soft and
                breathable, ensuring he was comfortable all day long. Super
                vibrant colors and beautifully intricate designs!"
            image={selfie1}
            name="John Johnson"
          />
          <TestimonialCard
            quote="This outfit exceeded my expectations! It’s not only
                stylish but also very easy to put on and take off. My dog looked
                so adorable! I'll definitely be buying more!"
            image={selfie2}
            name="Nicholas Nixon"
          />
          <TestimonialCard
            quote="These sunglasses are a game-changer for our beach trips!
                They fit my dog perfectly and stay in place, even during our
                most adventurous outings. Not only do they protect his eyes from
                the sun, but they also make him look incredibly cool! I've
                received countless compliments, and my pup loves them."
            image={selfie3}
            name="Ronnie Rogers"
          />
          <TestimonialCard
            quote="I can’t say enough good things about this dog cap! It’s
                not only adorable, but it also keeps my pup cool and protected
                from the sun during our walks. The adjustable strap makes it a
                perfect fit, and the breathable material ensures he stays
                comfortable."
            image={selfie1}
            name="Daniel Davis"
          />
        </div>
      </div>
    </section>
  );
}
