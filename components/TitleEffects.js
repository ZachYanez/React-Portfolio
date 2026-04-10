"use client";

import { useEffect } from "react";
import { siteContent } from "../data/siteContent";

export default function TitleEffects() {
  useEffect(() => {
    const handleFocus = () => {
      document.title = siteContent.title;
    };

    const handleBlur = () => {
      document.title = siteContent.titleBlur;
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return null;
}
