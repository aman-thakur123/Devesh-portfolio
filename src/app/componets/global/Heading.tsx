export default function Heading(props:any){
    return(
        <>
            <h1 className="mb-4 text-white md:text-5xl lg:text-8xl dark:text-white">{props.heading}</h1>
        </>
    )
}