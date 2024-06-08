export default function HeadingOutfit(props:any) {
    const {heading} = props;
    return(
        <>
            <h1 className="text-white outfit text-6xl uppercase font-bold leading-tight">{heading}</h1>
            <p className="text-4xl text-white mt-5">Product Designer</p>
        </>
    )
}