import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  Fragment,
} from 'react';
import styles from '../styles/login.module.css';
import AuthContext from '../context/authProvider';
import axios from '../services/axiosLogin';
import purpleDesign from '../assets/rectanglePurple .png';
import bagWithFood from '../assets/ecoBagWithFood.png';
import { useNavigate } from 'react-router-dom';
const LOGIN_URL = '/login';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleOnSubmit = async (e) => {
    const data = { nombreUsuario: user, password: pwd };
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, data);
      const accessToken = String(response.data.token);
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setSuccess(true);
      navigate('/datatable');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No tiene respuesta del servidor');
      } else if (err.response?.status === 400) {
        setErrMsg('Usario o contraseña incorrecto');
      } else if (err.response?.status === 401) {
        setErrMsg('No tiene autorizacion');
      } else {
        setErrMsg('Error al iniciar sesion ');
      }
      errRef.current.focus();
    }
  };

  return (
    <Fragment>
      <div className={styles.section}>
        <p
          ref={errRef}
          className={errMsg ? styles.errmsg : styles.offscreen}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className={styles.titleLogin}>Bienvenido</h1>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <label className={styles.titleInterface} htmlFor="usuario">
            Usuario:
          </label>
          <input
            type="text"
            id="usuario"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            className={styles.interface}
            required
          />
          <label className={styles.titleInterface} htmlFor="contraseña">
            Contraseña:
          </label>
          <input
            type="password"
            id="contraseña"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            className={styles.interface}
            required
          />
          <button className={styles.buttonLogin}>Iniciar sesión</button>
        </form>
      </div>
      <div>
        <img src={purpleDesign} alt="" className={styles.purpleDesign} />
        <img
          src={bagWithFood}
          alt="Mochila con comida"
          className={styles.bagWithFood}
        />
      </div>
    </Fragment>
  );
};
export default Login;
