import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
     <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
		<div class="container">
			<div class="navbar-brand">
				<span class="navbar-caption-wrap"><Link className='navbar-caption text-secondary display-4' to="/">Clean</Link></span>
			</div>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<div class="hamburger">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav nav-dropdown" data-app-modern-menu="true"><li className="nav-item">
				<Link className='nav-link link text-secondary display-7' to="/prices">Услуги</Link></li>
					<li className="nav-item">
					<Link className='nav-link link text-secondary display-7' to="/contacts">Контакты</Link></li>
						<li className="nav-item">
						<Link className='nav-link link text-secondary display-7' to="/prices">Цены</Link></li>
						<li className="nav-item">
						<Link className='nav-link link text-secondary display-7' to="/login">Войти</Link></li>
						<Link className='btn btn-outline-primary' to="/addUser">Регистрация</Link>
</ul>
							</div>
		</div>
	</nav>

	  
    </div>
	
  )
}
