// setup.js - Carga los datos iniciales desde un archivo JSON
import { initializeAppData } from './api';

// Objeto con los datos completos de la aplicación
const quizData = {
  "quizConfig": {
    "title": "Practica Teorica Solignac Automoviles",
    "theme": {
      "primary": "#2563eb",
      "primaryLight": "#3b82f6",
      "success": "#059669",
      "error": "#dc2626",
      "background": "#f0f7ff"
    },
    "questions": [

      {
        "question": "En una bocacalle sin semáforo ni policía, tiene prioridad de paso:",
        "options": [
          "El vehículo que viene de la izquierda",
          "El vehículo que circula por la derecha",
          "El que circula a mayor velocidad",
          "El vehículo de mayor tamaño"
        ],
        "correct": 1
      },

      {
        "question": "¿Qué distancia de seguridad debe mantener con el vehículo que va adelante?",
        "options": [
          "Al menos 2 metros, sin importar la velocidad",
          "La que permita detenerse ante cualquier obstáculo",
          "La equivalente a 2 segundos de recorrido como mínimo",
          "La misma distancia que el largo de su vehículo"
        ],
        "correct": 2
      },
      {
        "question": "¿Qué color de chaleco reflectante es obligatorio llevar en el vehículo?",
        "options": [
          "Verde",
          "Amarillo",
          "Naranja",
          "Rojo"
        ],
        "correct": 1
      },
      {
        "question": "¿Qué obligación tiene el conductor ante un cruce peatonal sin semáforo?",
        "options": [
          "Reducir la velocidad y tocar bocina",
          "Ceder el paso a los peatones que estén cruzando",
          "Mantener la velocidad y advertir con las luces",
          "Acelerar para liberar rápidamente el cruce"
        ],
        "correct": 1
      },

    {
      "question": "¿En qué casos debe encenderse la luz de giro?",
      "options": [
        "Solo para girar en intersecciones",
        "Para girar, cambiar de carril o ingresar a un estacionamiento",
        "Únicamente al incorporarse a una autopista",
        "Solo cuando hay otros vehículos cerca"
      ],
      "correct": 1
    },

    {
      "question": "¿Qué requisitos debe cumplir un conductor principiante?",
      "options": [
        "Llevar cartel de principiante y no superar los 70 km/h",
        "Circular con acompañante experimentado las 24 horas",
        "Llevar cartel de principiante y no circular en autopistas durante 6 meses",
        "Llevar cartel de principiante durante los primeros 6 meses"
      ],
      "correct": 3
    },

    {
      "question": "¿Qué vehículos tienen permitido circular por el carril izquierdo en autopistas?",
      "options": [
        "Todos los vehículos",
        "Solo vehículos livianos que circulen a la velocidad máxima permitida",
        "Vehículos de emergencia únicamente",
        "Ningún vehículo, es solo para adelantamientos"
      ],
      "correct": 1
    },
    {
      "question": "¿Qué señal debe hacer un conductor al detenerse por una emergencia en la ruta?",
      "options": [
        "Encender las balizas del vehículo",
        "Colocar balizas triangulares reflectantes a 50 y 100 metros",
        "Ambas opciones son correctas",
        "Ninguna es obligatoria, solo recomendable"
      ],
      "correct": 2
    },

    {
      "question": "¿Cuál es la diferencia entre la cédula verde y la cédula azul?",
      "options": [
        "La cédula verde es para vehículos nafteros y la azul para diesel",
        "La cédula verde es para el titular y la azul para autorizados a conducir",
        "La cédula verde es para uso particular y la azul para uso comercial",
        "No hay diferencia, son documentos idénticos"
      ],
      "correct": 1
    },
    {
      "question": "¿Qué clase de licencia necesita para conducir un automóvil particular?",
      "options": [
        "Clase A",
        "Clase B1",
        "Clase C",
        "Clase D"
      ],
      "correct": 1
    },
      {
        "question": "¿Qué documentación es obligatoria llevar al conducir?",
        "options": [
          "Solo la licencia de conducir",
          "Licencia, cédula verde y DNI",
          "Licencia, DNI y matrícula del auto",
          "Libreta sanitaria y licencia de conducir"
        ],
        "correct": 1
      },
      {
        "question": "La señal de PARE obliga al conductor a:",
        "options": [
          "Reducir la velocidad y continuar con precaución",
          "Detenerse completamente y reiniciar la marcha si no hay peligro",
          "Ceder el paso a los vehículos de la derecha",
          "Sólo detenerse cuando hay otros vehículos visibles"
        ],
        "correct": 1
      },
      {
        "question": "¿Qué vehículo tiene prioridad de paso en una rotonda?",
        "options": [
          "El que circula por la derecha",
          "El que circula dentro de la rotonda",
          "El que tiene mayor tamaño",
          "El transporte público"
        ],
        "correct": 1
      },

      {
        "question": "¿Qué elementos de seguridad son obligatorios en un vehículo?",
        "options": [
          "Matafuegos, balizas y botiquín",
          "Balizas, matafuegos y kit de herramientas",
          "Botiquín, chaleco reflectante y balizas",
          "Matafuegos, balizas y rueda de auxilio"
        ],
        "correct": 3
      },
      {
        "question": "¿Quiénes deben usar cinturón de seguridad?",
        "options": [
          "Solo el conductor",
          "El conductor y el acompañante delantero",
          "Todos los ocupantes del vehículo",
          "Solo los ocupantes menores de edad"
        ],
        "correct": 2
      },

      {
        "question": "¿Qué vehículo tiene prioridad de paso en una calle angosta donde no pueden pasar dos a la vez?",
        "options": [
          "El que circula en subida",
          "El que circula en bajada",
          "El vehículo más grande",
          "El transporte público"
        ],
        "correct": 0
      },
      {
        "question": "Los menores de edad hasta qué edad deben viajar en el asiento trasero?",
        "options": [
          "8 años",
          "10 años",
          "12 años",
          "16 años"
        ],
        "correct": 2
      },
      {
        "question": "¿Cuál es la distancia mínima de seguridad recomendada entre vehículos?",
        "options": [
          "La que permita detenerse ante un freno brusco del vehículo precedente",
          "1 metro por cada 10 km/h de velocidad",
          "5 metros en cualquier situación",
          "10 metros en cualquier situación"
        ],
        "correct": 0
      },
      {
        "question": "¿Qué debe hacer si los frenos del vehículo fallan?",
        "options": [
          "Intentar frenar con el freno del motor y el freno de mano gradualmente",
          "Apagar inmediatamente el motor",
          "Saltar del vehículo",
          "Girar bruscamente hacia la banquina"
        ],
        "correct": 0
      },
      {
        "question": "¿Cuándo puede estacionar en doble fila?",
        "options": [
          "Cuando lo haga por menos de 5 minutos",
          "Cuando deje las balizas encendidas",
          "Cuando no haya espacio disponible",
          "Nunca está permitido"
        ],
        "correct": 3
      },
      {
        "question": "¿Cuál es la velocidad mínima en una autopista?",
        "options": [
          "40 km/h",
          "60 km/h",
          "80 km/h",
          "No hay velocidad mínima establecida"
        ],
        "correct": 1
      },
      {
        "question": "Al circular por una autopista o semiautopista, ¿qué carril debe utilizar normalmente?",
        "options": [
          "El carril izquierdo siempre",
          "El carril derecho, utilizando el izquierdo solo para adelantar",
          "Cualquier carril a elección",
          "El carril central únicamente"
        ],
        "correct": 1
      },
      {
        "question": "En caso de accidente, ¿cuál es la primera acción que debe realizar?",
        "options": [
          "Llamar a su seguro",
          "Señalizar la zona con balizas y triángulos",
          "Mover a los heridos del lugar",
          "Determinar quién fue el responsable"
        ],
        "correct": 1
      },

      {
        "question": "Si se encuentra con un vehículo de emergencia con sirenas y luces encendidas, debe:",
        "options": [
          "Acelerar para no obstaculizarle el paso",
          "Tocar bocina para alertar a otros conductores",
          "Cederle el paso y apartarse con precaución",
          "Seguirlo para llegar más rápido a su destino"
        ],
        "correct": 2
      },
      {
        "question": "¿Cuándo debe realizar la verificación técnica vehicular (VTV)?",
        "options": [
          "Solo cuando vende el vehículo",
          "Cada 6 meses para todos los vehículos",
          "Anualmente para vehículos particulares a partir del año de antigüedad",
          "Solo para vehículos de más de 10 años de antigüedad"
        ],
        "correct": 2
      },
      {
        "question": "Las placas patente deben estar:",
        "options": [
          "Solamente en la parte trasera del vehículo",
          "En la parte delantera y trasera del vehículo, visibles y sin alteraciones",
          "Pueden ser personalizadas a elección del propietario",
          "Solamente en la parte delantera"
        ],
        "correct": 1
      },
      {
        "question": "¿Cuándo está permitido circular marcha atrás?",
        "options": [
          "En cualquier situación donde sea necesario",
          "Solo para estacionar o salir de un estacionamiento",
          "En autopistas cuando se pasó la salida deseada",
          "Está prohibido en todas las circunstancias"
        ],
        "correct": 1
      },

      {
        "question": "¿Qué indica una línea amarilla continua en el centro de la calzada?",
        "options": [
          "Está permitido adelantar con precaución",
          "Prohibido adelantar o cruzar",
          "Zona de estacionamiento restringido",
          "Carril exclusivo para transporte público"
        ],
        "correct": 1
      },










      {
        "question": "¿Que indica esta señal?",
        "imageUrl": "https://lh4.googleusercontent.com/proxy/fcLiQcWS1o7z805AeA3WZwNhHaRRpkp01b5_07valRZPl_3t9s9PtVKTfM5TX3sD1F9T_uApbNHT3oRTJ5iG3q1_obwMm8iBWCoeULus5dPSebpH",
        "options": [
        "calle cortada",
        "cruce de peatones",
        "empalme",
        "esquina peligrosa"
        ],
        "correct": 2
        },
        {
               "question": "¿Cuál es la tasa máxima de alcohol en sangre permitida para conductores particulares?",
               "imageUrl": "https://media.istockphoto.com/id/1081786788/es/vector/de-la-gota.jpg?s=612x612&w=0&k=20&c=iVbGXhzY_ymvlvPszC_GmUB5YiKaCLVuGnYq81L6zm8=",
               "options": [
               "0.2 g/l",
               "0.5 g/l",
               "0 g/l",
               "0.1 g/l"
               ],
               "correct": 2
               },
       
       
        {
               "question": "¿A qué velocidad máxima se puede circular en las calles (no avenidas)? ",
               "imageUrl": "imagen",
               "options": [
               "40km/h",
               "30km/h",
               "80km/h",
               "60km/h"
               ],
               "correct": 0
               },
        {
               "question": "¿A qué velocidad máxima se puede circular en las avenidas?",
               "imageUrl": "imagen",
               "options": [
               "50 km/h",
               "80 km/h",
               "40 km/h",
               "60 km/h"
               ],
               "correct": 3
               },
        {
               "question": "¿Cuál es la distancia mínima de estacionamiento respecto a una esquina?",
               "imageUrl": "imagen",
               "options": [
               "3 metros",
               "2 metros",
               "5 metros",
               "1 metros"
               ],
               "correct": 2
               },
        {
               "question": "¿En qué casos tiene prioridad el peatón?",
               "imageUrl": "imagen",
               "options": [
               "siempre",
               "en cruces peatonales",
               "en las esquinas",
               "en semaforos"
               ],
               "correct": 0
               },
        {
               "question": "¿Cuál es la velocidad máxima en autopistas para automoviles?",
               "imageUrl": "imagen",
               "options": [
               "80 km/h",
               "130 km/h",
               "100 km/h",
               "120 km/h"
               ],
               "correct": 1
               },
                {
               "question": "Esta señal indica:",
               "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOvAepGNF9KdCDzkTlR2bDFPKtAOT0pCyBQ&s",
               "options": [
               "Ceda el paso",
               "Prohibido estacionar",
               "Pare",
               "Velocidad máxima 40 km/h"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://pbs.twimg.com/profile_images/378800000277422349/4093a2c2b2e6b55b75932ebe638d3592_400x400.jpeg",
               "options": [
               "Prohibido adelantar",
               "Curva peligrosa",
               "Cruce de peatones",
               "Zona urbana"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal significa:",
               "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJrA9lmPqeaFf5tCv9g-nP_k_xK9MCPlW1w&s",
               "options": [
               "Pare",
               "Sentido obligatorio",
               "Prohibido girar",
               "Ceda el paso"
               ],
               "correct": 3
               },
               {
               "question": "Esta señal prohíbe:",
               "imageUrl": "https://s3.amazonaws.com/cdn.dmv-permit-test.com/images/road-signs/medium/20.jpg",
               "options": [
               "Prohibido girar a la derecha",
               "Girar derecha",
               "Sentido obligatorio derecha",
               "Ceda el paso"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://senaleticasestampa.cl/cdn/shop/files/Velocidad-Maxima-60km.jpg?v=1686697989",
               "options": [
               "Velocidad mínima 60 km/h",
               "Velocidad máxima 60 km/h",
               "Prohibido circular a 60 km/h",
               "Distancia de 60 metros"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal advierte sobre:",
               "imageUrl": "https://img.uline.com/is/image/uline/H-6584?$Mobile_SI$",
               "options": [
               "Zona escolar",
               "Cruce de peatones",
               "Cruce de ferrocarril",
               "Prohibido detenerse"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://www.mayfe.es/27338-large_default/DISCO-SENTIDO-OBLIGATORIO-TR-400-A.jpg",
               "options": [
               "Girar a la izquierda",
               "Prohibido girar",
               "Sentido obligatorio a la derecha",
               "Ceda el paso"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal prohíbe:",
               "imageUrl": "https://www.cartelesdeseguridad.com.ar/thumb/000000000000000069221Prohibido-estacionar-color_400x400.jpg",
               "options": [
               "Circular",
               "Adelantar",
               "Estacionar",
               "Girar a la izquierda"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://flygraphics.cl/wp-content/uploads/2021/03/F-PI-1a.jpg",
               "options": [
               "Cruce de peatones",
               "Zona urbana",
               "Cruce de ferrocarril",
               "Curva peligrosa"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://static.vecteezy.com/system/resources/thumbnails/002/351/750/small_2x/school-zone-symbol-free-vector.jpg",
               "options": [
               "Zona escolar",
               "Prohibido adelantar",
               "Ceda el paso",
               "Velocidad máxima 80 km/h"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal prohíbe:",
               "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhs6OqPC9Y80vKv4SdOSTIEx39UIA_gYz1bg&s",
               "options": [
               "Adelantar",
               "Prohibido estacionar doble fila",
               "Prohibido adelantar",
               "Prohibido Detenerse"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://static.vecteezy.com/system/resources/previews/002/277/612/non_2x/warning-signs-roundabout-ahead-on-white-background-free-vector.jpg",
               "options": [
               "Giro en U",
               "Rotonda",
               "Prohibido girar",
               "Sentido único"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal advierte sobre:",
               "imageUrl": "https://www.comercturro.com/tiendaonline/documentos/productos/se%C3%B1al%20trafico%20peligro%20animales.JPG",
               "options": [
               "Cruce de peatones",
               "Animales sueltos",
               "Zona urbana",
               "Zona de caza"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQcLIvaT7mIPtq0hK6TGV1IYTBbQyNqRjZA&s",
               "options": [
               "Pendiente pronunciada",
               "subida",
               "caida pronunciada",
               "pavimento irregular"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://www.isaludes.com/media/catalog/product/cache/a486d09f3fb9f318d60be7e8ebb8756f/F/I/FIN-DE-PROHIBICION-DE-ADELANTAMIENTO-R-502_DIS_MOP-8WKCb.jpg",
               "options": [
               "Inicio de restricción",
               "Fin de restricción",
               "Prohibido estacionar",
               "Prohibido adelantar"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://flygraphics.cl/wp-content/uploads/2021/03/F-PO%E2%80%9314..jpg",
               "options": [
               "Cruce de bicicletas",
               "Zona escolar",
               "Cruce de peatones",
               "Prohibido utilizar bicicletas"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://lh4.googleusercontent.com/proxy/adbkWnM4411LvBhfQ2pSWO0ew5cqDyXiPUtwXCqbVLsrT_iQed9H4G3I9sw-US6c47GJfw4qqLq4vIqrXnpW7moG3qHXUSt5MhGqI46hOmQl9A",
               "options": [
               "Prohibido estacionar",
               "Estacionamiento permitido",
               "Detención permitida",
               "Sentido obligatorio"
               ],
               "correct": 1
               },
               
               {
               "question": "Esta señal advierte sobre:",
               "imageUrl": "https://lh4.googleusercontent.com/proxy/cDCODSQnjM6vLG-SsgNv2xPxjKC2f5rFhE1r77E5jI2vlMIk3RtVDg-o_MvbCiqubEFq7xg6IUxMx5puC7zSGLWNQwA9Ca4cOBmzbGO8ugaZ3Q",
               "options": [
               "Cruce de peatones",
               "Curva peligrosa",
               "Viento lateral",
               "Zona escolar"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://lh3.googleusercontent.com/proxy/9PkLsoj5vwrmkoLiZW8fDPQDXxsT8Eg0s2zMTRxABv0pkBSbz7iDjdDMENSjjg68N_i5enWwE9L21caxLTBuMNnsul3IZYB212IwIPXVrC8LhQ",
               "options": [
               "Tunel",
               "Cruce de ferrocarril",
               "Prohibido estacionar",
               "Lavadero de autos"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal prohíbe:",
               "imageUrl": "https://lh6.googleusercontent.com/proxy/97xz-6A0ZWQOY64uxipbThnrVeX5CQFX47aAzSscM8oF1PSpOIdZ4CrTOCYVB3NgMmU7xCCiw6vomqGYtfA29W0R9l5sEMw8LE5nHsmq-IK5wGo",
               "options": [
               "Girar a la izquierda",
               "Adelantar",
               "Curva en s",
               "sentido obligatorio izquierda"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://static.vecteezy.com/system/resources/thumbnails/012/528/070/small_2x/crosswalk-icon-pedestrian-crossing-icon-illustration-isolated-on-white-background-vector.jpg",
               "options": [
               "Prohibido peatones",
               "Cruce de bicicletas",
               "Zona de peatones",
               "Sentido único"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://naisa.es/14207-home_default/senal-vial-estrechamiento-calzada-acero-termolacado.jpg",
               "options": [
               "Cruce de ferrocarril",
               "Estrechamiento de la carretera",
               "Pendiente pronunciada",
               "Zona urbana"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://senalescuberos.es/434-thickbox_default/senal-fin-de-limitacion-de-velocidad.jpg",
               "options": [
               "Inicio de velocidad máxima",
               "Fin de velocidad máxima",
               "Prohibido adelantar",
               "Ceda el paso"
               ],
               "correct": 1
               },

               {
                "question": "¿Qué documentación debe presentarse para renovar la licencia de conducir?",
                "options": [
                  "Solo DNI y licencia anterior",
                  "DNI, licencia anterior y certificado de antecedentes penales",
                  "DNI, licencia anterior, certificado médico y de legalidad",
                  "DNI, licencia anterior, certificado médico y comprobante de pago de multas"
                ],
                "correct": 3
              },
              {
                "question": "¿Qué factor es el que más influye en los accidentes de tránsito?",
                "options": [
                  "Las condiciones meteorológicas",
                  "El estado de las rutas y calles",
                  "El factor humano (comportamiento del conductor)",
                  "Las fallas mecánicas de los vehículos"
                ],
                "correct": 2
              },
              {
                "question": "Si un vehículo derrapa en una curva, ¿qué acción es la más recomendable?",
                "options": [
                  "Frenar bruscamente y girar el volante en sentido contrario al derrape",
                  "Acelerar para recuperar la adherencia",
                  "No frenar y girar el volante ligeramente en el sentido del derrape",
                  "Frenar suavemente y mantener el volante firme"
                ],
                "correct": 2
              },
              {
                "question": "¿Qué responsabilidad tiene el titular de un vehículo si otra persona comete una infracción con su auto?",
                "options": [
                  "Ninguna, la responsabilidad es solo del conductor",
                  "Solo es responsable si el conductor no puede ser identificado",
                  "Es responsable solidariamente con el conductor",
                  "Solo es responsable si autorizó expresamente al conductor"
                ],
                "correct": 2
              },
              {
                "question": "¿Qué se debe comprobar antes de poner en marcha el motor de un vehículo?",
                "options": [
                  "Que las luces estén apagadas",
                  "Que el freno de mano esté puesto y el cambio en punto muerto",
                  "Que las ventanillas estén cerradas",
                  "Que el aire acondicionado esté apagado"
                ],
                "correct": 1
              },
              {
                "question": "¿Qué se debe hacer ante un atasco de tráfico o embotellamiento?",
                "options": [
                  "Tocar bocina para agilizar el tráfico",
                  "Utilizar la banquina para adelantar",
                  "Estar atento a las indicaciones y mantener la calma",
                  "Intentar cambiar de carril constantemente"
                ],
                "correct": 2
              },
              {
                "question": "¿Cuál es la principal función del ABS (Sistema de Frenos Antibloqueo)?",
                "options": [
                  "Reducir el consumo de combustible",
                  "Impedir que las ruedas se bloqueen durante una frenada intensa",
                  "Mantener el vehículo a velocidad constante",
                  "Facilitar el arranque en pendientes"
                ],
                "correct": 1
              },
              {
                "question": "¿Qué efectos produce la fatiga en la conducción?",
                "options": [
                  "Mayor concentración debido al esfuerzo extra",
                  "Disminución del tiempo de reacción y atención",
                  "No afecta si el conductor tiene experiencia",
                  "Solo afecta en viajes nocturnos"
                ],
                "correct": 1
              },
              {
                "question": "¿Qué medida de seguridad se debe tomar al ingresar a un túnel durante el día?",
                "options": [
                  "Encender las luces bajas",
                  "Reducir la velocidad a 20 km/h",
                  "Encender las balizas",
                  "Cerrar todas las ventanillas"
                ],
                "correct": 0
              },
              {
                "question": "¿Qué significa el término 'distancia de frenado'?",
                "options": [
                  "La distancia que recorre el vehículo desde que se detecta un peligro hasta que se pisa el freno",
                  "La distancia que recorre el vehículo desde que se pisa el freno hasta que se detiene completamente",
                  "La distancia de seguridad con el vehículo de adelante",
                  "La distancia máxima a la que funcionan los frenos correctamente"
                ],
                "correct": 1
              },
              {
                "question": "¿Cuál es la consecuencia de conducir con neumáticos desgastados en día de lluvia?",
                "options": [
                  "Mayor consumo de combustible",
                  "Desgaste prematuro de los frenos",
                  "Riesgo de aquaplaning o hidroplaneo",
                  "Excesiva vibración del volante"
                ],
                "correct": 2
              },
              {
                "question": "¿Qué medidas se deben tomar si se produce un incendio en el motor del vehículo?",
                "options": [
                  "Abrir el capó inmediatamente para ventilar",
                  "Detener el vehículo, apagar el motor y utilizar un extintor dirigido a la base del fuego",
                  "Acelerar para que el viento apague el fuego",
                  "Rociar agua sobre el motor"
                ],
                "correct": 1
              },
              {
                "question": "¿Cuál es el límite de puntos en la licencia de conducir según el sistema de scoring?",
                "options": [
                  "10 puntos",
                  "20 puntos",
                  "40 puntos",
                  "No existe un sistema de puntos en Argentina"
                ],
                "correct": 1
              },
              {
                "question": "¿Cómo debe atravesarse un charco de agua en la calzada?",
                "options": [
                  "A velocidad normal, sin cambiar la conducción",
                  "Acelerando para atravesarlo rápidamente",
                  "Reduciendo la velocidad y manteniendo el motor acelerado",
                  "Pisando el embrague y dejándose llevar por la inercia"
                ],
                "correct": 2
              },
              {
                "question": "¿Qué es recomendable hacer antes de realizar un viaje largo?",
                "options": [
                  "Descansar adecuadamente y revisar el estado del vehículo",
                  "Consumir bebidas energizantes para mantenerse alerta",
                  "Tomar un medicamento para evitar el sueño",
                  "Realizar el viaje durante la noche cuando hay menos tráfico"
                ],
                "correct": 0
              },
              {
                "question": "¿Qué información obligatoria debe llevar la placa patente de un vehículo?",
                "options": [
                  "Números, letras y nombre del titular",
                  "Combinación de letras y números según normativa vigente",
                  "Nombre del titular y número de DNI",
                  "Código de barras y número de motor"
                ],
                "correct": 1
              },
              {
                "question": "¿Qué precauciones debe tomar al conducir con niebla?",
                "options": [
                  "Aumentar la velocidad para salir rápido de la zona con niebla",
                  "Reducir la velocidad, encender luces bajas o antiniebla y aumentar la distancia de seguridad",
                  "Encender las luces altas para mejorar la visibilidad",
                  "Seguir muy de cerca las luces del vehículo de adelante"
                ],
                "correct": 1
              },
              {
                "question": "¿Qué función tiene el ESP (Control Electrónico de Estabilidad)?",
                "options": [
                  "Reducir el consumo de combustible",
                  "Controlar la temperatura del motor",
                  "Detectar y reducir la pérdida de control direccional",
                  "Regular la presión de los neumáticos"
                ],
                "correct": 2
              },
              {
                "question": "¿Cómo debe posicionarse el conductor para una conducción segura?",
                "options": [
                  "Lo más alejado posible del volante para protegerse en caso de accidente",
                  "Con los brazos completamente estirados sujetando el volante",
                  "Con los brazos semiflexionados, espalda recta y cabeza apoyada en el reposacabezas",
                  "Con el asiento completamente reclinado para mayor comodidad"
                ],
                "correct": 2
              },
              {
                "question": "¿Qué se debe hacer si durante la conducción se pincha un neumático?",
                "options": [
                  "Frenar bruscamente para detener el vehículo cuanto antes",
                  "Sujetar firmemente el volante, reducir la velocidad gradualmente y dirigirse a un lugar seguro",
                  "Continuar conduciendo hasta la estación de servicio más cercana",
                  "Girar bruscamente hacia la banquina para salir de la calzada"
                ],
                "correct": 1
              },
              
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://naisa.es/14199-home_default/senal-vial-pavimento-deslizante-acero-termolacado.jpg",
               "options": [
               "Cruce de peatones",
               "Pavimento deslizante",
               "Zona escolar",
               "Curva peligrosa"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://www.cartelesdeseguridad.com.ar/images/0000000000VI902707839VI9027.jpg",
               "options": [
               "Zona urbana",
               "Cruce de ferrocarril",
               "Fin del camino",
               "Encrucijada"
               ],
               "correct": 3
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://signovisual.pe/wp-content/uploads/2020/06/Construcci%C3%B3n-06_opt.jpg",
               "options": [
               "Obra en construcción",
               "Cruce de peatones",
               "Zona escolar",
               "Curva peligrosa"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7gxZ1vFfDRdwSdIlb2X9YNbNv5INw8jDtg&s",
               "options": [
               "Sentido único",
               "Doble sentido",
               "Prohibido girar",
               "Ceda el paso"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://m.media-amazon.com/images/I/51SWsNsvdeL._AC_UL400_.jpg",
               "options": [
               "Semáforo adelante",
               "Zona escolar",
               "Cruce de ferrocarril",
               "Curva peligrosa"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal prohíbe:",
               "imageUrl": "https://media.istockphoto.com/id/1207567645/es/vector/u-turn-prohibido-se%C3%B1al-de-carretera.jpg?s=612x612&w=0&k=20&c=rCNpEOJGEbiLgwpe0R1Zv16wRliB7sE3ipaV97UnWCw=",
               "options": [
               "Hacer giro en U",
               "Girar a la izquierda",
               "Adelantar",
               "Detenerse"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS8MyrVDgSlBDvOHbKmU5rAeWS0LzTWLbxw&s",
               "options": [
               "Zona escolar",
               "Cruce de peatones",
               "Desnivel en la carretera",
               "Pavimento deslizante"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://ccimasenalizaciones.pe/wp-content/uploads/2024/07/p-34-proximidad-de-baden.svg",
               "options": [
               "Cruce de ferrocarril",
               "Pendiente pronunciada",
               "Badén",
               "Zona escolar"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://lh6.googleusercontent.com/proxy/hFTvEwDMH8iztXo2hOIlNF_WnHyuhpzxbXRJb-DTKJJ4UAqzUOM-PTeo1al10KCUIXYphGSQxNBWHleTd6Xn7TXs_l13FsD9PdyoF6Byq3plEwH_Vg",
               "options": [
               "Puesto policial",
               "Hospital",
               "Zona escolar",
               "Parada de autobús"
               ],
               "correct": 0
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnziK_wQJh6VLLKTGM3YhrQWs_OY5B7iYLQ&s",
               "options": [
               "Cruce de ferrocarril",
               "Pavimento deslizante",
               "Altura máxima",
               "Zona escolar"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal advierte:",
               "imageUrl": "https://w7.pngwing.com/pngs/282/49/png-transparent-warning-sign-hazard-symbol-rockfall-road-danger-signs-angle-text-triangle-thumbnail.png",
               "options": [
               "Cruce de niños",
               "Desprendimiento de rocas",
               "Zona urbana",
               "Curva peligrosa"
               ],
               "correct": 1
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://lh3.googleusercontent.com/proxy/JIy0z-aABpHN1MV92Xr2f4tSfw7-kJOcCWcj_0lWlL70QXay0NSMIjqAtpBv0I7dTdda1KVJl0LMujq4hR4vDCWPF2Zf6HE7vRdG6p1CqyCqqD5P",
               "options": [
               "Prohibido detenerse",
               "Parada de autobús",
               "Estación de servicio",
               "Ceda el paso"
               ],
               "correct": 2
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://us.123rf.com/450wm/jojoo64/jojoo641507/jojoo64150700541/42199602-se%C3%B1al-de-tr%C3%A1fico-de-indonesia-inicio-de-la-autopista.jpg",
               "options": [
               "Ceda el paso",
               "Fin de autopista",
               "Prohibido girar",
               "Inicio de autopista"
               ],
               "correct": 3
               },
               {
               "question": "Esta señal indica:",
               "imageUrl": "https://multisenal.com/wp-content/uploads/2023/11/SIS-16.png",
               "options": [
               "Hospital",
               "Taller mecánico",
               "Prohibido detenerse",
               "Ceda el paso"
               ],
               "correct": 1
               },
               
               ]
  },
  "accessPasswords": [
    {
      "id": "1",
      "password": "user"
    }
    //holas
  ],
  "adminCredentials": [
    {
      "id": "1",
      "username": "admin",
      "password": "admin123"
    }
  ]
};

// Función para inicializar los datos de la aplicación
export const setupAppData = () => {
  try {
    // Inicializa la aplicación con los datos del JSON
    initializeAppData(quizData);
    console.log('Datos de la aplicación inicializados correctamente');
    return true;
  } catch (error) {
    console.error('Error al inicializar los datos de la aplicación:', error);
    return false;
  }
};