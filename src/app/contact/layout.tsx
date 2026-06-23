import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact HealthStay — Pilot and Partnership Discussions",
  description:
    "Contact HealthStay for Swiss health stay requests, clinic partnership discussions, or pilot concept conversations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
