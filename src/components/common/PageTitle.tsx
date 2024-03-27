import { Helmet } from 'react-helmet-async';

function PageTitle({ title }: { title: string }) {
  return (
    <Helmet>
      <title>{title ? `${title} | ` : ''}Linkbrary</title>
    </Helmet>
  );
}

export default PageTitle;
