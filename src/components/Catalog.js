import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { AnimationWrapper } from 'react-hover-animation';
import CatalogModal from './CatalogModal';
// image imports
import Kursa1 from '../assets/img/catalog/kursa1.jpg';
import Kursa2 from '../assets/img/catalog/kursa2.jpg';
import HandheldMobilix1 from '../assets/img/catalog/handheldMobilix1.jpg';
import HandheldMobilix2 from '../assets/img/catalog/handheldMobilix2.jpg';
import TabletUR1 from '../assets/img/catalog/tabletUR1.jpg';
import TabletUR2 from '../assets/img/catalog/tabletUR2.jpg';
import TabletW1 from '../assets/img/catalog/tabletW1.jpg';
import TabletW2 from '../assets/img/catalog/tabletW2.jpg';
import Scooter1 from '../assets/img/catalog/scooter1.jpg';
import Scooter2 from '../assets/img/catalog/scooter2.jpg';
import Apiax1 from '../assets/img/catalog/apiax1.jpg';
import Apiax2 from '../assets/img/catalog/apiax2.jpg';
import Lanix1 from '../assets/img/catalog/lanix1.jpg';
import Lanix2 from '../assets/img/catalog/lanix2.jpg';
import Candado1 from '../assets/img/catalog/candado1.jpg';
import Candado2 from '../assets/img/catalog/candado2.jpg';

const descriptions = [
    'Plataforma de autocapacitación en línea CONTPAQi® Kursa ayuda a todos los usuarios de los sistemas CONTPAQi® que quieran sacar el mayor provecho de los sistemas y estar al día con los cambios fiscales y obligaciones de ley. \n Es una herramienta de autocapacitación en línea que te permite aprender a tu propio ritmo y de acuerdo a tus necesidades. Te brinda el conocimiento que necesitas para que seas un experto en temas fiscales y en los sistemas CONTPAQi®', 
    'Equipo HandHeld único en el Mercado. Cuenta con sistema operativo Android y tiene la capcidad de agregar diferentes tipos de aditamentos, desde lector de codigo de barras hasta una impresora térmica.',
    'Tableta de uso rudo para uso industrial, ganadero, minero o en seguridad patrimonial con sistema operativo Android o Windows Home. Configuraciones opcionales: NFC, Scaner, RFID, Docking Station.',
    'Equipo Tablet Touch Screen para aplicaciones restauranteras o educativas, incluso para controlar cuartos de cine con Windows Home o Pro, o Android.',
    'Scooter eléctrico para uso desde en parques hasta plantas para agilizar la movilización del personal de seguridad.',
    'Apiax VoIp Server es un sistema completo de Telefonía, con todas las características de un sistema de PBX corporativo y muchas más a un costo realmente accesible. Además proporciona servicios no disponibles en estos grandes conmutadores como son: extensiones remotas, llamadas gratuitas entre sedes, grabación de llamadas, administración remota vía web, números de teléfono de otros países, etc. Sin Limites de Conexiones ni de tiempo de llamadas donde exista Internet.',
    'Tenemos para ti la Tablet Lanix que se convertirá en tu herramienta útil para escuela trabajo u oficina. No desaproveches esta oportunidad y llévatela ahora',
    'Una cerradura electrónica con función de rastreo GPS, puede ser rastreada en tiempo real y desbloqueada por la tarjeta RFID en el sitio o de forma remota mediante una aplicación móvil, SMS o software; longitud del cable de bloqueo flexible, ricas alertas a prueba de manipulaciones disponibles, batería de larga duración de 15,000 mAh. es el diseño de candado para seguridad de contenedores, caja fuerte de aluminio / seguro de acero al carbono con función de rastreo GPS, puede ser desbloqueado por bluetooth en el sitio y es compatible con el desbloqueo remoto de SMS / software.'
]

