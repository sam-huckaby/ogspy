import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The next frontier of the web",
  description: "In the vast expanse of digital landscapes, where pixels dance and algorithms whisper, we find ourselves navigating through an endless stream of possibilities. Each moment presents itself as a unique opportunity to explore the boundaries of what could be.",
  openGraph: {
    title: "The next frontier of the web",
    description: "In the vast expanse of digital landscapes, where pixels dance and algorithms whisper, we find ourselves navigating through an endless stream of possibilities. Each moment presents itself as a unique opportunity to explore the boundaries of what could be.",
    type: "website",
    images: [
      {
        url: '/opengraph/cover.png?user=test',
        width: 25,
        height: 25,
        alt: 'Dynamic OpenGraph Image',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <main className="max-w-2xl text-center">
        <p className={`${inter.className} text-lg leading-relaxed text-gray-700 dark:text-gray-300`}>
          In the vast expanse of digital landscapes, where pixels dance and algorithms whisper, 
          we find ourselves navigating through an endless stream of possibilities. Each moment 
          presents itself as a unique opportunity to explore the boundaries of what could be, 
          while simultaneously acknowledging the beauty of what already exists. The intersection 
          of technology and human experience creates a tapestry of interactions that, when 
          viewed from a distance, forms a pattern both complex and harmonious. As we move 
          forward into this ever-evolving space, we carry with us the knowledge that every 
          innovation, every breakthrough, and every discovery is but a stepping stone toward 
          something greater, something more profound, something that has yet to be imagined.
        </p>
      </main>
    </div>
  );
}
