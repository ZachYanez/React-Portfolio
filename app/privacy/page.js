import Link from "next/link";
import { siteContent } from "../../data/siteContent";

export const metadata = {
  title: "Privacy Policy | Zach Yanez",
};

export default function PrivacyPage() {
  return (
    <main className="privacyPage">
      <div className="privacyShell glassCard">
        <p className="eyebrow">Privacy</p>
        <h1>{siteContent.privacyPolicy.title}</h1>
        {siteContent.privacyPolicy.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="buttonRow">
          <a className="buttonPrimary" href="mailto:zy@zymgmtco.com">
            Contact About Privacy
          </a>
          <Link className="buttonGhost" href="/portfolio">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
