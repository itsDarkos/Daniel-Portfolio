import { JetBrains_Mono} from "next/font/google";
import "./globals.css";


const JetBrains_Mono = JetBrains_Mono({
  variable: "--font-JetBrains_Mono",
  Weights: [400, 500, 600, 700, 800],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
