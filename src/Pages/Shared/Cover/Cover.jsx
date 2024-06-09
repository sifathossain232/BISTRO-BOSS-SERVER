import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px] mb-20">
                <div className=""></div>
                <div className="text-center mt-24 px-24 text-white">
                    <div className="bg-[#151515] bg-opacity-60 h-96 w-[1000px] flex flex-col justify-center">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 text-xl font-semibold uppercase">would you like to try a dish</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;