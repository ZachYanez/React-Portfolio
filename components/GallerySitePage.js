import Link from "next/link";
import { siteContent } from "../data/siteContent";
import GalleryCollections from "./GalleryCollections";

export default function GallerySitePage() {
  return (
    <main className="portfolioPage">
      <header className="siteHeader">
        <Link className="brandMark" href="/">
          <span className="brandDot" />
          <span>{siteContent.name}</span>
        </Link>
        <nav className="siteNav" aria-label="Primary">
          <Link href="/portfolio">Portfolio</Link>
        </nav>
      </header>

      <section className="contentSection">
        <div className="sectionHeading">
          <p className="eyebrow">Gallery</p>
          <h2>Photography</h2>
        </div>
        <GalleryCollections />
      </section>

      <footer className="siteFooter">
        <p>{siteContent.name}</p>
        <p>zachyanez.com</p>
      </footer>
    </main>
  );
}
