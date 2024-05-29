import Image from "next/image";

type GridDataItem = {
    heading: string;
    subtext: string;
    pathurl: any;
    service: string;
    platform: string;
    altname: string;
    datestart: string;
};

type TwogridsectionProps = {
    griddata: GridDataItem[];
};

export default function Twogridsection({ griddata }: TwogridsectionProps) {
    return (
        <>
            {griddata.map((item, index) => (
                <section key={index} className={`${index%2 ===0 ? 'odd-grid' : 'even-grid'}`}>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 gap-4 py-32">
                            <div className="image-section">
                                <Image src={item.pathurl} alt={item.altname} />
                            </div>
                            <div className="text-area place-self-center">
                                <h1 className="text-white text-5xl uppercase">{item.heading}</h1>
                                <p className="text-grey text-base pt-6 leading-8">{item.subtext}</p>
                                <hr className="pb-8 mt-8" />
                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <label className="text-grey text-base mb-4 inline-block">Services</label>
                                        <p className="text-white text-base">{item.service}</p>
                                    </div>
                                    <div>
                                        <label className="text-grey text-base mb-4 inline-block">Platform</label>
                                        <p className="text-white text-base">{item.platform}</p>
                                    </div>
                                    <div>
                                        <label className="text-grey text-base mb-4 inline-block">Date</label>
                                        <p className="text-white text-base">{item.datestart}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}