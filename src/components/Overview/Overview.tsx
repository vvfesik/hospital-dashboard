import { IconBuilding, IconDoctor } from 'components/Icons';
import { IOverviewData } from 'App';
import styles from './index.module.scss';

const Overview = (props: IOverviewData) => {
  const { address, name, number_of_cities, total_doctors } = props;

  if (!address || !name) return null;

  return (
    <section>
      <h2>Analytics Overview</h2>
      <div className={styles.overview}>
        <h3>{name}</h3>
        <address>{address}</address>
        <ul>
          {!!total_doctors && (
            <li>
              <i><IconDoctor /></i>
              <dl>
                <dt>Total doctors</dt>
                <dd>{total_doctors}</dd>
              </dl>
            </li>
          )}
          {!!number_of_cities && (
            <li>
              <i><IconBuilding /></i>
              <dl>
                <dt>Number of dep.</dt>
                <dd>{number_of_cities}</dd>
              </dl>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Overview;
