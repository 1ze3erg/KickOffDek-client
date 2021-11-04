function Footer() {
    return (
        <div className=" mx-auto w-full bg-prigreen flex flex-row justify-around p-4">
            <ul className="flex flex-start gap-x-20 text-white">
                <div className="">
                    <ul className="mx-10">
                        <li>
                            <h3 className="text-lg">ABOUT</h3>
                        </li>
                        <li>
                            <p className="my-3">About us</p>
                        </li>
                        <li>
                            <p className="my-3">Crowdfunding Resource center</p>
                        </li>
                        <li>
                            <p className="my-3">Success Stories</p>
                        </li>
                        <li>
                            <p className="my-3">Donation Campaigns</p>
                        </li>
                        <li>
                            <p className="my-3">Waitlist Campaigns</p>
                        </li>
                        <li>
                            <p className="my-3">Equity Campaigns</p>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <ul className="mx-10">
                        <li>
                            <h3 className="text-lg">Project Guidelines</h3>
                        </li>
                        <li>
                            <p className="my-3">Help & FAQs</p>
                        </li>
                        <li>
                            <p className="my-3">The KickOffDek Blog</p>
                        </li>
                        <li>
                            <p className="my-3">Subscribe to our Newsletter</p>
                        </li>
                        <li>
                            <p className="my-3">Contact Us</p>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <ul className="mx-10">
                        <li>
                            <h3 className="text-lg">MORE</h3>
                        </li>
                        <li>
                            <p className="my-3">Terms</p>
                        </li>
                        <li>
                            <p className="my-3">Privacy</p>
                        </li>
                        <li>
                            <p className="my-3">Fees</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="mx-10">
                        <li>
                            <img className="h-20 rounded-xl" src="https://picsum.photos/500" alt="" />
                        </li>
                        <li>
                            <p className="my-3 text-sm font-thin w-60">
                                We acknowledge the traditional Aboriginal & Torres Strait Islander owners of country
                                throughout Australia & pay our respect to them, their cultures & their Elders past,
                                present & future.
                            </p>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    );
}

export default Footer;
