import Socialicons from "./Socialicons";

export default function Footer() {
    return(
        <>
            <div className="container mx-auto pb-14 pt-14">
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <p className="text-grey">My mail Id</p>
                        <p className="text-white">
                            artistdeveshsharma@gmail.com
                        </p>
                    </div>
                    <div className="footer-social-icons place-self-end">
                        <Socialicons />
                    </div>
                </div>
            </div>
        </>
    )
}