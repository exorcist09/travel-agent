import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Airial — AI Agent Evaluation & Observability Dashboard',
  description: 'Engineering prototype for evaluating multi-agent travel engine accuracy, latency, token consumption, and cost optimization. Concept by Adarsh Verma.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-slate-200 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
