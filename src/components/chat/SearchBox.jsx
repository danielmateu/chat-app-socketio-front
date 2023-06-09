import { useContext } from "react"
import { AuthContext } from "../../context/auth/AuthContext"



export const SearchBox = () => {

    const {auth, logout} = useContext(AuthContext)
    

    return (
        <>
            {/* <!-- Searchbox inicio --> */}
            <div className="headind_srch">
                <div className="recent_heading mt-2">
                    <h4>{auth.name}</h4>
                </div>
                <div className="srch_bar">
                    <div className="stylish-input-group">
                        <button 
                            type="button"
                            onClick={logout}
                            className="btn text-danger">
                            Salir
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- Searchbox Fin --> */}
        </>
    )
}
