// src/utils/siteInfo.ts

interface SiteInfo {
  siteName: string;
  defaultDescription: string;
  defaultImage: string;
  author: string;
  // Add more properties as needed
}

export function getSiteInfo(): SiteInfo {
  return {
    siteName: "Your Site Name",
    defaultDescription:
      "Your default site description goes here. This will be used when a page-specific description is not provided.",
    defaultImage: "/images/default-og-image.jpg", // Path to your default Open Graph image
    author: "Your Name",
    // Add more site-wide information here
  };
}
