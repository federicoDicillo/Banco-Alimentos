import React, {
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import axios from '../../services/axiosSearch.js';
import AuthContext from '../../context/authProvider';
import PureTable from './pureTable';
import styles from '../../styles/tablesWithInputs.module.css';

const TableSearchData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [stateRequestData, setStateRequestData] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ref, setRef] = useState(false);
  const refTableSearchData = useRef();
  const refSearch = useRef();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    setRef(!ref);
    refTableSearchData.current.focus();
    setRef(!ref);
  }, []);

  let config = {
    headers: {
      Authorization: 'Bearer' + auth.accessToken,
    },
  };
  const handleOnChange = useCallback(() => {
    const value = refSearch.current.value;
    setSearch(value);
  }, [search]);

  const requestGetSearch = useCallback(async () => {
    try {
      const response = await axios.get(`/${search}`, config);
      const valueRequestGet = response.data;
      setData(valueRequestGet);
      setSuccess(!success);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No tiene respuesta del servidor');
        setSuccess(false);
      } else if (err.response?.status === 401) {
        setErrMsg('No tiene autorizacion');
        setSuccess(false);
      } else if (err.response?.status === 404) {
        setErrMsg('No se encuentra la categoria');
        setSuccess(false);
      } else {
        setErrMsg('Error actualice la pagina ');
        setSuccess(false);
      }
      refTableSearchData.current.focus();
    }
  }, [search]);

  useEffect(() => {
    setStateRequestData(!stateRequestData);
    requestGetSearch();
    setStateRequestData(!stateRequestData);
  }, [search]);
  return (
    <div>
      <label className={styles.categorySearch} htmlFor="categoria">
        Categoria:
      </label>
      <input
        type="text"
        placeholder="Escriba la categoria"
        ref={refSearch}
        onChange={handleOnChange}
        className={styles.inputSearch}
      />
      <PureTable refTableData={refTableSearchData} data={data} />
      {!success ? errMsg : ''}
    </div>
  );
};

export default TableSearchData;
