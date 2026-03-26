"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Artworks",
          id: "#artworks",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
      ]}
      brandName="Bella"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "animated-grid",
      }}
      title="Discover, Collect, and Share Art"
      description="Bella is your premier platform for connecting with artists and discovering unique artworks. Explore a vibrant community, find your next masterpiece, and bring art into your life."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@CreativeCanvas",
          testimonial: "Bella transformed how I share my art. It's so easy to connect with new collectors and showcase my latest pieces!",
          rating: 5,
          imageSrc: "https://pixabay.com/get/ge5f5921d7ff38c7528381a94ec7cbd66b12adcd3068078401b779ed752a44304997a685b56cf9d28bd673c2a8aa0b2efc0e85e2f5720cb277a762f0561d1b80d_1280.jpg",
          imageAlt: "Avatar of Sarah J.",
        },
        {
          name: "Michael D.",
          handle: "@ArtLover_78",
          testimonial: "I've found some truly incredible and unique art on Bella. The curation is exceptional, and buying is a breeze.",
          rating: 5,
          imageSrc: "https://pixabay.com/get/gb4090422b820f2537114ff682e839a3ff0511c3e51c9e64c660c93af863b6242c3a6d3841a5063b0dab0da24adf9dd03287b1e525244b49a20626600e3f04558_1280.jpg",
          imageAlt: "Avatar of Michael D.",
        },
        {
          name: "Emily R.",
          handle: "@DigitalDreamer",
          testimonial: "As a digital artist, Bella provides the perfect platform to reach a global audience and manage my sales seamlessly.",
          rating: 5,
          imageSrc: "https://pixabay.com/get/gab6bb818243ea1bb4cdecdf1c89662f58ef5eab2c2798152927c23fb19ee85bc3ad06f0b01ac3887e7c86ffbf0ea287520f16c87d8df621c80bc35a065311b90_1280.jpg",
          imageAlt: "Avatar of Emily R.",
        },
      ]}
      tag="Your Artistic Journey Starts Here"
      buttons={[
        {
          text: "Explore Artworks",
          href: "#artworks",
        },
        {
          text: "Become an Artist",
          href: "#",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/young-woman-drinking-coffee-1774371711067-7933f7fb.png"
      imageAlt="Vibrant abstract painting with flowing colors"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Bella: Where Creativity Finds Its Home",
        },
      ]}
      buttons={[
        {
          text: "Learn More About Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Curated Discoveries",
          description: "Our expert curators handpick stunning artworks, ensuring a gallery-quality experience tailored to your taste.",
          imageSrc: "https://pixabay.com/get/g088eaed9a595f9a4778e6af06360f8514685b6aa7241d9cda55cf8b6f16b28b6a7aa3c8cd8089ee51d98d315014abd9abb530e5302d687f3d97f17c03352f7dd_1280.jpg",
          imageAlt: "Magnifying glass over abstract art",
        },
        {
          id: 2,
          title: "Vibrant Community",
          description: "Connect with artists, fellow collectors, and art enthusiasts. Share insights, discuss pieces, and grow your network.",
          imageSrc: "https://pixabay.com/get/g96d0f3dea6433c3a5a8d2812709984639ce4cf45f2270ce877f889501bbe6cba73e11883d5e2446446fb26b1c2dc69c921dfa377e04d355e54d4347ae37fd1d0_1280.jpg",
          imageAlt: "People icons connected in a social network",
        },
        {
          id: 3,
          title: "Secure Transactions",
          description: "Buy and sell with confidence. Bella provides encrypted payments and verified artist profiles for peace of mind.",
          imageSrc: "https://pixabay.com/get/g84fe10e34e11b5757b2c2d46374cb281a2c0b5ea5823a740c1074e24e473d0016b7280bcbecbacfcacde7bb252ca48b3df35568270924f31e2e4e67fc05a70d1_1280.jpg",
          imageAlt: "Padlock icon representing security",
        },
      ]}
      title="Why Artists & Collectors Love Bella"
      description="At Bella, we're dedicated to fostering a thriving ecosystem for art. Our platform is designed to empower artists and delight collectors with unparalleled features."
    />
  </div>

  <div id="artworks" data-section="artworks">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Echoes of the Cosmos",
          price: "$1,200",
          variant: "Abstract Painting",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/young-woman-drinking-coffee-1774371711067-7933f7fb.png",
          imageAlt: "Vibrant abstract painting with swirling colors",
        },
        {
          id: "p2",
          name: "Geometric Harmony",
          price: "$950",
          variant: "Modern Sculpture",
          imageSrc: "https://pixabay.com/get/g3ba27836dcb8fc9d561c14ffe5da001e6e05c1d69773425d58aaa3d4f3a13692839b288a9529bb9346560c5e3a932c234d477259c3df4671c0f91c530d2dcd8d_1280.jpg",
          imageAlt: "Minimalist geometric sculpture",
        },
        {
          id: "p3",
          name: "Urban Dreamscape",
          price: "$600",
          variant: "Digital Illustration",
          imageSrc: "https://pixabay.com/get/gf95635e2fc6271fc61abeeec36ff2c944e023b5904b43db730e701f086bce624606613c14d8dadc16da6ee02118ce2b9030b9b9022baf9556a1fe5b75776c560_1280.jpg",
          imageAlt: "Colorful digital illustration of a cityscape",
        },
        {
          id: "p4",
          name: "Serenity of the Peaks",
          price: "$750",
          variant: "Fine Art Photography",
          imageSrc: "https://pixabay.com/get/gf42e2a97ef3b19f0d2780a330643af35de9f37eaed9d6ca932e168d800d701afc8e0043b8895ce8b85f9068190377b99489c7c21f25016b96e4c0cc35e53fd65_1280.jpg",
          imageAlt: "Majestic landscape photograph of mountains",
        },
      ]}
      title="Explore Our Featured Artworks"
      description="Dive into a handpicked selection of our most captivating pieces. From vibrant abstracts to serene photography, find art that speaks to you."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "A Gateway for Emerging Artists",
          quote: "Bella has been an absolute game-changer for my career. The platform makes it so easy to showcase my portfolio and connect with a global audience. My sales have significantly increased!",
          name: "Olivia Grace",
          role: "Abstract Painter",
          imageSrc: "https://pixabay.com/get/g03b0a8bb78ee53ea81249838249dc721a9c8e1ece13f5e388402713a54f4516c13b53301d269a49a5e1ffa1171c1f9c3b4b4dc5d6cd5703c7b49c85f1c613d6d_1280.jpg",
          imageAlt: "Artist painting in a studio",
        },
        {
          id: "t2",
          title: "Uncovering Hidden Gems",
          quote: "As an avid art collector, I'm always looking for unique pieces. Bella's curated selection is truly exceptional, and I've discovered incredible artists I wouldn't have found elsewhere. A true treasure trove!",
          name: "David Harrison",
          role: "Art Collector",
          imageSrc: "https://pixabay.com/get/g06bd2771fa65457d02e11435340a3ff9da0bd0c5834d3e126a8163a75c77df9db745a32bbe388e1c189a029c6d93164fc81d0425017f6bf3bca2482ab65fd703_1280.jpg",
          imageAlt: "People admiring art in a gallery",
        },
        {
          id: "t3",
          title: "Simplifying the Digital Art World",
          quote: "Selling digital art can be complex, but Bella simplifies the entire process. From uploading to secure transactions, it's seamless. The community support is also fantastic!",
          name: "Sophia Lee",
          role: "Digital Illustrator",
          imageSrc: "https://pixabay.com/get/g9f7ad1c5005aa4ed8c1328a2ff2e975e4d53aeccd68d159c7ed9c337056bf936f16928fbe6a33f9673c009d810c36c52d6a0d10e0c5b8a2a6c89147981310501_1280.jpg",
          imageAlt: "Digital artist working on a tablet",
        },
        {
          id: "t4",
          title: "My Favorite Source for Home Decor",
          quote: "I love how Bella allows me to browse and purchase stunning art pieces that perfectly complement my home. The variety is amazing, and every piece I've bought has added so much character to my space.",
          name: "Ethan Carter",
          role: "Home Decor Enthusiast",
          imageSrc: "https://pixabay.com/get/g1e79364c8c695389310ff6939e6525fc30049cfb1e2e8c2d3edf9a4b3667ce9dfe35ae24443cbd25b36a133bd3ea92638dbf3279c6887bb75c184040c5ae9068_1280.jpg",
          imageAlt: "Artwork displayed in a modern living room",
        },
      ]}
      title="What Our Community Says About Bella"
      description="Hear directly from the artists who thrive and the collectors who discover their passion on Bella."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How do I sell my art on Bella?",
          content: "To sell your art on Bella, simply create an artist profile, upload your artwork, set your prices, and connect with potential buyers. Our platform handles secure transactions and provides tools to manage your listings.",
        },
        {
          id: "q2",
          title: "What types of art can I find on Bella?",
          content: "Bella features a diverse range of art, including abstract paintings, sculptures, digital illustrations, fine art photography, and more. Our curators ensure a wide variety of styles and mediums.",
        },
        {
          id: "q3",
          title: "Is shipping and delivery handled by Bella?",
          content: "Artists are responsible for shipping their artworks directly to buyers. Bella provides guidelines and recommendations for packaging and shipping to ensure a smooth delivery process.",
        },
        {
          id: "q4",
          title: "How does Bella ensure authenticity and quality?",
          content: "We verify all artist profiles and encourage transparent communication between artists and buyers. Our community review system also helps maintain high standards of authenticity and quality.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to the most common questions about selling, buying, and interacting on the Bella platform."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Bella",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Discover",
          items: [
            {
              label: "Featured Art",
              href: "#artworks",
            },
            {
              label: "Artists",
              href: "#",
            },
            {
              label: "Collections",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#",
            },
            {
              label: "Help Center",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Cookie Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Bella. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
