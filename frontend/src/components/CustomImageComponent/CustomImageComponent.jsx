import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../client";

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
  <div className="app__image-div app__flexColumn">
    <img
      src={
        urlFor()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()
      }
      alt={value.caption || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
      className="app__image"
    />
    <p className="app__image-caption">{value.caption} {value.attribution}</p>
  </div>
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

export default components