import React from 'react';
import { Navbar as NavBar, Nav, FormControl, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as PATH from '../../Routes/PATH.json';
const toVietnamese: {[id:string]:string}={
    USER:"Người dùng",
    LOGIN:"Đăng nhập",
    SIGNUP:"Đăng ký",
    CHANGEPASSWORD:"Đổi mật khẩu",
    CHANGEINFO:"Đổi thông tin",
    HOME:"TRANG CHỦ",
    CONTESTS:"CÁC KỲ THI",
    PROBLEMS:"BÀI TẬP",
    FAQ:"CÂU HỎI",
    BUG_REPORT:"BÁO CÁO LỖI",
    ANNOUNCEMENTS:"THÔNG BÁO",
    PROFILE:"Hồ sơ",
    SEARCH:"Tìm"
}
const toPath: {[id:string]:string}={
    HOME:PATH.HOME,
    CONTESTS:PATH.CONTESTS,
    PROBLEMS:PATH.PROBLEMS,
    FAQ:PATH.FAQ,
    BUG_REPORT:PATH.BUGS,
}
const listOfSections=['HOME','CONTESTS','PROBLEMS','FAQ','BUG_REPORT'];

const displaySections = (sections : string[]) =>
{
    return sections.map((section,idx)=>
        {
            return (
                <Link to={toPath[section]} className="nav-link">
                    {toVietnamese[section]}
                </Link>
            )
        })
}

const Navbar : React.FC = () =>{
    return (
        <NavBar bg="dark" variant="dark" expand="md" className="navbar-component">
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {displaySections(listOfSections)}
                </Nav>
            </NavBar.Collapse>

            <Form inline>
                <FormControl type="text" placeholder="Tìm kiếm" className="mr-sm-1" />
                <Button variant="outline-success">
                    {toVietnamese["SEARCH"]}
                </Button>
            </Form>
        </NavBar>
    );
};

export default Navbar;