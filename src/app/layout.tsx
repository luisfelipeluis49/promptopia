import { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <html>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  );
}

export default RootLayout
