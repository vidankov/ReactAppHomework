function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">Навбар</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Главная</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Ссылка</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Выпадающий список
                          </a>
                          <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Действие</a></li>
                              <li><a className="dropdown-item" href="#">Другое действие</a></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                          </ul>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link disabled">Отключенная</a>
                      </li>
                  </ul>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
                          <button className="btn btn-outline-success" type="submit">Поиск</button>
                  </form>
              </div>
          </div>
      </nav>
  );
}

export default Header;