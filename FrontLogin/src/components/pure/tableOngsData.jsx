import React, {
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
  Fragment,
} from 'react';
import axios from '../../services/axiosOngsData';
import AuthContext from '../../context/authProvider';
import PureOngTable from './pureOngTable';
import styles from '../../styles/tableOngsData.module.css';

const TableOngsData = () => {
  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [stateOngsTable, setStateOngsTable] = useState(false);
  const refOngsButton = useRef();
  const { auth } = useContext(AuthContext);
  const refTableOngsData = useRef();
  const close = 'Cerrar';
  const ongsTable = 'Ongs';
  let config = {
    headers: {
      Authorization: 'Bearer' + auth.accessToken,
    },
  };

  const requestGet = useCallback(async (event) => {
    event.preventDefault();
    refOngsButton.current.focus();
    setStateOngsTable(!stateOngsTable);
    const endPoint = '/list';
    try {
      const response = await axios.get(endPoint, config);
      const valueRequestGet = response.data;
      setData(valueRequestGet);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No tiene respuesta del servidor');
      } else if (err.response?.status === 401) {
        setErrMsg('No tiene autorizacion');
      } else {
        setErrMsg('Error actualice la pagina ');
      }
      refTableOngsData.current.focus();
    }
    setSuccess(!success);
  }, []);
  const closeOngTable = useCallback((event) => {
    setStateOngsTable(false);
  }, []);

  const HeadOngsTable = () => {
    return (
      <div>
        <h1 className={styles.titleOngsTable}>Tabla de ongs</h1>
        {stateOngsTable ? (
          <button
            name="close"
            ref={refOngsButton}
            onClick={(event) => closeOngTable(event)}
            className={styles.chooseOngsTableButton}
          >
            {close}
          </button>
        ) : (
          <button
            name="ongs"
            ref={refOngsButton}
            onClick={(event) => requestGet(event)}
            className={styles.chooseOngsTableButton}
          >
            {ongsTable}
          </button>
        )}
      </div>
    );
  };

  const handleOnDelete = (id_ong) => {
    const endPoint = `/${id_ong}`;
    try {
      axios.delete(endPoint, config);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No tiene respuesta del servidor');
      } else if (err.response?.status === 401) {
        setErrMsg('No tiene autorizacion');
      } else {
        setErrMsg('Error actualice la pagina ');
      }
    }
  };
  return (
    <div>
      <HeadOngsTable />
      {stateOngsTable ? (
        <Fragment>
          <PureOngTable
            refTableData={refTableOngsData}
            data={data}
            onDelete={handleOnDelete}
          />
        </Fragment>
      ) : (
        ''
      )}
    </div>
  );
};

export default TableOngsData;
