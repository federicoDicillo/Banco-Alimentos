import React, { useRef, useState } from 'react';
import TableAllDataContainer from '../components/containers/tableAllDataContainer';
import TableDateDataContainer from '../components/containers/tableDateDataContainer';
import TableOngsContainer from '../components/containers/tableOngsContainer';
import TableSearchDataContainer from '../components/containers/tableSearchDataContainer';
import styles from '../styles/pagedataTable.module.css';

const DataTable = () => {
  let allDonations = 'Todas las donaciones';
  let categoryDonations = 'Donaciones por categoria';
  let dateDonations = 'Donaciones por fecha';
  const [stateAllDonations, setStateAllDonations] = useState(false);
  const [stateCategoryDonations, setStateCategoryDonations] = useState(false);
  const [stateDateDonations, setStateDateDonations] = useState(false);

  const refButtonAll = useRef();
  const refButtonCategory = useRef();
  const refButtonDate = useRef();

  const handleOnClickButtonAll = () => {
    refButtonAll.current.focus();
    setStateAllDonations(!stateAllDonations);
    setStateCategoryDonations(false);
    setStateDateDonations(false);
  };

  const handleOnClickButtonCategory = () => {
    refButtonCategory.current.focus();
    setStateCategoryDonations(!stateCategoryDonations);
    setStateAllDonations(false);
    setStateDateDonations(false);
  };

  const handleOnClickButtonDate = () => {
    refButtonDate.current.focus();
    setStateDateDonations(!stateDateDonations);
    setStateCategoryDonations(false);
    setStateAllDonations(false);
  };

  const HeadDataTable = () => {
    return (
      <div className="row">
        {stateAllDonations ? (
          ''
        ) : (
          <div className="col-md-2 well">
            <button
              onClick={handleOnClickButtonAll}
              name="all"
              ref={refButtonAll}
              className={styles.chooseTableButton}
            >
              {allDonations}
            </button>
          </div>
        )}
        {stateCategoryDonations ? (
          ''
        ) : (
          <div className="col-md-2 well">
            <button
              onClick={handleOnClickButtonCategory}
              name="category"
              ref={refButtonCategory}
              className={styles.chooseTableButton}
            >
              {categoryDonations}
            </button>
          </div>
        )}
        {stateDateDonations ? (
          ''
        ) : (
          <div className="col-md-3 well">
            <button
              onClick={handleOnClickButtonDate}
              name="date"
              ref={refButtonDate}
              className={styles.chooseTableButton}
            >
              {dateDonations}
            </button>
          </div>
        )}
      </div>
    );
  };

  const BodyDataTable = () => {
    return (
      <div className="py-5">
        {stateAllDonations ? (
          <div>
            <h1 className={styles.titleTables}>{allDonations}</h1>
            <TableAllDataContainer />
          </div>
        ) : (
          ''
        )}
        {stateCategoryDonations ? (
          <div>
            <h2 className={styles.titleTables}>{categoryDonations}</h2>
            <TableSearchDataContainer />
          </div>
        ) : (
          ''
        )}
        {stateDateDonations ? (
          <div>
            <h3 className={styles.titleTables}>{dateDonations}</h3>
            <TableDateDataContainer />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="headerPageDataTable">
        <h6 className={styles.titleDataTable}>Tablas de donaciones</h6>
      </div>
      <div>
        <HeadDataTable />
        <BodyDataTable />
        <TableOngsContainer />
      </div>
    </div>
  );
};

export default DataTable;
