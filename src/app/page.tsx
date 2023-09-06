"use client";

//NEXT COMPONENTS
import Link from "next/link";
import Image from "next/image";

// IMAGES
import {
  greenRight,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  illustration1,
  illustration2,
  illustration3,
  image1,
  image2,
  image3,
  image4,
  instagram,
  logo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  menu,
  send,
  social1,
  twitter,
  whiteLogo,
  whiteRight,
  youtube,
} from "@/assets";

// COMPONENTS
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { fadeAnimation } from "@/utils/animations";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
  }, []);

  return (
    <div className="relative">
      <section id="#home" className="w-full pb-28 bg-hero lg:px-36 xs:px-8">
        <header
          className={`w-full flex items-center justify-between py-8 ${
            header ? "fixed shadow-md left-0 bg-white xs:px-8 lg:px-36" : ""
          }`}
        >
          <Link className="flex-auto" href="/">
            <Image src={logo} alt="Nextcent" />
          </Link>

          <button onClick={() => setOpenMenu(!openMenu)}>
            <Image className="w-10 xs:block lg:hidden" src={menu} alt="Menu" />
          </button>

          <nav
            className={`
              flex xs:items-start lg:items-center justify-between flex-auto lg:gap-4 
              xs:p-6 lg:p-0 transition duration-150
              xs:w-3/4 lg:w-auto
              xs:flex-col xs:justify-normal xs:gap-4 xs:fixed lg:relative lg:h-auto lg:bg-transparent xs:h-screen xs:bg-white lg:flex-row 
              xs:top-0 xs:left-0 xs:shadow-md xs:z-30 lg:shadow-none lg:z-auto lg:justify-between
              ${
                openMenu
                  ? "translate-x-0"
                  : "-translate-x-full lg:translate-x-0"
              }`}
          >
            <ul className="flex lg:items-center gap-8 xs:flex-col lg:flex-row xs:items-start">
              <li>
                <Link className="font-interMedium" href="#home">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#service">Service</Link>
              </li>

              <li>
                <Link href="#feature">Feature</Link>
              </li>

              <li>
                <Link href="#product">Product</Link>
              </li>

              <li>
                <Link href="#testimonals">Testimonals</Link>
              </li>

              <li>
                <Link href="#faq">FAQ</Link>
              </li>
            </ul>

            <ul className="flex lg:items-center gap-8 xs:flex-col lg:flex-row xs:items-start">
              <li>
                <Link className="text-primary" href="">
                  Sign in
                </Link>
              </li>

              <li>
                <Button>Sign up</Button>
              </li>
            </ul>
          </nav>
        </header>

        <div className="w-full flex xs:justify-center lg:justify-between items-center pt-20">
          <div className="flex flex-col xs:items-center lg:items-start lg:gap-4 xs:gap-8">
            <h1 className="text-6xl xs:text-center lg:text-left font-interSemiBold text-fontPrimary">
              Lessons and insights <br />{" "}
              <span className="font-interSemiBold text-primary">
                from 8 years
              </span>
            </h1>
            <span className="xs:text-center lg:text-left">
              Where to grow your business as a photographer: site or social
              media?
            </span>
            <Button className="mt-3">Register</Button>
          </div>

          <div className="xs:hidden lg:block">
            <Image className="w-72" src={illustration1} alt="Illustration" />
          </div>
        </div>
      </section>

      <Container className="items-center flex-col gap-2">
        <Title>Our Clients</Title>
        <Text className="text-center">
          We have been working with some Fortune 500+ clients
        </Text>

        <motion.div
          initial={fadeAnimation.initial}
          whileInView={fadeAnimation.animate}
          transition={fadeAnimation.transition}
          className="flex w-full items-center lg:justify-between lg:gap-0 pt-8 flex-wrap xs:justify-center xs:gap-6"
        >
          <Image src={logo1} alt="partner-1" />
          <Image src={logo2} alt="partner-2" />
          <Image src={logo3} alt="partner-3" />
          <Image src={logo4} alt="partner-4" />
          <Image src={logo5} alt="partner-5" />
          <Image src={logo6} alt="partner-6" />
          <Image src={logo7} alt="partner-7" />
        </motion.div>
      </Container>

      <Container className="flex-col items-center gap-4">
        <Title className="max-w-2xl">
          Manage your entire community in a single system
        </Title>

        <Text
          initial={fadeAnimation.initial}
          animate={fadeAnimation.animate}
          transition={fadeAnimation.transition}
          className="text-center"
        >
          Who is Nextcent suitable for?
        </Text>

        <div className="w-full flex items-center lg:justify-between mt-6 flex-wrap xs:justify-center xs:gap-6 lg:gap-0">
          <div className="flex flex-col items-center bg-white rounded-md p-4 shadow-md gap-3">
            <Image src={icon1} alt="Icon" />
            <h3 className="text-2xl font-interSemiBold text-fontPrimary text-center">
              Membership <br /> Organisations
            </h3>

            <Text className="max-w-[16rem] text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </Text>
          </div>
          <div className="flex flex-col items-center bg-white rounded-md p-4 shadow-md gap-3">
            <Image src={icon2} alt="Icon" />
            <h3 className="text-2xl font-interSemiBold text-fontPrimary text-center">
              National <br /> Associations
            </h3>

            <Text className="max-w-[16rem] text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </Text>
          </div>
          <div className="flex flex-col items-center bg-white rounded-md p-6 shadow-md gap-3">
            <Image src={icon3} alt="Icon" />
            <h3 className="text-2xl font-interSemiBold text-fontPrimary text-center">
              Clubs And <br /> Groups
            </h3>

            <Text className="max-w-[16rem] text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </Text>
          </div>
        </div>
      </Container>

      <Container className="lg:justify-between xs:justify-center lg:flex-nowrap xs:flex-wrap-reverse items-center gap-12">
        <Image
          className="md:hidden lg:block"
          src={illustration2}
          alt="Illustration"
        />

        <div className="flex items-start flex-col gap-4">
          <h2 className="text-4xl text-fontPrimary font-interSemiBold">
            The unseen of spending three <br /> years at Pixelgrade
          </h2>

          <Text className="text-justify text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </Text>

          <Button className="mt-6">Learn More</Button>
        </div>
      </Container>

      <section className="w-full flex lg:px-36 xs:px-10 py-20 mt-12 lg:justify-between xs:justify-center bg-hero items-center lg:flex-nowrap xs:flex-wrap xs:gap-10 lg:gap-0">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-left text-fontPrimary font-interSemiBold">
            Helping a local <br />{" "}
            <span className="font-interSemiBold text-primary">
              business reinvent itselff
            </span>
          </h2>

          <span className="text-sm text-[#18191F]">
            We reached here with our hard work and dedication
          </span>
        </div>

        <div className="flex items-center flex-wrap max-w-lg gap-12">
          <div className="flex items-center gap-4">
            <Image className="w-12" src={icon4} alt="Icon" />

            <div className="flex flex-col">
              <h3 className="text-fontPrimary text-3xl font-interSemiBold">
                2,245,341
              </h3>
              <Text className="text-sm">Members</Text>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image className="w-12" src={icon5} alt="Icon" />

            <div className="flex flex-col">
              <h3 className="text-fontPrimary text-3xl font-interSemiBold">
                46,328
              </h3>
              <Text className="text-sm">Clients</Text>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Image className="w-12" src={icon6} alt="Icon" />

            <div className="flex flex-col">
              <h3 className="text-fontPrimary text-3xl font-interSemiBold">
                828,867
              </h3>
              <Text className="text-sm">Event Bookings</Text>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image className="w-12" src={icon7} alt="Icon" />

            <div className="flex flex-col">
              <h3 className="text-fontPrimary text-3xl font-interSemiBold">
                1,926,436
              </h3>
              <Text className="text-sm">Payments</Text>
            </div>
          </div>
        </div>
      </section>

      <Container className="lg:justify-between xs:justify-center lg:flex-nowrap xs:flex-wrap items-center gap-12">
        <Image
          className="lg:block md:hidden"
          src={illustration3}
          alt="Illustration"
        />

        <div className="flex items-start flex-col gap-4">
          <h2 className="text-4xl text-fontPrimary font-interSemiBold">
            How to design your site footer like we did
          </h2>

          <Text className="text-justify text-sm">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </Text>

          <Button className="mt-6">Learn More</Button>
        </div>
      </Container>

      <section className="w-full lg:px-36 xs:px-10 mt-12 py-16 bg-hero flex items-center gap-10 xs:flex-wrap lg:flex-nowrap">
        <Image className="lg:flex-none lg:w-[19rem]" src={image1} alt="Image" />

        <div className="flex flex-col gap-4">
          <Text className="text-justify text-sm">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </Text>

          <div>
            <h3 className="text-xl text-primary font-interSemiBold">
              Tim Smith
            </h3>

            <span className="text-sm text-[#89939E]">
              British Dragon Boat Racing Association
            </span>
          </div>

          <div className="flex gap-6 items-center flex-wrap">
            <Image src={logo1} alt="partner-1" />
            <Image src={logo2} alt="partner-2" />
            <Image src={logo3} alt="partner-3" />
            <Image src={logo4} alt="partner-4" />
            <Image src={logo5} alt="partner-5" />
            <Image src={logo6} alt="partner-6" />

            <div className="flex items-center gap-4">
              <h3 className="text-primary font-interSemiBold">
                Meet all costumers
              </h3>
              <Image src={greenRight} alt="" />
            </div>
          </div>
        </div>
      </section>

      <Container className="flex-col items-center gap-4">
        <Title>Caring is the new marketing</Title>

        <Text className="text-center max-w-2xl">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </Text>

        <div className="w-full flex items-center gap-6"></div>

        <div className="w-full flex items-center xs:gap-20 lg:gap-6 flex-wrap">
          <div className="relative h-80 flex-1 min-w-fit">
            <Image
              className="w-full h-full object-cover object-center rounded-md"
              src={image3}
              alt="Image"
            />

            <div className="bg-white p-4 rounded-md absolute shadow-md z-10 flex flex-col w-4/5 -bottom-10 left-[50%] -translate-x-[50%] items-center gap-2">
              <h3 className="text-lg font-interSemiBold text-center text-fontSecondary">
                Creating Streamlined <br /> Safeguarding Processes br with
                OneRen
              </h3>

              <div className="flex items-center gap-4">
                <h3 className="text-primary font-interSemiBold">Read More</h3>
                <Image src={greenRight} alt="" />
              </div>
            </div>
          </div>

          <div className="relative h-80 flex-1">
            <Image
              className="w-full h-full object-cover object-center rounded-md"
              src={image2}
              alt="Image"
            />

            <div className="bg-white p-4 rounded-md absolute shadow-md z-10 flex flex-col w-4/5 -bottom-10 left-[50%] -translate-x-[50%] items-center gap-2">
              <h3 className="text-lg font-interSemiBold text-center text-fontSecondary">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h3>

              <div className="flex items-center gap-4">
                <h3 className="text-primary font-interSemiBold">Read More</h3>
                <Image src={greenRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="w-full bg-hero lg:px-36 xs:px-10 mt-20 flex flex-col items-center gap-4 py-16">
        <h2 className="lg:text-6xl xs:text-4xl max-w-3xl text-secondary font-interSemiBold text-center leading-snug">
          Pellentesque suscipit fringilla libero eu.
        </h2>

        <Button>
          Get Demo
          <Image src={whiteRight} alt="" />
        </Button>
      </section>

      <footer className="w-full lg:px-36 xs:px-10 flex bg-secondary py-16 lg:justify-between xs:justify-center lg:flex-nowrap xs:flex-wrap-reverse xs:gap-12 lg:gap-0">
        <div className="flex flex-col items-start gap-8">
          <Image src={whiteLogo} alt="Nextcent" />

          <span className="text-white text-sm">
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved.
          </span>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ffffff20]">
              <Image src={instagram} alt="Instagram" />
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ffffff20]">
              <Image src={social1} alt="Social Midia" />
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ffffff20]">
              <Image src={twitter} alt="Twitter" />
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ffffff20]">
              <Image src={youtube} alt="Youtube" />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-16 xs:flex-wrap-reverse lg:flex-nowrap">
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-white font-interSemiBold text-2xl">Company</h2>

            <ul className="flex flex-col gap-3">
              <li>
                <Link className="text-fontSecondaryLinks text-sm" href="">
                  About Us
                </Link>
              </li>

              <li>
                <Link className="text-fontSecondaryLinks text-sm" href="">
                  Blog
                </Link>
              </li>

              <li>
                <Link className="text-fontSecondaryLinks text-sm" href="">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link className="text-fontSecondaryLinks text-sm" href="">
                  Pricing
                </Link>
              </li>

              <li>
                <Link className="text-fontSecondaryLinks text-sm" href="">
                  Testimonals
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h2 className="text-white font-interSemiBold text-2xl">Support</h2>

            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  className="text-fontSecondaryLinks text-sm hover:brightness-90 transition duration-150"
                  href=""
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  className="text-fontSecondaryLinks text-sm hover:brightness-90 transition duration-150"
                  href=""
                >
                  Terms of service
                </Link>
              </li>

              <li>
                <Link
                  className="text-fontSecondaryLinks text-sm hover:brightness-90 transition duration-150"
                  href=""
                >
                  Legal
                </Link>
              </li>

              <li>
                <Link
                  className="text-fontSecondaryLinks text-sm hover:brightness-90 transition duration-150"
                  href=""
                >
                  Privacy policy
                </Link>
              </li>

              <li>
                <Link
                  className="text-fontSecondaryLinks text-sm hover:brightness-90 transition duration-150"
                  href=""
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-white font-interSemiBold text-2xl">
              Stay up to datef
            </h2>

            <form action="">
              <div className="flex items-center gap-3 bg-[#ffffff30] rounded-md px-6 py-3">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="bg-transparent outline-none text-white"
                />
                <Image src={send} alt="" />
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
