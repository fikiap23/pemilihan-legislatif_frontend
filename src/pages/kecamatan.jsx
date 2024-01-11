import { Helmet } from 'react-helmet-async';

import { KecamatanView } from 'src/sections/kecamatan/view';

// ----------------------------------------------------------------------

export default function KecamatanPage() {
  return (
    <>
      <Helmet>
        <title> Kecamatan| Minimal UI </title>
      </Helmet>

      <KecamatanView />
    </>
  );
}
