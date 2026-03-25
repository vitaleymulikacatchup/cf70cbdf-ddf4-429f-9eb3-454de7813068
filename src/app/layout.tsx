import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Bella | Discover, Collect & Share Unique Art',
  description: 'Explore Bella, the premier art platform connecting passionate artists with discerning collectors. Find your next masterpiece, showcase your work, and join a vibrant artistic community.',
  openGraph: {
    "title": "Bella | Discover, Collect & Share Unique Art",
    "description": "Explore Bella, the premier art platform connecting passionate artists with discerning collectors. Find your next masterpiece, showcase your work, and join a vibrant artistic community.",
    "url": "https://www.bellaart.com",
    "siteName": "Bella",
    "images": [
      {
        "url": "https://pixabay.com/get/gf1bb2b07f883534380a9e10f6e64f302b3051451e36137813fb28ba6013f506b8d87799a391524e5e1919100a8cc41e58a1ff19b872e360ed101d5871a5a79cf_1280.jpg",
        "alt": "Vibrant abstract painting with flowing colors"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Bella | Discover, Collect & Share Unique Art",
    "description": "Explore Bella, the premier art platform connecting passionate artists with discerning collectors. Find your next masterpiece, showcase your work, and join a vibrant artistic community.",
    "images": [
      "https://pixabay.com/get/gf1bb2b07f883534380a9e10f6e64f302b3051451e36137813fb28ba6013f506b8d87799a391524e5e1919100a8cc41e58a1ff19b872e360ed101d5871a5a79cf_1280.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
