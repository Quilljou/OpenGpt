import { SITE_TITLE } from '@/utils/constants'
import { Head, Html, Main, NextScript } from 'next/document'
import { useTranslation } from 'react-i18next'

export default function MyDocument() {
  const title = SITE_TITLE
  const { t } = useTranslation('common')
  const description = t('site_desc')

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta
          property="og:site_name"
          content="https://open-gpt-app.vercel.app/"
        />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          property="og:image"
          content="https://open-gpt-app.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://open-gpt-app.vercel.app/og-image.png"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
