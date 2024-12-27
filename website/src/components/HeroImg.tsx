type HeroImgProps = {
    src: string;
}

const HeroImg = ({src} :HeroImgProps) =>{
    return(
        <img src={src} alt="" />
    )
}

export default HeroImg