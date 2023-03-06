import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../client";

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
  <div>
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
    />
    <caption style={{margin: 0, padding: 0, width: "100%", fontSize: ".8rem", textAlign: "center", display: "inline-block"}}>{value.caption} {value.attribution}</caption>
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