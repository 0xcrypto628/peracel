import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Peracel - the best marketplace for podcast",
  description = "Podcast marketplace is an fast and convenient place to book influencers for host and to sell their services for influencers",
  image = "",
  icons = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@sunstar",
    },
    icons,
    // metadataBase: new URL(""),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
