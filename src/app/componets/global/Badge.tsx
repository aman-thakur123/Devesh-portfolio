export default function Badge(props:any) {
    return(
        <>
            <span className="inline-flex items-center bg-blackLight px-3 mr-3 mb-3 py-2.5 text-white text-base font-medium hover:bg-bluehover hover:text-blue cursor-pointer">{props.title}</span>
        </>
    )
}