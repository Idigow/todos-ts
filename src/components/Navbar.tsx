import React from "react";


export const Navbar: React.FC = () =>(
    <nav>
        <div className="nav-wrapper teal accent-4">
            <form>
                <div className="input-field">
                    <input id="search" type="search" required/>
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                </div>
            </form>
        </div>
    </nav>
)
