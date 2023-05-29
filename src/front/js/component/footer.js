import React, { Component } from "react";

export const Footer = () => {
	return (
		<footer className="footer bg-dark text-white">
		  <div className="container">
			<div style={{ paddingTop: '20px' }}></div> {/* Blank space */}
			<div className="row">
			  <div className="col-md-2"></div> {/* Blank space */}
			  <div className="col-md-8">
				<div className="row">
				  <div className="col-md-6">
					<h3>About Us</h3>
					<p>Somos un grupo de estudiantes de Full-Stack developing apasionados por nuestro trabajo.</p>
				  </div>
				  <div className="col-md-3">
					<h3>Links</h3>
					<ul className="footer-links list-unstyled">
					  <li><a href="/" className="link-unstyled">Home</a></li>
					  <li><a href="/about" className="link-unstyled">About</a></li>
					  <li><a href="/contact" className="link-unstyled">Contact</a></li>
					</ul>
				  </div>
				  <div className="col-md-3">
					<h3>Connect</h3>
					<ul className="social-links list-unstyled">
					  <li><a href="#" className="link-unstyled"><i className="fab fa-twitter FooterIcon"></i></a></li>
					  <li><a href="#" className="link-unstyled"><i className="fab fa-facebook FooterIcon"></i></a></li>
					  <li><a href="#" className="link-unstyled"><i className="fab fa-instagram FooterIcon"></i></a></li>
					</ul>
				  </div>
				</div>
			  </div>
			  <div className="col-md-2"></div> {/* Blank space */}
			</div>
			<div className="footer-bottom">
			  <div className="container">
				<div className="row">
				  <div className="col-md-2"></div> {/* Blank space */}
				  <div className="col-md-8">
					<div className="row">
					  <div className="col-md-6">
						<p>&copy; {new Date().getFullYear()} Your Web App. All rights reserved.</p>
					  </div>
					  <div className="col-md-6">
						<ul className="footer-nav list-unstyled">
						  <li><a href="/terms" className="link-unstyled">Terms of Service</a></li>
						  <li><a href="/privacy" className="link-unstyled">Privacy Policy</a></li>
						</ul>
					  </div>
					</div>
				  </div>
				  <div className="col-md-2"></div> {/* Blank space */}
				</div>
			  </div>
			</div>
		  </div>
		</footer>
	  );
	};