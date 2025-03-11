import { Helmet } from "react-helmet";

const DocumentMetadata = ({
  meta: {
    title,
    description,
    keywords,
    siteName,
    applicationType,
    url,
    image,
    twitterCard,
  },
}) => (
  <>
    <Helmet>
      <title>{title || ""}</title>
      <meta property="og:title" content={title || ""} />
      <meta name="twitter:title" content={title || ""} />
      <meta name="description" content={description || ""} />
      <meta name="og:description" content={description || ""} />
      <meta name="twitter:description" content={description || ""} />
      <meta name="keywords" content={keywords || ""} />

      <meta name="og:image" content={image || ""} />
      <meta name="twitter:image" content={image || ""} />
      <meta property="og:url" content={url || ""} />
      <meta property="og:site_name" content={siteName || "Codefend website"} />
      <meta property="og:type" content={applicationType || "website"} />
      <meta
        name="twitter:card"
        content={twitterCard || "summary_large_image"}
      />
      <meta name="concept" content="Security"></meta>
      <meta name="accessLevel" content="Customer"></meta>
      <meta name="accessLevel" content="Guest"></meta>
      <meta name="accessLevel" content="Partner"></meta>
      <link rel="canonical" href={url || ""} />
    </Helmet>
  </>
);

export default DocumentMetadata;
