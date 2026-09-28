import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://alveo.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ALVEO | Marketing especializado em odontologia",
    template: "%s | ALVEO",
  },
  description:
    "Marketing e vendas para clínicas e consultórios odontológicos: mais pacientes na cadeira, todos os meses. Primeiro mês por R$ 700, sem contrato.",
  keywords: [
    "marketing odontológico",
    "marketing para dentistas",
    "tráfego pago para clínica odontológica",
    "agência de marketing odontológico",
    "pacientes para clínica odontológica",
    "ALVEO",
  ],
  openGraph: {
    title: "ALVEO | Marketing especializado em odontologia",
    description:
      "Mais pacientes na sua cadeira, todos os meses. Primeiro mês por R$ 700, sem contrato.",
    url: siteUrl,
    siteName: "ALVEO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALVEO | Marketing especializado em odontologia",
    description:
      "Mais pacientes na sua cadeira, todos os meses. Primeiro mês por R$ 700, sem contrato.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f7fb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
