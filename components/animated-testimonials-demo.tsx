import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ScanNowHeading from "@/components/scan-now-heading";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: <a href="https://myportfolio1it.vercel.app/" target="_blank">My Portfolio</a>,
      designation: "Mansi's Portfolio ✨",
      src: "myport.png",
    },
    {
      quote:
        "A professional personal portfolio showcasing the journey, expertise, and projects of a Supervisor. Designed to highlight precision engineering experience, leadership, and hands-on mechanical skills in a clean, modern layout.",
      name: <a href="https://meetp-portfolio.vercel.app/" target="_blank">Meet Portfolio</a>,
      designation: "Mechanical Portfolio ⚙️",
      src: "image.png",
    },
    {
      quote:
        "A sleek, responsive, and animated digital marketing website built to help brands grow through storytelling, strategy, and analytics.",
      name: <a href="https://amplify-socialmediamarketing.vercel.app/" target="_blank">Amplify</a>,
      designation: "Social Media Agency 💜",
      src: "amplify.png",
    },
    {
      quote:
        "An elegant landing page for pet lovers, showcasing smooth animations and a user-friendly design to make pet care services simple and accessible.",
      name: <a href="https://paww-care.vercel.app/" target="_blank">Paw Care</a>,
      designation: "Expert Pet Care 🐾",
      src: "paww care.png",
    },
    {
      quote:
        "Coffeo is a modern, responsive website showcasing premium specialty coffee and blends. Itcombines elegance, smooth animations, and an earthy, minimal design.",
      name: <a href="https://coffeo-brew.vercel.app/" target="_blank">Coffeo</a>,
      designation: "Specialty Coffee Website ☕",
      src: "coffeo.png",
    },
    {
      quote:
        "A luxurious and interactive fragrance landing page that blends elegance with technology. Crafted to deliver a sensory experience through motion, depth, and interactivity.",
      name: <a href="https://zperf-fragrance.vercel.app/" target="_blank">ZPERF</a>,
      designation: "Fragrance Experience Website 🫟",
      src: "zudioperf.png",
    },
    {
      quote:
        "Olea is a premium Australian skincare brand web application that showcases a beautiful range of skincare products made with native Australian botanicals.",
      name: <a href="https://olea-skincare-landing-page.vercel.app/" target="_blank">Olea Skincare</a>,
      designation: "Skin Care Landing page-Clean and Minimal 🌳",
      src: "olea.png",
    },
    {
      quote:
        "An elegant and responsive Interior landing page with smooth animations, created to showcase stunning interior spaces with style and sophistication.",
      name: <a href="https://luxor-interior-design.vercel.app/" target="_blank">Luxor Design</a>,
      designation: "Interior Design Landing Page 🏡",
      src: "interior.png",
    },
    {
      quote:
        "A glamorous and stylish landing page with soft animations and a responsive layout, designed to highlight nail art services with elegance and charm.",
      name: <a href="https://nail-studio-smoky.vercel.app/" target="_blank">Nail Studio</a>,
      designation: "Nail Studio – Landing Page 💅🏻",
      src: "luxe.png",
    },
    {
      quote:
        "A responsive and elegant blog platform designed with a clean UI for modern readers. Discover premium content with smooth navigation, minimal design, and engaging interactions.",
      name: <a href="https://luxury-blog-01.vercel.app/" target="_blank">Luxe Blog</a>,
      designation: "Blog - Premium Content & Insights 📘",
      src: "blog.png",
    },
    {
      quote:
        "A responsive and modern fitness landing page with sleek UI/UX, crafted to motivate and engage users through smooth transitions and dynamic visuals.",
      name: <a href="https://fitness-o1.vercel.app/" target="_blank">Fitness</a>,
      designation: "Fitness™ landing page 🌱",
      src: "fitness.png",
    },
    {
      quote:
        "An elegant, joyful, and interactive birthday invitation website crafted with soft pastel gradients, playful animations, and a luxurious UI.",
      name: <a href="https://celebrate-birthday-invite.vercel.app/" target="_blank">Celebrate</a>,
      designation: "Elegant Birthday Invitation Website 🎉 ",
      src: "birthday.png",
    },
    {
      quote:
        "A modern and elegant landing page introducing NEXUS, a next-generation product that blends innovation, luxury, and performance..",
      name: <a href="https://nexus-product-launch.vercel.app/" target="_blank">Nexus</a>,
      designation: "Product Launch Website 🚀",
      src: "nexus.png",
    },
    {
      quote:
        "Celebrations is a joyful, interactive landing page that showcases iconic chocolates in a festive and immersive experience. It blends playful interactions with a clean premium UI.",
      name: <a href="https://celebrations-box.vercel.app/" target="_blank">Celebrations</a>,
      designation: "Explore the Flavours of Happiness🎉",
      src: "chocolate.png",
    },
    {
      quote:
        "A modern, elegant, and responsive wedding planner website built withsmooth scrolling navigation, subtle hover effects, and a minimal floral background — beautifully presenting services, gallery, testimonials, and contact sections.",
      name: <a href="https://moments-wedding-planner.vercel.app/" target="_blank">Moments</a>,
      designation: "Wedding Planner Website 💍",
      src: "moments.png",
    },
    {
      quote:
        "A modern, elegant, and responsive restaurant landing page designed to showcase delicious dishes, customer reviews, and essential restaurant details.",
      name: <a href="https://delicious-rosy.vercel.app/" target="_blank">Delicious</a>,
      designation: "Restaurant Landing Page 🍕",
      src: "delicious.png",
    },
  ];

  return (
    <div className="w-full">
      <ScanNowHeading />
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
