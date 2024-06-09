import moment from "moment";
import SectionTitel from "../../../Components/SectionTitel/SectionTitel";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <div className="mb-16 bg-[url('assets/home/featured.jpg')]   bg-fixed
         h-[550px] flex flex-col justify-center items-center text-white">
         <div className="bg-slate-800 bg-opacity-50   h-[550px]  py-10">
         <SectionTitel
                subHeading={"Check it out"}
                heading={"Featured Item"}
            ></SectionTitel>
            <div className="md:flex justify-center items-center gap-16 py-8 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p className="text-2xl">{moment().format("MMMM D, YYYY")}</p>
                    <p className="uppercase text-2xl">Where can i get some?</p>
                    <p className="text-justify text-lg font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Hic sequi dignissimos reiciendis laudantium at voluptates blanditiis
                        numquam esse voluptas quisquam debitis aperiam mollitia a facere assumenda voluptate
                        sapiente dolorum deleniti aut molestiae sint iusto perspiciatis, eveniet eos?
                        Repellendus, laboriosam, aperiam totam laborum minima magnam libero deleniti omnis alias fuga laudantium.
                    </p>
                    <button className="border-b-2 border-black text-xl rounded-lg py-2 px-5 hover:bg-black hover:text-white mt-2">READ MORE</button>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Featured;