import React from "react";
import { Link } from "react-router-dom"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand ms-3" href="#"> Navbar </span>
				</Link>
				<form className="d-flex col-4">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-outline-success col-2" type="submit">
					<i class="fa-sharp fa-solid fa-magnifying-glass"></i>
					</button>
				</form>
				<div className="d-flex me-3" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown me-3">
							<a
								className="nav-link dropdown"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
							<img src="https://bidunart.com/wp-content/uploads/2019/11/Portrait157a-819x1024.jpg" class="rounded-circle" alt="..." style={{width:60, height:60}}></img>
							</a>
							<ul className="dropdown-menu dropdown-menu-end"  aria-labelledby="navbarDropdown">
							<li>
									<a className="dropdown-item" href="#">
										Profile
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Messages
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Create events
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Log out
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	)
};
