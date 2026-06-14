export const Header = () => {
    
    return(
        <nav className="flex justify-between p-5 w-screen gap-10 mix-blend-normal fixed">
            <div className="">Christopher Nolan</div>
            <div className="flex gap-5 max-md:invisible">
                <div><a href="#films">Filmography</a></div>
                <div><a href="#philosophy">Vision</a></div>
            </div>
        </nav>
    )
}