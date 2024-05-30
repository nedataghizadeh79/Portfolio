import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from './../assets/img/header-img.svg'
import {useEffect, useState} from "react";
export default function Banner(){
    const [loopNumber , setLoopNumber ] = useState(0)
    const [isDeleting , setIsDeleting] = useState(false)
    const [text , setText] = useState("")
    const period = 2000
    const [delta, setDelta] = useState(300 - Math.random()*50)
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)
        return ()=> {clearInterval(ticker)}
    },[text])

    const tick=()=>{
        let  i = loopNumber % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0 , text.length+1)
        setText(updateText)

        if (isDeleting){
            setDelta(prevState => prevState/2)
        }

        if (!isDeleting && updateText===fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updateText===""){
            setIsDeleting(false)
            setLoopNumber(loopNumber+1)
            setDelta(500)
        }
    }

    return(
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my personal page</span>
                        <h1>{`I am a `} <span className='wrap'> {text} </span>  </h1>
                        <p>My name is Neda Taghizadeh
                        <br/>
                        <br/>
                            I graduated from Sharif university of Technology
                            <br/>
                            <br/>
                            I love HCI, NLP, CS ,and Art a lot !
                        </p>
                        <button onClick={()=>console.log("connected banner")}> Lets connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='header'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
