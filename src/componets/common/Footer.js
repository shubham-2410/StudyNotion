import React from 'react';

import { FooterLink2 } from "../../data/footer-links";

import Logo from "../../assets/Logo/Logo-Full-Light.png";

import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

import RenderOptions from './RenderOptions';

// Hardcode at bottom of footer
// const BottomFooter = [
//     { title: "Private Policy", link: "#" },
//     { title: "Cookie Policy", link: "#" },
//     { title: "Terms", link: "#" },
// ];

const Resources = [
    { title: "Articles", link: "#" },
    { title: "Blogs", link: "#" },
    { title: "Chart Sheet", link: "#" },
    { title: "Code Challenges", link: "#" },
    { title: "Docs", link: "#" },
    { title: "Projects", link: "#" },
    { title: "Vedios", link: "#" },
    { title: "Workspace", link: "#" },
];

const Plans = [
    { title: "Paid Membership", link: "#" },
    { title: "For Students", link: "#" },
    { title: "Bussiness Solutions", link: "#" },];

const Community = [
    { title: "Forums", link: "#" },
    { title: "Chapters", link: "#" },
    { title: "Events", link: "#" },
];

const Company = [{ title: "About", link: "#" },
{ title: "Career", link: "#" },
{ title: "Affilates", link: "#" },];

const Support = [{ title: "Help Center", link: "#" },];

const Footer = () => {
    return (
        <div className=' bg-richblack-800 p-8 w-full px-20 '>
            <div className='flex gap-20'>
                <div className='flex gap-12 w-[45%]  justify-center'>
                    <div>
                        <img src={Logo} alt='logo' className='mt-4'></img>
                        <RenderOptions title={"Company"} options={Company} />
                        <div className='flex gap-2 mt-6'>
                            <FaFacebook className='hover:cursor-pointer hover:fill-blue-25' />
                            <FaGoogle  className='hover:cursor-pointer  hover:fill-blue-25'/>
                            <FaTwitter  className='hover:cursor-pointer hover:fill-blue-25'/>
                            <FaYoutube  className='hover:cursor-pointer  hover:fill-caribbeangreen-300'/>
                        </div>
                    </div>
                    <div>
                        <RenderOptions title={"Resources"} options={Resources} />
                        <RenderOptions title={"Support"} options={Support} />
                    </div>
                    <div>
                        <RenderOptions title={"Plans"} options={Plans} />
                        <RenderOptions title={"Community"} options={Community} />
                    </div>
                </div>

                {/* for line between  */}
                {/* <div className='w-[2px]  bg-white border-2 border-white'></div> */}

                <div className='flex gap-16 w-[45%]  border-l-[1px] border-richblack-700 justify-center'>
                    {
                        FooterLink2.map((category , index) => {
                            return (
                                <RenderOptions title={category.title} options={category.links} key={index} />
                            );
                        })
                    }
                </div>
            </div>
            <div className='flex border-t-[1px] border-richblack-700 mt-4 p-7 items-center justify-between'>
                <div className='flex  font-inter text-xs text-richblack-300 items-center justify-center '>
                    <p className='px-2 hover:cursor-pointer'>Privacy Policy</p>
                    <p className='border-l-[2px] border-r-[2px] border-richblack-700 px-2 hover:cursor-pointer '>Cookie Policy</p>
                    <p className='px-2 hover:cursor-pointer'>Terms</p>
                </div>
                <div className='font-inter text-xs text-richblack-300 '>
                    Made with ❤️ StudyNotion 2023
                </div>
            </div>
        </div>
    )
}

export default Footer