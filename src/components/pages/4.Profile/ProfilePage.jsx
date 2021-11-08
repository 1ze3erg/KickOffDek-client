import { useState } from "react";
import { HiOutlineShare } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { useAppContext } from "../../../contexts/AppContext";
import ModalAvatar from "./ModalAvatar";

function ProfilePage() {
    const { user } = useAppContext();
    const [openModal, setOpenModal] = useState(false);

    return (
        <div
            className="bg-scroll h-full flex flex-row"
            style={{
                backgroundImage: `url(${user.avatar})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex flex-col py-72 px-60 text-white">
                <h1 className="text-7xl py-5 font-semibold">{user.username}</h1>
                <h1 className="text-3xl py-2">{user.firstName} {user.lastName}</h1>
                <div className="flex flex-row px-3">
                    <h1 className="text-xl py-2">{user.tagline}</h1>
                    <h1 className="text-xl py-2">{user.country}</h1>
                </div>
                <div className="flex flex-row py-2 my-5">
                    <button className="inline-flex bg-purple-600 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
                        <HiOutlineShare />
                        <span className="px-1">Share</span>
                    </button>

                    <button className="inline-flex bg-clear mx-3 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
                        <HiOutlineShare />
                        <span className="px-1" onClick={() => setOpenModal(true)}>
                            About
                        </span>
                    </button>
                    {openModal && (
                        <ModalAvatar
                            closeModal={setOpenModal}
                            biography={user.biography}
                            avatar={user.avatar}
                            username={user.username}
                        />
                    )}
                </div>
                <div className="flex flex-row  my-3">
                    <a
                        href={`https://www.facebook.com/${user.facebook}`}
                        title={user.facebook}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookSquare className="mx-2 p-1 text-4xl cursor-pointer hover:bg-prilight hover:text-pridark rounded" />
                    </a>
                    <a
                        href={`https://www.instagram.com/${user.instagram}`}
                        title={user.instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram className="mx-2 p-1 text-4xl cursor-pointer hover:bg-prilight hover:text-pridark rounded" />
                    </a>
                    <a
                        href={`https://www.twitter.com/${user.twitter}`}
                        title={user.twitter}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitter className="mx-2 p-1 text-4xl cursor-pointer hover:bg-prilight hover:text-pridark rounded" />
                    </a>
                    <a href={`https://${user.website}`} title={user.website} target="_blank" rel="noreferrer">
                        <IoEarthOutline className="mx-2 p-1 text-4xl cursor-pointer hover:bg-prilight hover:text-pridark rounded" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
