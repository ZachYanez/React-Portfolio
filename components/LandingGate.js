"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { siteContent } from "../data/siteContent";

export default function LandingGate() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      router.push("/portfolio");
    }, siteContent.landingDelayMs);

    return () => window.clearTimeout(timeoutId);
  }, [router]);

  return (
    <main className="landingShell">
      <div className="landingBackdrop" aria-hidden="true" />
      <div className="landingCard">
        <div className="landingLogoWrap">
          <Image alt="Zach Yanez logo" className="landingLogo" height={176} priority src="/logo512.png" width={176} />
        </div>
        <p className="eyebrow">Personal Website</p>
        <h1>{siteContent.name}</h1>
        <p className="landingSummary">Developer, musician, model, teacher, and published author.</p>
        <div className="landingActions">
          <Link className="buttonPrimary" href="/portfolio">
            Enter Portfolio
          </Link>
          <a className="buttonGhost" href={siteContent.resumeLinks[0].href} rel="noreferrer" target="_blank">
            View Resume
          </a>
        </div>
        <p className="landingHint">You&apos;ll be redirected automatically.</p>
      </div>
    </main>
  );
}
