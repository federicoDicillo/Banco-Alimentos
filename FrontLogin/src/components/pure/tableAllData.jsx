import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import axios from '../../services/axiosAllData';
import AuthContext from '../../context/authProvider';
import PureTable from './pureTable';

const TableAllData = () => {
  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [stateRequestData, setStateRequestData] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ref, setRef] = useState(false);
  const refTableAllData = useRef();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    setRef(!ref);
    refTableAllData.current.focus();
    setRef(!ref);
  }, []);

  let config = {
    headers: {
      Authorization: 'Bearer' + auth.accessToken,
    },
  };

  const requestGet = useCallback(async () => {
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
      refTableAllData.current.focus();
    }
    setSuccess(!success);
  }, []);

  useEffect(() => {
    setStateRequestData(!stateRequestData);
    requestGet();
    setStateRequestData(!stateRequestData);
  }, []);

  return <PureTable refTableData={refTableAllData} data={data} />;
};

export default TableAllData;
