import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travel AI Engine — Multi-Agent Evaluation & Observability Platform',
  description: 'Observability, latency profiling, and guardrail evaluation for multi-agent travel engines. Concept prototype by Adarsh Verma.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-screen bg-[#0c0c0e] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
