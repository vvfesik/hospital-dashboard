import { useEffect, useState } from 'react';
import { Header, Overview, Sidebar, Stats } from 'components';
import styles from './app.module.scss';

export interface IOverviewData {
  id?: string;
  name?: string;
  address?: string;
  total_doctors?: number;
  number_of_cities?: number;
}

export interface IStatsData {
  corona_cases?: number;
  active_cases?: number;
  recovered?: number;
  deaths?: number;
  testing_done?: number;
  beds_available?: number;
}

export type StatsDataKey = keyof { [K in keyof IStatsData]: IStatsData[K] };

export interface IHospitalData extends IOverviewData {
  stats: IStatsData;
}

function App() {
  const [hospitalData, setHospitalData] = useState<IHospitalData>();
  const fetchHospitalData = async () => {
    const response = await fetch('http://localhost:3005/hospital');
    const data = await response.json();
    setHospitalData(data);
  };

  useEffect(() => {
    fetchHospitalData();
  }, []);

  const { stats, ...overviewData } = hospitalData || {};

  return (
    <div className={styles.appContainer}>
      <Sidebar className={styles.appNav} />
      <main className={styles.appMain}>
        <Header />
        <Overview {...overviewData} />
        <Stats {...stats} />
      </main>
    </div>
  );
}

export default App;
