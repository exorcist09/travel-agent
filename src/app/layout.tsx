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
    <html lang="en" className="h-full bg-[#fafafa]">
      <body className="min-h-screen bg-[#fafafa] text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900 font-sans">
        {children}
      </body>
    </html>
  );
}
