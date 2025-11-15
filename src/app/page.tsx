"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BarChart3, BookMarked, BookOpen, Calendar, CheckCircle, DollarSign, Gem, HelpCircle, History, Mail, MapPin, MessageCircle, MessageSquare, Phone, Shield, Star, Tag, TrendingUp, Users, Wrench } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Books", id: "product" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Vintage Volumes"
          button={{
            text: "Visit Store",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Rare & Vintage Books in Las Vegas"
          description="Discover treasured literary gems from bygone eras. Our curated collection features rare manuscripts, first editions, and vintage classics that tell stories beyond their pages."
          tag="Since 1985"
          tagIcon={BookOpen}
          buttons={[
            { text: "Browse Collection", href: "product" },
            { text: "Visit Store", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238908631-tqkc6s06.jpg"
          imageAlt="Vintage books collection in our Las Vegas bookshop"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="A Legacy of Literary Excellence"
          description="For nearly four decades, we've been Las Vegas's premier destination for vintage and rare books. Our passion for preserving literary history drives us to seek out the most extraordinary volumes from around the world."
          tag="Our Story"
          tagIcon={History}
          textboxLayout="default"
          buttons={[
            { text: "Learn More", href: "faq" }
          ]}
          bulletPoints={[
            {
              title: "Expertise & Authentication",
              description: "Our team of bibliophiles carefully authenticates and evaluates every book in our collection.",
              icon: Shield
            },
            {
              title: "Rare Collections",
              description: "From first editions to out-of-print treasures, we specialize in books you won't find anywhere else.",
              icon: Gem
            },
            {
              title: "Personal Service",
              description: "We help collectors and readers find exactly what they're looking for with personalized recommendations.",
              icon: Users
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238909372-xz1xrehm.jpg"
          imageAlt="Interior of our vintage bookshop"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="What Sets Us Apart"
          description="Discover why book collectors and literary enthusiasts choose us for their vintage book needs"
          tag="Our Services"
          tagIcon={Star}
          textboxLayout="default"
          buttons={[
            { text: "View All Services", href: "contact" }
          ]}
          features={[
            { title: "Authentication", icon: CheckCircle },
            { title: "Appraisal", icon: DollarSign },
            { title: "Restoration", icon: Wrench },
            { title: "Consultation", icon: MessageCircle }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Rare Books"
          description="Explore our carefully curated selection of vintage and rare books"
          tag="Collections"
          tagIcon={BookMarked}
          textboxLayout="default"
          buttons={[
            { text: "View Full Catalog", href: "contact" }
          ]}
          products={[
            {
              id: "1",
              brand: "First Edition",
              name: "Rare Manuscript Collection",
              price: "$2,850",
              rating: 5,
              reviewCount: "12",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238910160-9ou6yrtq.jpg",
              imageAlt: "Rare manuscript collection"
            },
            {
              id: "2",
              brand: "Classic Literature",
              name: "Leather Bound Classics Set",
              price: "$1,250",
              rating: 5,
              reviewCount: "28",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238911085-ed0xvomo.jpg",
              imageAlt: "Classic literature collection"
            },
            {
              id: "3",
              brand: "Vintage Novels",
              name: "19th Century Novel Collection",
              price: "$875",
              rating: 4,
              reviewCount: "15",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238912079-hkk834te.jpg",
              imageAlt: "Vintage novels collection"
            },
            {
              id: "4",
              brand: "Antique Books",
              name: "Pre-War Literature Set",
              price: "$1,650",
              rating: 5,
              reviewCount: "8",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238912765-ypyiuwix.jpg",
              imageAlt: "Antique books collection"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Book Services & Collections"
          description="Professional services and curated collections for every book lover and collector"
          tag="Pricing"
          tagIcon={Tag}
          textboxLayout="default"
          buttons={[
            { text: "Custom Quote", href: "contact" }
          ]}
          plans={[
            {
              id: "appraisal",
              badge: "Popular Service",
              badgeIcon: TrendingUp,
              price: "$75-200",
              subtitle: "Professional book appraisal and authentication",
              buttons: [
                { text: "Get Appraisal", href: "contact" },
                { text: "Learn More", href: "faq" }
              ],
              features: [
                "Expert authentication",
                "Detailed condition report",
                "Market value assessment",
                "Certificate of authenticity"
              ]
            },
            {
              id: "restoration",
              badge: "Premium Service",
              badgeIcon: Wrench,
              price: "$150-500",
              subtitle: "Professional book restoration and preservation",
              buttons: [
                { text: "Book Service", href: "contact" },
                { text: "View Portfolio", href: "faq" }
              ],
              features: [
                "Page repair & cleaning",
                "Binding restoration",
                "Cover repair",
                "Protective treatments"
              ]
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Legacy in Numbers"
          description="Four decades of serving Las Vegas book collectors and literary enthusiasts"
          tag="Since 1985"
          tagIcon={BarChart3}
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              value: "38",
              title: "Years",
              description: "Serving Las Vegas book lovers",
              icon: Calendar
            },
            {
              id: "2",
              value: "15K+",
              title: "Books",
              description: "Rare and vintage titles in stock",
              icon: BookOpen
            },
            {
              id: "3",
              value: "2.8K",
              title: "Collectors",
              description: "Satisfied customers served",
              icon: Users
            },
            {
              id: "4",
              value: "450+",
              title: "First Editions",
              description: "Authenticated rare books sold",
              icon: Award
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Book Experts"
          description="Passionate bibliophiles dedicated to preserving literary treasures"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          buttons={[
            { text: "Visit Our Store", href: "contact" }
          ]}
          members={[
            {
              id: "1",
              name: "Margaret Thompson",
              role: "Owner & Curator",
              description: "With 35 years of experience, Margaret is a certified book appraiser specializing in 18th and 19th century literature.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238914976-8m62mpin.jpg",
              imageAlt: "Margaret Thompson, bookstore owner",
              socialLinks: [
                { icon: Mail, url: "mailto:margaret@vintagevolumes.com" },
                { icon: Phone, url: "tel:7025551234" }
              ]
            },
            {
              id: "2",
              name: "James Richardson",
              role: "Rare Book Specialist",
              description: "Former librarian turned rare book expert, James has an encyclopedic knowledge of first editions and manuscript authentication.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238915656-8tdbfkwj.jpg",
              imageAlt: "James Richardson, rare book specialist",
              socialLinks: [
                { icon: Mail, url: "mailto:james@vintagevolumes.com" }
              ]
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Trusted by collectors and book lovers across Las Vegas and beyond"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          buttons={[
            { text: "Read More Reviews", href: "faq" }
          ]}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Book Collector",
              company: "Las Vegas Literary Society",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238916150-40264kg9.jpg",
              imageAlt: "Sarah Mitchell, book collector"
            },
            {
              id: "2",
              name: "Robert Chen",
              role: "University Professor",
              company: "UNLV English Department",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238916894-oysbww81.jpg",
              imageAlt: "Robert Chen, professor"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Antiquarian",
              company: "Desert Antiques",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238917587-4xo7k8t9.jpg",
              imageAlt: "Emily Rodriguez, antiquarian"
            },
            {
              id: "4",
              name: "Michael Davis",
              role: "Private Collector",
              company: "Rare Books Nevada",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238918134-qopsrgyy.jpg",
              imageAlt: "Michael Davis, collector"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our vintage books and services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          buttons={[
            { text: "Contact Us", href: "contact" }
          ]}
          faqs={[
            {
              id: "1",
              title: "Do you authenticate rare books?",
              content: "Yes, we provide professional authentication services for vintage and rare books. Our experts examine condition, provenance, and publishing details to verify authenticity."
            },
            {
              id: "2",
              title: "Can you help me value my book collection?",
              content: "Absolutely! We offer comprehensive appraisal services for individual books or entire collections. Our certified appraisers provide detailed valuation reports."
            },
            {
              id: "3",
              title: "Do you buy vintage books from collectors?",
              content: "We regularly purchase quality vintage and rare books from private collections. Contact us to schedule an evaluation of your books."
            },
            {
              id: "4",
              title: "What restoration services do you offer?",
              content: "We provide professional book restoration including page repair, binding restoration, cover repair, and protective treatments to preserve your valuable books."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238914262-lxekjbfg.jpg"
          imageAlt="Our Las Vegas vintage bookstore interior"
          mediaPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Experience Our Collection"
          description="Visit our Las Vegas showroom to browse thousands of vintage books, or contact us about specific titles and appraisal services."
          tagIcon={MapPin}
          inputPlaceholder="Your email address"
          buttonText="Get Updates"
          termsText="Subscribe to receive notifications about new arrivals and special collections."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763238918710-3xoytesw.jpg"
          imageAlt="Vintage books collection contact"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Vintage Volumes"
          columns={[
            {
              title: "Collections",
              items: [
                { label: "Rare Books", href: "product" },
                { label: "First Editions", href: "product" },
                { label: "Manuscripts", href: "product" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Appraisals", href: "pricing" },
                { label: "Authentication", href: "pricing" },
                { label: "Restoration", href: "pricing" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Phone, href: "tel:7025551234", ariaLabel: "Call us" },
            { icon: Mail, href: "mailto:info@vintagevolumes.com", ariaLabel: "Email us" },
            { icon: MapPin, href: "https://maps.google.com", ariaLabel: "Visit our store" }
          ]}
          copyrightText="© 2025 Vintage Volumes Las Vegas. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}