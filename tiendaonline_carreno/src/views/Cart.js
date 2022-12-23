import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCart } from "../components/itemCart";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from '../Context/CartContext';
import { Link } from "react-router-dom";
const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { productsAdded, clear, totalCompra, finalizarCompra} = useContext(CartContext);

  const handleFinalizePurchase = (productsAdded,totalCompra,values) => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      finalizarCompra(productsAdded,totalCompra,values);
      alert("Compra finalizada con Exito, en breve nos comunicaremos contigo!");
      navigate("/")
      // navigate("/category/guitarras");
    }, 2000);
  };

  // form
  const [ showForm, setShowForm] = useState(false);
  const [values, setValues] = useState({
    email: "",
    username: "",
    domicilio:"",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    handleFinalizePurchase(productsAdded,totalCompra,values);
  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }
  return (
    <Layout>
      <div>
        <h2>Tu Carrito</h2>
        {productsAdded.length === 0 ? (
        <div className="row d-flex justify-content-center p-5 ">
          <div className="d-flex flex-column text-center col-md-6 bg-dark border border-danger rounded p-5">
            <h2 className="h2 text-danger" >Aún no has agregado productos!</h2>
            <Link to="/">Regresar a la Página de Inicio</Link>
          </div>
        </div>) : 
        (
          <div className="d-flex flex-column">
            <div>
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;
                return (
                <div className="d-flex flex-row justify-content-center p-2 border">
                  <ItemCart product={product.item} quantityAdded={quantityAdded}/>
                  <TrashWidget itemId={product.item.id} />
                </div>
                );
              })}
            </div>
            <div className="text-center m-2">Total: ${totalCompra}</div>
            <div className="text-center">
              {isLoading ? (
                <p className="btn btn-warning">Loading...</p>
              ) : (
                <div>
                  
                  {showForm ? (
                    // Fromulario para el ingreso de datos del usuario al comprar
                    <div className="row d-flex justify-content-center border p-3 m-5">
                      <div className="col-12 col-sm-6">
                        <form onSubmit={handleSubmit}>
                          <h4>Completa tus datos para finalizar la Compra!</h4>
                          {/* email */}
                          <div className="form-group row p-2">
                            <label htmlFor="email" className="col-lg-3 col-form-label">Email</label>
                            <div className="col-lg-9">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                value={values.email}
                                required="required" 
                                className="form-control"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          {/* nombre y apellido */}
                          <div className="form-group row p-2">
                            <label htmlFor="password" className="col-lg-3 col-form-label">Nombre y apellido</label>
                            <div className="col-lg-9 col-12">
                              <input
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                required="required" 
                                value={values.username}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          {/* domicilio */}
                          <div className="form-group row p-2">
                            <label htmlFor="password" className="col-lg-3 col-form-label">Domicilio</label>
                            <div className="col-lg-9">
                              <input
                                id="domicilio"
                                name="domicilio"
                                type="text"
                                className="form-control"
                                required="required" 
                                value={values.domicilio}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <button className="btn btn-success" type="submit">Terminar Compra</button>
                        </form>
                      </div>  
                    </div>
                  ) : 
                  <button className="btn btn-success" onClick={()=>{setShowForm(true)}}>Continuar Compra</button>}
                  
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;