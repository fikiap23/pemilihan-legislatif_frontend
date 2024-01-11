import { useState } from 'react';
import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
} from '@mui/material';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------
const rowsPerPageOptions = [10, 15, 30];
export default function AppView() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const data = [
    {
      kecamatan: 'Kecamatan 1',
      votes: [500, 10, 450, 600, 200, 300, 150, 80, 200, 120, 40, 180, 240, 120, 120, 50, 80],
    },
    {
      kecamatan: 'Kecamatan 2',
      votes: [700, 15, 600, 450, 300, 150, 200, 100, 250, 180, 60, 250, 320, 160, 160, 80, 80],
    },
    // Add more data as needed
  ];

  const parties = [
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/1/PKB.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/2/Gerindra.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/3/PDIP.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/PARTY/golkar/party%3Dgolkar.png',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/5/Nasdem.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/6/Buruh.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/7/Gelora.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/8/PKS.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/9/PKN.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/10/Hanura.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/12/PAN.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/13/PBB.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/14/Demokrat.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/15/PSI.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/16/Perindo.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/17/PPP.svg',
    'https://goodkind-bucket04939-dev.s3.ap-southeast-1.amazonaws.com/public/assets/constant/partai/24/Ummat.svg',
  ];
  const kecamatanData = [
    { id: 1, name: 'Kecamatan Cibiru', totalVotes: 100000, validVotes: 50000, invalidVotes: 50000 },
    { id: 2, name: 'Kecamatan Babelan', totalVotes: 80000, validVotes: 40000, invalidVotes: 40000 },
    {
      id: 3,
      name: 'Kecamatan Rancaekek',
      totalVotes: 120000,
      validVotes: 60000,
      invalidVotes: 60000,
    },
    {
      id: 4,
      name: 'Kecamatan Bojongsoang',
      totalVotes: 95000,
      validVotes: 47500,
      invalidVotes: 47500,
    },
    {
      id: 5,
      name: 'Kecamatan Majalaya',
      totalVotes: 110000,
      validVotes: 55000,
      invalidVotes: 55000,
    },
    {
      id: 6,
      name: 'Kecamatan Katapang',
      totalVotes: 75000,
      validVotes: 37500,
      invalidVotes: 37500,
    },
    {
      id: 7,
      name: 'Kecamatan Dayeuhkolot',
      totalVotes: 105000,
      validVotes: 52500,
      invalidVotes: 52500,
    },
    {
      id: 8,
      name: 'Kecamatan Arcamanik',
      totalVotes: 88000,
      validVotes: 44000,
      invalidVotes: 44000,
    },
    {
      id: 9,
      name: 'Kecamatan Cileunyi',
      totalVotes: 102000,
      validVotes: 51000,
      invalidVotes: 51000,
    },
    {
      id: 10,
      name: 'Kecamatan Cicalengka',
      totalVotes: 90000,
      validVotes: 45000,
      invalidVotes: 45000,
    },
    { id: 11, name: 'Kecamatan Pacet', totalVotes: 85000, validVotes: 42500, invalidVotes: 42500 },
    {
      id: 12,
      name: 'Kecamatan Sumedang Selatan',
      totalVotes: 98000,
      validVotes: 49000,
      invalidVotes: 49000,
    },
    {
      id: 13,
      name: 'Kecamatan Lembang',
      totalVotes: 115000,
      validVotes: 57500,
      invalidVotes: 57500,
    },
    {
      id: 14,
      name: 'Kecamatan Padalarang',
      totalVotes: 92000,
      validVotes: 46000,
      invalidVotes: 46000,
    },
    {
      id: 15,
      name: 'Kecamatan Cikarang Barat',
      totalVotes: 100500,
      validVotes: 50250,
      invalidVotes: 50250,
    },
    {
      id: 16,
      name: 'Kecamatan Tambun Utara',
      totalVotes: 86000,
      validVotes: 43000,
      invalidVotes: 43000,
    },
    {
      id: 17,
      name: 'Kecamatan Kuningan',
      totalVotes: 94000,
      validVotes: 47000,
      invalidVotes: 47000,
    },
    {
      id: 18,
      name: 'Kecamatan Karawang Timur',
      totalVotes: 99000,
      validVotes: 49500,
      invalidVotes: 49500,
    },
    {
      id: 19,
      name: 'Kecamatan Subang',
      totalVotes: 107000,
      validVotes: 53500,
      invalidVotes: 53500,
    },
    {
      id: 20,
      name: 'Kecamatan Purwakarta',
      totalVotes: 89000,
      validVotes: 44500,
      invalidVotes: 44500,
    },
  ];
  const partyData = [
    { name: 'Independen', votes: 2000 },
    { name: 'Partai Aceh', votes: 3500 },
    { name: 'Partai Adil Sejahtera Aceh', votes: 1800 },
    { name: 'Partai Amanat Nasional (PAN)', votes: 2500 },
    { name: 'Partai Bulan Bintang (PBB)', votes: 1200 },
    { name: 'Partai Buruh', votes: 3000 },
    { name: 'Partai Darul Aceh', votes: 900 },
    { name: 'Partai Demokrasi Indonesia Perjuangan (PDIP)', votes: 4500 },
    { name: 'Partai Demokrat', votes: 3200 },
    { name: 'Partai Garda Republik Indonesia (GARUDA)', votes: 2800 },
    { name: 'Partai Gelombang Rakyat Indonesia (GELORA)', votes: 1500 },
    { name: "Partai Generasi Atjeh Beusaboh Tha'at Dan Taqwa (GABTHAT)", votes: 2000 },
    { name: 'Partai Gerakan Indonesia Raya (GERINDRA)', votes: 4000 },
    { name: 'Partai Golongan Karya (GOLKAR)', votes: 5000 },
    { name: 'Partai Hati Nurani Rakyat (HANURA)', votes: 1200 },
    { name: 'Partai Keadilan Sejahtera (PKS)', votes: 3500 },
    { name: 'Partai Keadilan dan Persatuan Indonesia (PKPI)', votes: 1800 },
    { name: 'Partai Kebangkitan Bangsa (PKB)', votes: 2500 },
    { name: 'Partai Kebangkitan Nusantara (PKN)', votes: 900 },
    { name: 'Partai Nanggroe Aceh (PNA)', votes: 4500 },
    { name: 'Partai Nasional Demokrat (NASDEM)', votes: 3200 },
    { name: 'Partai Persatuan Indonesia (PERINDO)', votes: 2800 },
    { name: 'Partai Persatuan Pembangunan (PPP)', votes: 1500 },
    { name: 'Partai Solidaritas Indonesia (PSI)', votes: 2000 },
    { name: 'Partai Soliditas Independen Rakyat Aceh (SIRA)', votes: 3500 },
    { name: 'Partai Ummat', votes: 1800 },
  ];

  const partyChartData = {
    series: partyData.map(({ name, votes }) => ({
      label: name,
      value: votes,
    })),
  };
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Data Kabupaten Bandung
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Suara"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Suara Sah"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Suara Tidak Sah"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Kecamatan"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          {/* create table for kecamatan */}
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Kecamatan</TableCell>
                  <TableCell align="right">Total Suara</TableCell>
                  <TableCell align="right">Suara Sah</TableCell>
                  <TableCell align="right">Suara Tidak Sah</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {kecamatanData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.totalVotes}</TableCell>
                      <TableCell align="right">{row.validVotes}</TableCell>
                      <TableCell align="right">{row.invalidVotes}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              component="div"
              count={kecamatanData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits title="Perolehan Suara" chart={partyChartData} />
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <AppConversionRates title="Perolehan Suara Per Partai" chart={partyChartData} />
        </Grid>

        <Grid container item xs={12} md={12} lg={12}>
          <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Kecamatan</TableCell>
                  {parties.map((partyImage, index) => (
                    <TableCell key={index}>
                      <img src={partyImage} alt={`Party ${index + 1}`} style={{ width: '20px' }} />
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.kecamatan}</TableCell>
                    {row.votes.map((vote, voteIndex) => (
                      <TableCell key={voteIndex}>{vote}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
