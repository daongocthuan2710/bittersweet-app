// Libraries
import React from 'react';
import { Helmet } from 'react-helmet-async';

type TSEO = {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
};

/**
 * SEO component for setting metadata for search engine optimization and social media sharing.
 *
 * This component wraps the `Helmet` component (assumed to be imported or defined elsewhere) to set various metadata tags
 * for search engine optimization (SEO) and social media sharing. The metadata properties are provided as props to the component.
 *
 * @param {Object} props - Props for configuring the metadata.
 * @param {string} [props.title] - The title of the page or content.
 * @param {string} [props.description] - A brief description of the page or content.
 * @param {string} [props.name] - The name or username associated with the content (e.g., for Twitter).
 * @param {string} [props.type] - The type of the content (e.g., "website", "article", "video").
 * @returns {JSX.Element} The JSX element containing the metadata tags for SEO and social media sharing.
 *
 * @example
 * const Page = () => {
 *   const pageTitle = 'My Awesome Website';
 *   const pageDescription = 'This is an example page for the SEO component.';
 *   const twitterUsername = 'exampleUser';
 *
 *   return (
 *     <div>
 *       <SEO
 *         title={pageTitle}
 *         description={pageDescription}
 *         name={twitterUsername}
 *         type="website"
 *       />
 *       {Other page content }
 *     </div>
 *   );
 * };
 */
export const SEO = ({ title, description, name, type }: TSEO) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
};
