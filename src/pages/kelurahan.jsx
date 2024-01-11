import { Helmet } from 'react-helmet-async';

import { KelurahanView } from 'src/sections/kelurahan/view';

// ----------------------------------------------------------------------

export default function KelurahanPage() {
  return (
    <>
      <Helmet>
        <title> Kelurahan| Minimal UI </title>
      </Helmet>

      <KelurahanView />
    </>
  );
}
