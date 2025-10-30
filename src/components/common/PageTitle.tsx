/*
Component to set page title dynamically based on current page
*/

import { Helmet } from 'react-helmet-async'

interface PageTitleProps {
  title?: string
}

export function PageTitle({ title }: PageTitleProps) {
  const fullTitle = title ? `Mosadie Gives Back | ${title}` : 'Mosadie Gives Back'

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  )
}