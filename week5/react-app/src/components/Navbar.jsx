function Navbar(){
    //state
    //return
    return(
        <div className="flex justify-between p-5 px-10 m-0.5 ring-1 ring-black text-white bg-blue-700">
            <h4>LOGO</h4>
            <ul className="flex justify-around gap-10">
                <li><a href="">Home</a></li>
                <li><a href="">SignUp</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    )
}

export default Navbar;