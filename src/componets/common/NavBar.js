import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png';
import { NavbarLinks } from '../../data/navbar-links';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ProfileDropdown from '../core/Auth/ProfileDropdown';
import { IoMdArrowDropdown } from 'react-icons/io'
import { apiConnector } from '../../services/apiconnector';
import { categories } from '../../services/apis';

const NavBar = () => {

	const { token } = useSelector((state) => state.auth);
	console.log("I am token" , token)
	const { user } = useSelector((state) => state.profile);
	console.log("user...", user)
	const { totalItems } = useSelector((state) => state.cart);

	const location = useLocation();
	function matchRoute(route) {
		return matchPath({ path: route }, location.pathname);
	}


	// connecting to backen

	const [subLinks, setSubLinks] = useState([]);

	const fetchSublinks = async () => {
		try {
			const result = await apiConnector("GET", categories.CATEGORIES_API);
			console.log("Printing sublinks result : ", result.data.allCategory);
			setSubLinks(result.data.allCategory);
		}
		catch (error) {
			console.log("Could not fetch the category list");
		}
	}

	useEffect(() => {
		fetchSublinks();
	}, [])


	return (
		<div className=' border-b-[1px]  border-richblack-700 h-14 flex items-center'>
			<div className='w-11/12 mx-auto max-w-[1260px] flex justify-between items-center px-16'>
				<Link to={'/'}>
					<img src={logo} alt='' width={160} height={42} loading='lazy' />
				</Link>

				<nav>
					<ul className='flex gap-x-5  text-richblack-300'>
						{NavbarLinks.map((link, index) => (
							<li key={index}>
								{link.title === "Catalog"
									? (<div className='relative flex items-center gap-2 group'>
										<p>{link.title}</p>
										<IoMdArrowDropdown className=" fill-richblack-5" />

										<div className='invisible absolute left-[50%] translate-x-[-50%] translate-y-[30%] top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0  transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px] z-50'>

											<div className='absolute left-[50%] top-0 translate-x-[80%]
                                    translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>

											</div>

											{
												subLinks.length > 0 ? (
													subLinks.map((subLink, index) => (
														<Link to={`/category/${subLink.name}`} key={index} >
															<p>{subLink.name}</p>
														</Link>
													))
												)
													: (<div>loading subLinks ...</div>)
											}
										</div>
									</div>)
									: (<Link to={link?.path}>
										<p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-300"}`}>
											{link.title}
										</p>
									</Link>)
								}
							</li>
						))
						}
					</ul>
				</nav>

				{/* login signup dashboard cart */}
				{
					console.log("inside nav ", user)
				}
				<div className='flex gap-4 items-center '>
					{
						token && user?.accountType === 'Student' && (
							<Link to={'/cart'} className='relative text-white  text-[30px]'>
								{/* cart */}
								<AiOutlineShoppingCart />
								{
									totalItems > 0 &&
									<span>{totalItems}</span>
								}
							</Link>
						)
					}

					{
						!user && token=== null && (
							<Link to={'/login'}>
								<button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]  text-richblack-100 rounded'>
									Login
								</button>
							</Link>

						)
					}
					{

						!user && token === null && (
							<Link to={'/signup'}>
								<button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]  text-richblack-100 rounded'>
									SignUp
								</button>
							</Link>

						)
					}

					{
						token!==null && user?.token !== null && (
							<ProfileDropdown />
						)
					}
				</div>
			</div>
		</div>
	)
}

export default NavBar