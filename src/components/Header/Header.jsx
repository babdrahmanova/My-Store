import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Главное
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Наши товары
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                О компании
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Контакты
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Корзина
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;