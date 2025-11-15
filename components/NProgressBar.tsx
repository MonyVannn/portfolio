"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1,
  easing: "ease",
  speed: 500,
});

export default function NProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  useEffect(() => {
    // Start progress on link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const currentUrl = window.location.href;
      const targetUrl = target.href;

      // Only start progress if navigating to a different page
      if (
        targetUrl !== currentUrl &&
        targetUrl.startsWith(window.location.origin)
      ) {
        NProgress.start();
      }
    };

    // Add click listener to all links
    const links = document.querySelectorAll(
      'a[href^="/"], a[href^="' + window.location.origin + '"]'
    );
    links.forEach((link) => {
      link.addEventListener("click", handleAnchorClick as EventListener);
    });

    return () => {
      // Cleanup
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, [pathname]);

  return null;
}
