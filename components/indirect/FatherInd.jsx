import SonInd from "./SonInd";

export default function FatherInd(props) {

    function speakWithMe(message, message2, message3) {
        console.log(message, message2, message3)
    }

    return (
        <>
            <SonInd speakFunction={speakWithMe}/>
        </>
    )
}