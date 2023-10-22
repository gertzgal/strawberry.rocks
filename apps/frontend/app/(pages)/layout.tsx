import type { Metadata } from "next";
import "styles/global.css";

import { fetchLatestRelease } from "~/lib/api/github";

import { Header, Footer } from "@strawberry-graphql/styleguide";

export const metadata: Metadata = {
  title: {
    template: "%s | 🍓 Strawberry GraphQL",
    default: "A Python library for GraphQL | 🍓 Strawberry GraphQL",
  },
};

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const version = await fetchLatestRelease();

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header version={version} />

        {children}
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
