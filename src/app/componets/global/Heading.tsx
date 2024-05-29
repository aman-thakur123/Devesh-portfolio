export default function Heading(props:any){
    const {heading} = props;
    return(
        <h1 className="mb-4 text-white md:text-5xl lg:text-8xl dark:text-white leading-5">{heading}</h1>
    )
}