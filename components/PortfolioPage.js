import Image from "next/image";
import Link from "next/link";
import { siteContent } from "../data/siteContent";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Published", href: "#published" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

function ExternalAnchor({ className, children, href }) {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

export default function PortfolioPage() {
  return (
    <main className="portfolioPage">
      <header className="siteHeader">
        <Link className="brandMark" href="/">
          <span className="brandDot" />
          <span>{siteContent.name}</span>
        </Link>
        <nav className="siteNav" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <Link href="/privacy">Privacy</Link>
        </nav>
      </header>

      <section className="heroSection" id="top">
        <div className="heroBackdrop" aria-hidden="true" />
        <div className="heroCopy">
          <p className="eyebrow">Austin, Texas</p>
          <h1>{siteContent.name}</h1>
          <p className="heroLead">{siteContent.heroSummary}</p>
          <div className="roleCloud">
            {siteContent.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <div className="heroActions">
            <a className="buttonPrimary" href="#work">
              Explore Work
            </a>
            <a className="buttonGhost" href="#resume">
              Resume & Contact
            </a>
          </div>
        </div>
        <div className="heroMediaFrame">
          <div className="heroMedia">
            <Image alt="Portrait of Zach Yanez" fill priority sizes="(max-width: 900px) 100vw, 40vw" src={siteContent.heroImage} />
          </div>
        </div>
      </section>

      <section className="contentSection" id="about">
        <div className="sectionHeading">
          <p className="eyebrow">Biography</p>
          <h2>Multidisciplinary work, presented with a cleaner point of view.</h2>
        </div>
        <div className="aboutGrid">
          <div className="glassCard richTextCard">
            <p className="introParagraph">{siteContent.professionalSummary}</p>
            {siteContent.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="glassCard sidebarCard">
            <p className="eyebrow">Core Technologies</p>
            <div className="chipGrid">
              {siteContent.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
            <div className="miniProfile">
              <h3>Current focus</h3>
              <p>
                Building polished mobile products, AI-powered workflows, and production-grade experiences across consumer and
                enterprise applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection parallaxSection" id="work">
        <div className="sectionHeading">
          <p className="eyebrow">Selected Projects</p>
          <h2>Relevant products built across mobile, web, and AI.</h2>
        </div>
        <div className="projectGrid">
          {siteContent.featuredProjects.map((project) => (
            <ExternalAnchor key={project.name} className="projectCard" href={project.href}>
              <div className="projectMeta">
                <span>{project.category}</span>
                <strong>{project.name}</strong>
              </div>
              <p>{project.description}</p>
              <p className="projectHighlight">{project.highlight}</p>
              {project.image ? (
                <div className="projectLogoWrap">
                  <Image alt={`${project.name} logo`} fill sizes="160px" src={project.image} />
                </div>
              ) : (
                <div className="projectTextMark">{project.name.split(" ")[0]}</div>
              )}
            </ExternalAnchor>
          ))}
        </div>
      </section>

      <section className="contentSection" id="published">
        <div className="sectionHeading">
          <p className="eyebrow">Published Work</p>
          <h2>Writing and transcription work remains part of the portfolio story.</h2>
        </div>
        {siteContent.publishedWorks.map((book) => (
          <div key={book.title} className="publishedGrid glassCard">
            <div className="bookCover">
              <Image alt={book.title} fill sizes="(max-width: 900px) 100vw, 380px" src={book.cover} />
            </div>
            <div className="bookCopy">
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <div className="buttonRow">
                {book.links.map((link) => (
                  <ExternalAnchor key={link.href} className="buttonGhost" href={link.href}>
                    {link.label}
                  </ExternalAnchor>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="contentSection parallaxSection" id="videos">
        <div className="sectionHeading">
          <p className="eyebrow">Videos</p>
          <h2>All nine performance videos preserved in a responsive viewing grid.</h2>
        </div>
        <div className="videoGrid">
          {siteContent.videos.map((videoId, index) => (
            <article key={videoId} className="videoCard">
              <div className="videoFrame">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Zach Yanez video ${index + 1}`}
                />
              </div>
              <div className="videoMeta">
                <span>Performance {String(index + 1).padStart(2, "0")}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection" id="gallery">
        <div className="sectionHeading">
          <p className="eyebrow">Gallery</p>
          <h2>A restrained editorial treatment of the existing photography.</h2>
        </div>
        <div className="galleryStack">
          {siteContent.gallerySeries.map((series) => (
            <article key={series.title} className="gallerySeries glassCard">
              <div className="gallerySeriesHeader">
                <div>
                  <h3>{series.title}</h3>
                  <p>{series.credit}</p>
                </div>
                <span>{series.images.length} images</span>
              </div>
              <div className="galleryGrid">
                {series.images.map((image, index) => (
                  <div key={image} className={index === 0 ? "galleryItem galleryItemLarge" : "galleryItem"}>
                    <Image
                      alt={`${series.title} image ${index + 1}`}
                      fill
                      sizes="(max-width: 900px) 100vw, (max-width: 1400px) 50vw, 33vw"
                      src={image}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection" id="resume">
        <div className="sectionHeading">
          <p className="eyebrow">Resume</p>
          <h2>Resume access stays prominent, alongside the same social and contact links.</h2>
        </div>
        <div className="resumeGrid">
          <div className="glassCard">
            <h3>Resume Links</h3>
            <div className="linkStack">
              {siteContent.resumeLinks.map((link) =>
                link.external ? (
                  <ExternalAnchor key={link.href} className="linkRow" href={link.href}>
                    <span>{link.label}</span>
                    <span>Open</span>
                  </ExternalAnchor>
                ) : (
                  <a key={link.href} className="linkRow" download={link.download ? "zach-yanez-resume.pdf" : undefined} href={link.href}>
                    <span>{link.label}</span>
                    <span>Download</span>
                  </a>
                )
              )}
            </div>
          </div>
          <div className="glassCard" id="contact">
            <h3>Where to Find Me</h3>
            <div className="linkStack">
              {siteContent.socialLinks.map((link) => (
                <ExternalAnchor key={link.href} className="linkRow" href={link.href}>
                  <span>{link.label}</span>
                  <span>Visit</span>
                </ExternalAnchor>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="privacyPreview glassCard">
          <div>
            <p className="eyebrow">Privacy</p>
            <h3>{siteContent.privacyPolicy.title}</h3>
            <p>{siteContent.privacyPolicy.body[0]}</p>
          </div>
          <Link className="buttonGhost" href="/privacy">
            Read Full Policy
          </Link>
        </div>
      </section>

      <footer className="siteFooter">
        <p>{siteContent.name}</p>
        <p>zachyanez.com</p>
      </footer>
    </main>
  );
}
