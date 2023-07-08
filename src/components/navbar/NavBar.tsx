import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://dibrarq.arquivonacional.gov.br/uploads/r/camara-dos-deputados/conf/logo.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          {"\t\t"}
          <span className="navbar-title">Vigia Deputados</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
