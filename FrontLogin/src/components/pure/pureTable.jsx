import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';
import axios from '../../services/axiosUpdateData.js';
import AuthContext from '../../context/authProvider';
import styles from '../../styles/pureTable.module.css';

const PureTable = ({ refTableData, data }) => {
  const perishable = 'Perecible';
  const notPerishable = 'No Perecible';
  const [isEdit, setIsEdit] = useState(null);
  const [errMsg, setErrMsg] = useState('');
  const [stateSearch, setStateSearch] = useState(true);
  const [newValue, setNewValue] = useState({});
  const refDonor = useRef();
  const refDonorLastname = useRef();
  const refInfoDonor = useRef();
  const refPhone = useRef();
  const refDonation = useRef();
  const refQuantity = useRef();
  const refPerishable = useRef();
  const refExpiration = useRef();
  const refDate = useRef();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (data === {}) {
      setStateSearch(true);
    } else {
      setStateSearch(false);
    }
  }, [data]);

  const TableHeadPureTable = () => {
    return (
      <thead className={styles.tHeadPureTable}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Info. Donador</th>
          <th scope="col">Telefono</th>
          <th scope="col">Donacion</th>
          <th scope="col">Cantidad</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Fecha</th>
          {/* <th scope="col"></th>
          <th scope="col"></th> */}
        </tr>
      </thead>
    );
  };

  const TableBodyTableAllData = () => {
    const BodyTableAllData = ({ item }) => {
      return (
        <tr>
          <th scope="row">{item.id_donation}</th>
          <th scope="row">
            {item.user ? item.user.userName : item.company.coName}{' '}
          </th>
          <th scope="row">{item.user ? item.user.userLastname : ''} </th>
          <th scope="row">
            {item.user
              ? 'Dni:   ' + item.user.userDni
              : 'Cuit:   ' + item.company.coCuit}{' '}
          </th>
          <th scope="row">
            {item.user ? item.user.userPhone : item.company.coPhone}{' '}
          </th>
          <th scope="row">{item.donCategory} </th>
          <th scope="row">{item.donDetails} </th>
          <th scope="row">
            {item.donPerishable ? perishable : notPerishable}{' '}
          </th>
          <th scope="row">{item.donExpiration ? item.donExpiration : ''} </th>
          <th scope="row">{item.donDate} </th>
          {/* <th scope="row">
            <button
              className="button"
              onClick={(event) => {
                handleEditClick(event, item);
              }}
            >
              Edit
            </button>
          </th>
          <th scope="row">
            <button
              className="buttonDelete"
              onClick={(event) => onDelete(item.id_donation)}
            >
              Delete
            </button>
          </th> */}
        </tr>
      );
    };

    /*  const EditTableBody = ({ item, handleEditFormChange }) => {
      const handleClickUpdateData = useCallback(async (event, item) => {
        const valueDonor = refDonor.current.value;
        const valueDonorLastname = refDonorLastname.current.value;
        const valueInfoDonor = refInfoDonor.current.value;
        const valuePhone = refPhone.current.value;
        const valueDonation = refDonation.current.value;
        const valueQuantity = refQuantity.current.value;
        const valuePerishable = refPerishable.current.value;
        const valueExpiration = refExpiration.current.value;
        const valueDate = refDate.current.value;
        const requestUpdate = {
          donCategory: valueDonation,
          donDate: valueDate,
          donDetails: valueQuantity,
          donExpiration: valueExpiration,
          donPerishable: valuePerishable,
        };
        let config = {
          headers: {
            Authorization: 'Bearer' + auth.accessToken,
          },
        };

        event.preventDefault();
        const valueId = item.id_donation;
        setIsEdit(valueId);

        if (isEdit === item.id_donation && item.user) {
          setNewValue({
            donCategory: valueDonation,
            donDate: valueDate,
            donDetails: valueQuantity,
            donExpiration: valueExpiration,
            donPerishable: valuePerishable,
            user: {
              userDni: valueInfoDonor,
              userName: valueDonor,
              userLastname: valueDonorLastname,
              userPhone: valuePhone,
            },
          });

          try {
            await axios.put(`${isEdit}`, requestUpdate, config);
          } catch (err) {
            if (!err?.response) {
              setErrMsg('No tiene respuesta del servidor');
            } else if (err.response?.status === 401) {
              setErrMsg('No tiene autorizacion');
            } else {
              setErrMsg('Error actualice la pagina ');
            }
          }
        } else if (isEdit === item.id_donation && item.company) {
          setNewValue({
            donCategory: valueDonation,
            donDate: valueDate,
            donDetails: valueQuantity,
            donExpiration: valueExpiration,
            donPerishable: valuePerishable,
            company: {
              coName: valueInfoDonor,
              coCuit: valueInfoDonor,
              coPhone: valuePhone,
            },
          });
          try {
            await axios.put(`${isEdit}`, requestUpdate, config);
          } catch (err) {
            if (!err?.response) {
              setErrMsg('No tiene respuesta del servidor');
            } else if (err.response?.status === 401) {
              setErrMsg('No tiene autorizacion');
            } else {
              setErrMsg('Error actualice la pagina ');
            }
          }
        } else {
        }
      }, []);

      const handleClickCancel = useCallback(() => {
        setIsEdit(null);
      }, []);

      return (
        <tr>
          <th scope="row" value={item.id_donation}>
            {item.id_donation}
          </th>
          <th scope="row">
            {item.user ? item.user.userName : item.company.coName}{' '}
          </th>
          <th scope="row">{item.user ? item.user.userLastname : ''} </th>
          <th scope="row">
            {item.user
              ? 'Dni:   ' + item.user.userDni
              : 'Cuit:   ' + item.company.coCuit}{' '}
          </th>
          <th scope="row">
            {item.user ? item.user.userPhone : item.company.coPhone}{' '}
          </th>
          <th scope="row">
            <input
              type="text"
              onChange={handleEditFormChange}
              value={item.donCategory}
              ref={refDonation}
            />
          </th>
          <th scope="row">
            <input
              type="text"
              onChange={handleEditFormChange}
              value={item.donDetails}
              ref={refQuantity}
            />
          </th>
          <th scope="row">
            <input
              type="text"
              onChange={handleEditFormChange}
              value={item.donPerishable ? perishable : notPerishable}
              ref={refPerishable}
            />
          </th>
          <th scope="row">
            <input
              type="text"
              onChange={handleEditFormChange}
              value={item.donExpiration ? item.donExpiration : ''}
              ref={refExpiration}
            />
          </th>
          <th scope="row">
            <input
              type="text"
              onChange={handleEditFormChange}
              value={item.donDate}
              ref={refDate}
            />
          </th>
          <th scope="row">
            <button className="button" onClick={handleClickUpdateData}>
              Cargar
            </button>
          </th>
          <th scope="row">
            <button className="button" onClick={handleClickCancel}>
              Cancelar
            </button>
          </th>
        </tr>
      );
    }; */

    /*   const handleChange = useCallback((event, item) => {
      const valueDonor = refDonor.current.value;
      const valueDonorLastname = refDonorLastname.current.value;
      const valueInfoDonor = refInfoDonor.current.value;
      const valuePhone = refPhone.current.value;
      const valueDonation = refDonation.current.value;
      const valueQuantity = refQuantity.current.value;
      const valuePerishable = refPerishable.current.value;
      const valueExpiration = refExpiration.current.value;
      const valueDate = refDate.current.value;
      event.preventDefault();
      if (isEdit === item.id_donation && item.user) {
        setNewValue({
          donCategory: valueDonation,
          donDate: valueDate,
          donDetails: valueQuantity,
          donExpiration: valueExpiration,
          donPerishable: valuePerishable,
          user: {
            userDni: valueInfoDonor,
            userName: valueDonor,
            userLastname: valueDonorLastname,
            userPhone: valuePhone,
          },
        });
      } else if (isEdit === item.id_donation && item.company) {
        setNewValue({
          donCategory: valueDonation,
          donDate: valueDate,
          donDetails: valueQuantity,
          donExpiration: valueExpiration,
          donPerishable: valuePerishable,
          company: {
            coName: valueInfoDonor,
            coCuit: valueInfoDonor,
            coPhone: valuePhone,
          },
        });
      } else {
      }
    }, []);

    const handleOnClickEditButton = useCallback((event, item) => {
      event.preventDefault();
      setIsEdit(item.id_donation);
    }, []);
 */
    return (
      <Fragment>
        {stateSearch ? (
          'No se encuentra'
        ) : (
          <tbody className={styles.tBodyPureTable}>
            {data.map((item, key) => (
              <Fragment key={key}>
                {/* {isEdit === item.id_donation ? (
            ''
          ) : (

          )} */}
                <BodyTableAllData item={item} />
              </Fragment>
            ))}
          </tbody>
        )}{' '}
      </Fragment>
    );
  };

  return (
    <form>
      <table className="table table-bordered" ref={refTableData}>
        <TableHeadPureTable />
        <TableBodyTableAllData />
      </table>
    </form>
  );
};

export default PureTable;
