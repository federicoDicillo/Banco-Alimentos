import React, { Fragment } from 'react';
import styles from '../../styles/pureTable.module.css';

const PureOngTable = ({ refTableData, data, onDelete }) => {
  const TableHeadPureTable = () => {
    return (
      <thead className={styles.tHeadPureTable}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre Ong</th>
          <th scope="col">Cuit</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Razon</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono</th>
          <th scope="col">Correo</th>
          <th scope="col"></th>
        </tr>
      </thead>
    );
  };

  const BodyTableAllOngData = ({ item, onDelete }) => {
    return (
      <tr ref={refTableData}>
        {<th scope="row">{item.id_ong} </th>}
        <th scope="row">{item.ongName}</th>
        <th scope="row">{'Cuit: ' + item.ongCuit}</th>
        <th scope="row">{item.ongHeadNm}</th>
        <th scope="row">{item.ongHeadLn}</th>
        <th scope="row">{item.ongReason} </th>
        <th scope="row">{item.ongAddress} </th>
        <th scope="row">{item.ongPhone} </th>
        <th scope="row">{item.ongEmail} </th>
        <th scope="row"></th>
        <th scope="row">
          <button
            className="buttonDelete"
            onClick={(event) => onDelete(item.id_ong)}
          >
            Delete
          </button>
        </th>
      </tr>
    );
  };

  return (
    <table className="table" ref={refTableData}>
      <TableHeadPureTable />
      <tbody className={styles.tBodyPureTable}>
        {data.map((item, key) => (
          <Fragment key={key}>
            <BodyTableAllOngData
              item={item}
              onDelete={(event) => onDelete(item.id_ong)}
            />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};
export default PureOngTable;
