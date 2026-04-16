import Image from "next/image";
import { siteContent } from "../data/siteContent";
import { gallerySeriesSlug } from "../lib/gallerySeriesSlug";

export default function GalleryCollections() {
  return (
    <article className="glassCard galleryUnified" aria-label="Photography gallery">
      {siteContent.gallerySeries.map((series) => (
        <section key={series.title} id={gallerySeriesSlug(series.title)} className="gallerySeries">
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
        </section>
      ))}
    </article>
  );
}
