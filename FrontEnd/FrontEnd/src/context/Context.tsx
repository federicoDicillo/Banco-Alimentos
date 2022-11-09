import { createContext, useContext, useState } from 'react';

const AppContext = createContext({
  voluntarys: [],
  companysDonations: [],
  peoplesDonations: [],
  createVoluntary: (voluntary: any) => {},
  getVoluntary: (id: any) => {},
  updateVoluntary: (voluntary: any) => {},
  createCompanyDonation: (company: any) => {},
  getCompanyDonation: (id: any) => {},
  updateCompanyDonation: (company: any) => {},
  createPeopleDonation: (people: any) => {},
  updatePeopleDonation: (id: any) => {},
  getPeopleDonation: (people: any) => {},
});

const Context = ({ children }: any) => {
  const [voluntarys, setVoluntarys]: any[] = useState([]);
  const [companysDonations, setCompanysDonations]: any[] = useState([]);
  const [peoplesDonations, setPeoplesDonations]: any[] = useState([]);

  const createVoluntary = (voluntary: object) => {
    const temp: any[] = [...voluntarys];
    temp.push(voluntary);

    setVoluntarys([...temp]);
  };

  const getVoluntary = (id: any) => {
    const voluntary: any = voluntarys.find(
      (voluntary: any) => voluntary.id === id
    );

    return voluntary;
  };

  const updateVoluntary = (voluntary: { id: any }) => {
    const index: any = voluntarys.findIndex((i: any) => i.id === voluntary.id);
    const temp = [...voluntarys];

    temp[index] = { ...voluntary };

    return true;
  };

  const createCompanyDonation = (company: any) => {
    const temp: any[] = [...companysDonations];
    temp.push(companysDonations);

    setCompanysDonations([...temp]);
  };

  const getCompanyDonation = (id: any) => {
    const companyDonation: any = companysDonations.find(
      (companyDonation: any) => companyDonation.id === id
    );

    return companyDonation;
  };

  const updateCompanyDonation = (company: { id: any }) => {
    const index: any = companysDonations.findIndex(
      (i: any) => i.id === company.id
    );
    const temp = [...companysDonations];

    temp[index] = { ...company };

    return true;
  };

  const createPeopleDonation = (people: any) => {
    const temp: any[] = [...peoplesDonations];
    temp.push(peoplesDonations);

    setPeoplesDonations([...temp]);
  };

  const getPeopleDonation = (id: any) => {
    const peopleDonation: any = peoplesDonations.find(
      (peopleDonation: any) => peopleDonation.id === id
    );

    return peopleDonation;
  };

  const updatePeopleDonation = (people: { id: any }) => {
    const index: any = peoplesDonations.findIndex(
      (i: any) => i.id === people.id
    );
    const temp = [...peoplesDonations];

    temp[index] = { ...people };

    return true;
  };

  return (
    <AppContext.Provider
      value={{
        voluntarys,
        companysDonations,
        peoplesDonations,
        createVoluntary,
        getVoluntary,
        updateVoluntary,
        createCompanyDonation,
        getCompanyDonation,
        updateCompanyDonation,
        createPeopleDonation,
        getPeopleDonation,
        updatePeopleDonation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

export const useAppContext = () => {
  return useContext(AppContext);
};
