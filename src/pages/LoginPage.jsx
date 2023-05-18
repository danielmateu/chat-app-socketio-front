import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/auth/AuthContext"
import Swal from "sweetalert2"


const LoginPage = () => {

    const { login } = useContext(AuthContext)

    const [form, setForm] = useState({
        email: '',
        password: '',
        rememberme: false
    })

    useEffect(() => {
        const email = localStorage.getItem('email')

        if (email) {
            setForm((form) => ({
                ...form,
                email,
                rememberme: true
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const onChange = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const toggleCheck = () => {
        setForm({
            ...form,
            rememberme: !form.rememberme
        })
    }

    const onSubmit = async (ev) => {
        ev.preventDefault()

        form.rememberme ? localStorage.setItem('email', form.email) : localStorage.removeItem('email')

        const { email, password } = form

        // TODO: Llamar al backend
        const ok = await login(email, password)
        // console.log(ok);
        if (!ok) {
            Swal.fire('Error', 'Verifique el usuario y contraseña', 'error')
        }

    }

    const todoOk = () => {
        return (form.email.length > 0 && form.password.length > 0) ? true : false
    }

    return (
        <form
            onSubmit={onSubmit}
            className="login100-form validate-form flex-sb flex-w"
        >
            <span className="login100-form-title mb-3">
                Chat - Ingreso
            </span>

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
                // readOnly
                />
                <span className="focus-input100"></span>
            </div>



            <div className="container-login100-form-btn m-t-17">
                <button
                    onClick={onSubmit}
                    disabled={!todoOk()}
                    type="submit"
                    className="login100-form-btn">
                    Ingresar
                </button>
            </div>

            <div className="row mt-3 d-flex align-items-center">
                <div
                    onClick={() => toggleCheck()}
                    className="col"
                >
                    <input
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
                        name="rememberme"
                        checked={form.rememberme}
                        onChange={onChange}
                    />
                    <label className="label-checkbox100">
                        Recordarme
                    </label>
                </div>

                <div className="col text-end">
                    <NavLink to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </NavLink>

                </div>
            </div>

        </form>
    )
}

export default LoginPage