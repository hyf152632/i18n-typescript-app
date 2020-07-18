import React, { useEffect } from 'react';
import Head from 'next/head';

const defaultProps = {
  title: 'IVI 3D',
  lang: `en`,
  meta: [
    {
      name: 'keywords',
      content:
        '3d printer,SLA printer,FDM printer,IVI 3d printer,3d print,3d printing,CNC,laser engraving,laser cutting,IVI 3d printer',
    },
  ],
  description: `IVI is $1,318,416 funded by over 2400 backers on Kickstarter!`,
};

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: Array<{ [key: string]: any }>;
  title: string;
} & typeof defaultProps;

function SEO({ description, lang, meta, title }: SEOProps) {
  const metas = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: `Shenzhen Mammonth Innovations Co., Ltd.`,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {metas.map(({ name, content }, index) => (
        <meta key={index} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = defaultProps;

export default SEO;
