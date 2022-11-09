import React, {
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import axios from '../../services/axiosDateData.js';
import AuthContext from '../../context/authProvider';
import PureTable from './pureTable';
import styles from '../../styles/tablesWithInputs.module.css';
const TableDateData = () => {
  const [data, setData] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [stateRequestData, setStateRequestData] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ref, setRef] = useState(false);
  const refTableDateData = useRef();
  const refDate = useRef();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    setRef(!ref);
    refTableDateData.current.focus();
    setRef(!ref);
  }, []);

  let config = {
    headers: {
      Authorization: 'Bearer' + auth.accessToken,
    },
  };

  const handleOnChange = useCallback(() => {
    const value = refDate.current.value;
    setSearchDate(value);
  }, [searchDate]);

  const requestGetSearchDate = useCallback(async () => {
    try {
      const response = await axios.get(`/${searchDate}`, config);
      const valueRequestGet = response.data;
      setData(valueRequestGet);
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No tiene respuesta del servidor');
        setSuccess(false);
      } else if (err.response?.status === 401) {
        setErrMsg('No tiene autorizacion');
        setSuccess(false);
      } else if (err.response?.status === 400) {
        setErrMsg('No hay donaciones en esta fecha');
        setSuccess(false);
      } else {
        setErrMsg('Error actualice la pagina ');
        setSuccess(false);
      }
      refTableDateData.current.focus();
    }
    setSuccess(!success);
  }, [searchDate]);

  useEffect(() => {
    setStateRequestData(!stateRequestData);
    requestGetSearchDate();
    setStateRequestData(!stateRequestData);
  }, [searchDate]);

  return (
    <div>
      <label className={styles.categorySearch} htmlFor="fecha">
        Fecha:
      </label>
      <input
        type="text"
        placeholder="(2022-10-02)"
        ref={refDate}
        onChange={handleOnChange}
        className={styles.inputSearch}
      />
      <PureTable refTableData={refTableDateData} data={data} />
      {!success ? errMsg : ''}
    </div>
  );
};

export default TableDateData;
