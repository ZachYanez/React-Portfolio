import Image from "next/image";
import Link from "next/link";
import { siteContent } from "../data/siteContent";
import { gallerySeriesSlug } from "../lib/gallerySeriesSlug";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Published", href: "#published" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const SELECTED_WORK_HREFS = new Set(["https://doctalkhealth.com/", "https://therecetteapp.com/"]);

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
          <h2>Biography</h2>
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
          <h2>App Store</h2>
        </div>
        <div className="projectGrid">
          {siteContent.featuredProjects.filter((project) => SELECTED_WORK_HREFS.has(project.href)).map((project) => (
            <ExternalAnchor key={project.name} className="projectCard" href={project.href}>
              <div className="projectCardTop">
                <div className="projectMeta">
                  <span>{project.category}</span>
                  <strong>{project.name}</strong>
                </div>
                {project.image ? (
                  <div className="projectLogoWrap">
                    <Image alt={`${project.name} logo`} fill sizes="160px" src={project.image} />
                  </div>
                ) : (
                  <div className="projectTextMark">{project.name.split(" ")[0]}</div>
                )}
              </div>
              <p className="projectDescription">{project.description}</p>
              <p className="projectHighlight">{project.highlight}</p>
              <div className="projectDetailsGrid">
                <div className="projectDetailBlock">
                  <p className="projectDetailLabel">Features</p>
                  <ul className="projectDetailList">
                    {project.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="projectDetailBlock">
                  <p className="projectDetailLabel">Engineering</p>
                  <ul className="projectDetailList">
                    {project.engineering.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="projectDetailBlock">
                  <p className="projectDetailLabel">Design</p>
                  <ul className="projectDetailList">
                    {project.design.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="projectFooter">
                <span>View live product</span>
                <strong>Open</strong>
              </div>
            </ExternalAnchor>
          ))}
          <div className="appStoreSayHey glassCard">
            <div className="appStoreSayHeyLogo">
              <div className="appStoreSayHeyLogoWrap">
                <Image alt="SayHey! app logo" fill sizes="128px" src={siteContent.sayHeySpotlight.image} />
              </div>
            </div>
            <div className="appStoreSayHeyCopy">
              <p className="eyebrow">{siteContent.sayHeySpotlight.eyebrow}</p>
              <h3>{siteContent.sayHeySpotlight.title}</h3>
              {siteContent.sayHeySpotlight.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="buttonRow">
                <ExternalAnchor className="buttonGhost" href={siteContent.sayHeySpotlight.appHref}>
                  SayHey! on the web
                </ExternalAnchor>
                <ExternalAnchor className="buttonGhost" href={siteContent.sayHeySpotlight.acquirerHref}>
                  {siteContent.sayHeySpotlight.acquirerName}
                </ExternalAnchor>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection" id="published">
        <div className="sectionHeading">
          <h2>Published Work</h2>
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
          <h2>Performances</h2>
        </div>
        <div className="videoGrid">
          {siteContent.videos.map((videoId) => (
            <article key={videoId} className="videoCard">
              <div className="videoFrame">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Zach Yanez performance video (${videoId})`}
                />
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
        <div className="galleryPreviewGrid">
          {siteContent.gallerySeries.map((series) => {
            const slug = gallerySeriesSlug(series.title);
            const cover = series.images[0];
            return (
              <Link key={series.title} className="gallerySeriesPreviewCard" href={`/gallery#${slug}`}>
                <div className="gallerySeriesPreviewImage">
                  <Image
                    alt={`${series.title} — open full gallery`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 320px"
                    src={cover}
                  />
                </div>
                <div className="gallerySeriesPreviewMeta">
                  <h3>{series.title}</h3>
                  <p>{series.credit}</p>
                  <span>View series · {series.images.length} photos</span>
                </div>
              </Link>
            );
          })}
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

      <footer className="siteFooter">
        <p>{siteContent.name}</p>
        <p>zachyanez.com</p>
      </footer>
    </main>
  );
}
