function ValidateUser({ avatar, username }) {
    return (
        <div className="w-144 h-72 rounded-xl border border-gray-300 shadow-lg px-10 py-5 my-5 flex flex-col justify-between items-center">
            <h1>Your are current Login as</h1>
            <img src={avatar} alt="N/A" className="h-16 w-16 rounded-full" />
            <h1>{username}</h1>
            <span className="text-gray-800 text-sm">If this isn't you - </span>
            <span className="text-green-800 text-sm">sign-in with a different account</span>
        </div>
    );
}

export default ValidateUser;
