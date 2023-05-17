import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/auth/AuthContext"
import Swal from "sweetalert2"

const RegisterPage = () => {

    const { register } = useContext(AuthContext)

    const [form, setForm] = useState({
        nombre: '',
        email: '',
        password: '',

    })


    const onChange = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = async (ev) => {
        ev.preventDefault()

        const { nombre: nombre, email, password } = form
        const msg = await register(nombre, email, password)
        msg === undefined ? Swal.fire('Bienvenido!', 'Registro exitoso', 'success') : Swal.fire('Error', msg, 'error')

        // A los 3 segundos redireccionar a la pagina de login y limpiar el formulario
        setTimeout(() => {
            setForm({
                nombre: '',
                email: '',
                password: '',
            })
            // Redireccionar a la pagina de login
            window.location.href = '/auth/login'
        }, 2000)

    }

    // Desabilitar el boton de registro si el formulario no es valido
    const isValidForm = () => {
        return form.nombre.length > 0 && form.email.length > 0 && form.password.length > 0
    }

    return (
        <form
            onSubmit={onSubmit}
            className="login100-form validate-form flex-sb flex-w"
        >
            <span className="login100-form-title mb-3">
                Chat - Registro
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>


            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>


            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button
                    type="submit"
                    disabled={!isValidForm()}
                    className="login100-form-btn"
                >
                    Crear cuenta
                </button>
            </div>

            <div className="row mt-3">
                <div className="text-end">
                    <NavLink to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                    </NavLink>
                </div>
            </div>



        </form>
    )
}

export default RegisterPage