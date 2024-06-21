import styled from "styled-components"
import sgc from "../../Assets/IDE SGC.png";
import { BiLogoWhatsapp } from "react-icons/bi";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <Container>
    <motion.div className="FooterInfo">
    <h1 className="footerTitle">¿Listo para usar nuestra app?</h1>
    <h3 className="footerSubTitle">¡Explora y encuentra, ¡Disfruta con IDESGC!</h3>
    <div className="contenidoFooter">
    <div className="IzquierdaContenidoFooter">
    <div className="dataImg">
    <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sgc} alt="SGC" className="Img1d"/>
    </div>
    <p className="FooterTextContainer">
    IDESGC es una plataforma integral de servicios de geo-referencia y datos espaciales.
    </p>
    </div>
    <div className="ContactanosFooter">
    <h2 className="SubtextContact">Contactanos</h2>
    <div className="ContainerInfo">
    <span className="LogoFooter">{<BiLogoWhatsapp/>}</span>
    <span className="LogoFooter2">+504 95348921</span>
    </div>
    </div>
    </div>
    <div className="FooterC">
    <span className="FooterC-1">Política de privacidad  Términos y condiciones</span>
    <span className="FooterC-1">(c) 2024 Mapea Todos Los Derechos Reservados</span>
    </div>
    </motion.div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color: #3c3f45;
.FooterInfo{
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap:10px;
    .footerTitle{
        font-size: 45px;
        font-weight: bold;
        color: white;
    }
    .footerSubTitle{
        font-size: 25px;
        font-weight: bold;
        color: white;
        margin-bottom: 50px;
    }
    .contenidoFooter{
        display: flex;
        width: 90%;
        margin:auto;
        justify-content: space-between;
        align-items: center;
        .IzquierdaContenidoFooter{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap:15px;
            width: 400px;
            height: 500px;
            .dataImg{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .Img1d{
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                }
                .Img2d{
                    width: 150px;
                    height: 150px;
                }
            }
            .FooterTextContainer{
                font-size: 20px;
                color: white;
                text-align: justify;
            }
        }
        .ContactanosFooter{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 400px;
            height: 500px;
            .SubtextContact{
                font-size: 25px;
                color:white;
                font-weight: bold;
            }
            .ContainerInfo{
                display: flex;
                align-items: center;
                gap:20px;
                .LogoFooter{
                    font-size: 30px;
                    font-weight: bold;
                    color:white;
                }
                .LogoFooter2{
                    font-size: 25px;
                    font-weight: bold;
                    color:white;
                }
            }
        }
    }
    .FooterC{
        display: flex;
        width: 90%;
        justify-content: space-around;
        align-items: center;
        margin: auto;
        .FooterC-1{
            font-size: 25px;
            color: white;

        }
    }

}
@media screen and (max-width:697px){
width: 100%;
display: flex;
flex-direction:column;
align-items: center;
margin-top: 300px;
.FooterInfo{
   .footerTitle{
    text-align: center;
   }
   .footerSubTitle{
    text-align: center;
   }
   .contenidoFooter{
    width: 100%;
    display: flex;
    flex-direction: column;
   .IzquierdaContenidoFooter{
    width: 100%;
    height: 200px;
   }
   .ContactanosFooter{
    width: 100%;
    height: 200px;
   }
   }
   .FooterC{
    display: flex;
    flex-direction: column;
    gap:10px;
    text-align: center;
   }
}
}
`;
export default Footer;
