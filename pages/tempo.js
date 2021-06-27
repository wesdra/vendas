function Tempo(props){

    const dynamicDate = new Date();
    const dynamicDatesString = dynamicDate.toGMTString();

    return (
        <div className="s">
           <div className="dinamico">{dynamicDatesString} (dinamico)</div> 
            <div className="statico">{props.staticDatesString} (statico)</div>
        </div>
    )
}

export function getStaticProps(){

    const staticDate = new Date();
    const staticDatesString = staticDate.toGMTString();

    return {
        props: {
            staticDatesString
        }
    }
}

export default Tempo;