const characteristics = [
    'Cursos interactivos y especializados sobre los sistemas CONTPAQi® \n Autodemos, cartas técnicas, casos prácticos y notas técnicas para que saques el mayor provecho a tus sistemas \n Todo lo referente a los cambios fiscales, su aplicación y cumplimiento con los sistemas CONTPAQi® \n Es una herramienta de e-learning basada en modelo Moodle (software para apoyar la enseñanza con cursos en línea de alta calidad y entornos de aprendizaje virtuales). \n Facilita la capacitación de acuerdo con el tiempo, ubicación y disponibilidad del profesional. \n Accede en cualquier lugar y a cualquier hora, siempre y cuando cuentes con conexión a internet, capacítate 24/7 \n Obtén Certificación, avalada por una institución gubernamental (CONOCER) \n Contamos con un convenio con CONOCER, El Consejo Nacional de Normalización y Certificación de Competencias Laborales: institución gubernamental y forma parte de la Secretaría de Educación Pública \n Tu licencia incluye 7 certificaciones técnicas disponibles en los sistemas: CONTPAQi® Contabilidad, Bancos, Comercial Pro, Comercial Premium, Factura electrónica, Nóminas y Punto de venta.',
    'CPU Mediatek MT6735 Quad-core Cortex-A53 1.3GHz \n Sistema Operativo Android 7.0 \n Monitor touch screen 5\'\' HD 720*1280 Pixeles\n Memoria y Almacenamiento de 2G RAM+ 16G ROM \n Red Inalambrica 802.11 a/b/g/n wireless 2.4+5.0 GHz dual-band Wifi y BT4.0\n Teclado de 13 Teclas, incluye: 3*scan boton,1*Delete,1*confirm key,1*return,1*function,2*shortcut, Volume +/- buttons,1*self-define,1*power button\n Bateria: 1*3.7V 4600mAh Litio\n Lector de Codigo de Barras 1D el cual soporta: Code128,EAN-13,EAN-8,Code39,UPC-A,UPC-E, Codabar, Interleaved 2 of 5,China post 25,ISBN/ISSN,Code93, UCC/EAN-128,GS1 Databar,HIBC,etc\n Scanner de Codigo de Barras 2D (opcional) \n RFID LF 125K, con soporte ISO11784/5, ISO18000-2 (opcional)\n Lector RFID HF de 13.56Mhz, soporte ISO14443A/14443B y 15693 es opcional\n RFID UHF de 860-960Mhz con rango de lectura de 1.2 metros, soporta EPC C1 GEN2 /ISO18000-6C (opcional) \n RFID de 2.4GHz con rango de lectura de 30 a 50 metros (opcional)\n 2*PSAM (opcional)\n "Docking station" (optional)\n Scanner de huellas digitales (opcional)\n Lector de tarjetas de ID (opcional) \n Impresora Termica para Punto de Venta de 58mm (opcional)\n Tasa de impermeabiliadad al polvo y al agua de IP65 \n Tasa de resistencia de MIL-STD-810 G \n A prueba de caídas de hasta 1.2 metros \n Temperatura de trabajo de -25 a 55 grados Celsius y Temperatura de almacenamiento de -40 a 60 grados Celsius, Humedad de 5%-95% \n Dimensiones y peso neto: 178mm*78mm*24mm, aproximadamente 500g (con batería).',
    'CPU: Intel Bay-Tray Z3735F Quad-core Turbo 1.33-1.8GHz \n Operative System: Original Windows 10 Home OS or android 4.4 OS, Original windows10 pro is optional \n Display & Touch Screen: 8 inch Capacitive Multi-touch IPS screen,1280*800 Pixels;420cd/m2,normal sunlight readable; If super-bright sunlight readable,adding AR FILM is optional \n Two Cameras: Front 2.0M camera, Back 5.0M camera \n Memory & Storage: 2Gram DDR+ 32G EMMC \n Wireless network: 802.11b/g/n/ac wireless (2.4G/5G Dual-band wifi) and Bluetooth4.0 \n Battery: Built-in 3.7V/8500mAh Lithium Battery, 4G is for 7000mah battery \n I/O Ports: 1*Micro USB,1*USB2.0 Host,1*micro HDMI Port,1*DC port,1*earphone jack,1*Sim Card Slot,1*TF card slot Support SDHC/SDXC \n Rugged Durability: Waterproof and dustproof rate:IP67; Ruggedness:comply with MIL-STD-810G. \n 3G Network:Standard is 3G WCDMA 900/2100MHz \n GPS:U-blox NEO-7 \n NFC: NXP NFC 13.56MHz  Support ISO/IEC 14443A/14443B/15693/18092/mifare,readable distance: about 4cm; is optional \n Moto Barcode Scanner: 1D barcode scanner MOTO SE655E100R is optional. 2D barcode scanner MOTO SE4710 is optional. \n Basic Docking Station: 1*RJ45+3*USB2.0 docking station is optional \n Dimention: 228*145*16.5mm, Net Weight: about 630g. \n Handwriting Stylus: Goodix capacitive handwriting is optional.',
    'CPU: Intel Cherry-Tray Z8350 Quad-core 1.44-1.92GHz; GPU:Intel Gen 8-LP \n Operation System: trail-version Windows10, original win10 is optional \n Display: 10 inch Capacitive Multi-touch IPS screen,1200*1920 Pixels \n Memory & Storage: 2G ram + 32G EMMC, 4Gram + 64G Emmc is optional \n Wireless network: 802.11B/G/N wifi and BT4.0 \n I/O Ports: 3*USB2.0,1*USB3.0,1*DC port(5V/3A),1*RJ45 port,1*micro HDM-Ia,1*Audio jack, 1*TF card slot,1*DB9 RS232 serial port \n Dimention: 244*184*64.5mm',
    'Peso: 47kg / 57kg \n Dimensiones: 82 * 46 * 110 cm \n Tamaño del embalaje: 90 * 52 * 63 cm \n Velocidad máx: 20 km / h \n Carga máx .: 125 kg \n Millaje máximo: 30-35 km \n Capacidad de ascenso máximo: 10-30 grados Min. \n Radio de giro: 0 ° \n Tiempo de carga completo: 6 h-8 h \n Batería recargable: batería de litio 48V / 11AH o 72V 8.8AH \n Potencia del motor: 2 * 1000W Brush DC Motor \n Voltaje: 110 V-240 V, 50 / 60Hz \n Neumático Taiwan Kenda Tire, neumático de vacío de 19 pulgadas \n Temperatura de trabajo: -10 ° -40 ° \n Color: negro, blanco, rojo, azul, amarillo, verde',
    'Comunicaciones como Servicio Administrado con o sin paquetes de Llamadas. \n Ahorro hasta un 50% contra Telefonía \n Convencional. \n Configuraciones a la medida del Cliente. \n Encriptación anti escucha de las llamadas. \n Se ejecuta directamente desde la web. \n Interconexión protocolo abierto SIP para cualquier tipo de teléfono VoIP. \n Monitoreo de Call-Center.',
    'Pantalla 10\'\' \n Procesador Rock Chip Quad Core \n Camara 1.3 MP + 5.0 MP \n Almacenamiento 16 GB \n Memoria RAM 1GB \n Android 8.0',
    ''
]
function Catalog(){
    
    const items = [
        {id: 1,title: 'Kursa Plataforma de Autocapacitación', price: '$1,990.00', img1: Kursa1, img2: Kursa2, description: descriptions[0], characteristic: characteristics[0] },
        {id: 2,title: 'HandHeld Mobilix con Android 7.0', price: '$14,000.00', img1: HandheldMobilix1 , img2: HandheldMobilix2, description: descriptions[1], characteristic: characteristics[1]},
        {id: 3,title: 'Tablet de Uso Rudo 8 Pulgadas IP67', price: '$17,000.00', img1: TabletUR1 , img2: TabletUR2, description: descriptions[2], characteristic: characteristics[2]},
        {id: 4,title: 'Tablet Windows 10.1 HD', price: '$11,000.00', img1: TabletW1, img2: TabletW2, description: descriptions[3], characteristic: characteristics[3]},
        {id: 5,title: 'Scooter eléctrico autoequilibrado E8', price: '$29,990.00', img1: Scooter1, img2: Scooter2, description: descriptions[4], characteristic: characteristics[4]},
        {id: 6,title: 'Extensión SIP para Conmutador en la Nube APIAX', price: '$250.00', img1: Apiax1 , img2: Apiax2, description: descriptions[5], characteristic: characteristics[5]},
        {id: 7,title: 'Tablet Lanix 10\'\' Ilium Pad E10', price: '$2,250.00', img1: Lanix1 , img2: Lanix2, description: descriptions[6], characteristic: characteristics[6]},
        {id: 8,title: 'Candado Electrónico JT705 con GPS para Cajas Secas y Contenedores', price: '$13,500.00', img1: Candado1 , img2: Candado2, description: descriptions[7], characteristic: characteristics[7]},
    ]
    const itemList = items.map( item => {
        return (
            <Col xs={12} md={6} lg={3} key={item.id}>
                <Card>
                    <AnimationWrapper>
                        <Card.Img top="true" 
                        src={item.img1} 
                        onMouseOver={(e) => {
                            e.currentTarget.src = item.img2;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.src = item.img1;
                        }}> 
                        </Card.Img>
                    </AnimationWrapper>
                    <Card.Body className="text-light font-weight-light">
                        <Card.Subtitle>{item.title}</Card.Subtitle>
                        <Card.Text>{item.price}</Card.Text>
                        <CatalogModal item={item}/>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return (
        <div>
            <Container id="catalog" fluid>
                <h1 className="pt-3 mb-3 ml-3 text-hydrogen">Catálogo</h1>
                <Row>
                    {itemList}
                </Row>  
            </Container>
        </div>
    )
}

export default Catalog