import React, { Fragment } from 'react';

const VehicleForm = ({ vehicle, setVehicle }: any) => {
  const onClickVehicle = (event: {
    currentTarget: any;
    target: { value: any };
  }) => {
    const value = event.currentTarget.value;
    setVehicle(value);
  };

  return (
    <Fragment>
      <select
        className="btn btn-dropdown btn-success p-1"
        name="Vehículo"
        onChange={onClickVehicle}
        value={vehicle}
      >
        <option>Camión</option>
        <option>Camioneta</option>
        <option>Auto</option>
        <option>Motocicleta</option>
        <option>Bicicleta</option>
      </select>
    </Fragment>
  );
};

export default VehicleForm;
