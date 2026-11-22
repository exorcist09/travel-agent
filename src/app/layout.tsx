import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentLens — AI Agent Evaluation & Optimisation',
  description: 'A conceptual engineering presentation on evaluating and optimising multi-agent AI systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full bg-[#0c0c0e]">
      <body className="min-h-screen bg-[#0c0c0e] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
