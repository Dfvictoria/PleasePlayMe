//@ts-check


const dataProductos = [
  {
    id: "1",
    title: "Bajo Fender Jaguar",
    description: "Cuerpo Agathis, pickup Humbucker",
    descriptionLong: "Bajo 4 Cuerdas Squier By Fender Vintage Modified Jaguar Bass. Cuerpo: Agathis. Cuello: Maple, C-Shape. Diapasón: Palo de rosa. tiene marcas de posición envejecidas y su rugido procede de dos cápsulas Jazz Bass® con interruptor activo/pasivo, serie/paralelo. Controles Volumen agudos, medios, graves.",
    price: 130000,
    imageUrl: "https://i.imgur.com/LMveY0u.jpg",
    imageVertical: "https://i.imgur.com/dhorDsx.jpg",
    category: "cuerdas",
  },
  {
    id: "2",
    title: "Guitarra Acústica Martin D12",
    description: "Cuerpo solido abeto, pickup Fishman",
    descriptionLong: "Tapa de pícea maciza, base y laterales HPL con acabado de caoba, puente y diapasón Micarta, 20 trastes, mecanismo de cromo, con pastilla de sonda Fishmann integrada.",
    price: 200000,
    imageUrl: "https://i.imgur.com/QidVY3k.jpg",
    imageVertical: 'https://i.imgur.com/XxRS4yRh.jpg',
    category: "cuerdas",
  },
  {
    id: "3",
    title: "Eléctrica Gibson ES-335",
    description: "Cuerpo arce, pickup Humbucker",
    descriptionLong: "Las pastillas humbucking calibradas tipo T de Gibson se combinan con nuestro conjunto de control cableado a mano. El resultado es ese tono versátil de Gibson ES que los guitarristas han anhelado durante más de 60 años. Los afinadores Vintage Deluxe con botones Keystone proporcionan estabilidad de afinación y entonación precisa, combinados con un puente ligero de aluminio ABR-1 y un cordal de la barra de parada, anclado por ruedecillas de acero y tacos de cordal.",
    price: 220000,
    imageUrl: "https://i.imgur.com/inSSkH1.png",
    imageVertical: 'https://i.imgur.com/XGUUcdI.png',
    category: "cuerdas",
  },
  {
    id: "4",
    title: "Guitarra Criolla Yamaha C70",
    description: "Cuerpo abeto, cuerdas nylon",
    descriptionLong: "La serie C de guitarras clásicas Yamaha ofrece la mejor relación calidad-precio para músicos nóveles, combinando un tono y un confort excepcionales con unos acabados propios de gamas superiores.",
    price: 160000,
    imageUrl: "https://i.imgur.com/ySgUO8rh.jpg",
    imageVertical: 'https://i.imgur.com/imD6Tmhh.jpg',
    category: "cuerdas",
  },

  {
    id: "5",
    title: "Bateria Mapex Prodigy",
    description: "5 cuerpos Con Fierros + Platillos + Banqueta",
    descriptionLong:"Tom 12x9, Tom 13x10, Tom de piso 16x16, redoblante 14x55, bombo 22x16, parches Remo®, crash 16, Hi-Hat 14. Con acabado recubierto, los tambores están equipados con Prodigy, el nuevo modelo que utiliza un solo punto de contacto.",
    price: 160000,
    imageUrl: "https://i.imgur.com/3uUg7LJ.jpg",
    imageVertical: "https://i.imgur.com/aqJ9ad5.jpg",
    category: "percusión",
  },

  {
    id: "6",
    title: "Set De Platillos Stagg",
    description: "Hi Hat 13 + Crash 16",
    descriptionLong: "Los platillos AX son una innovación de Stagg, en la que crearon platillos de aleación de acero y cobre, logrando así platillos resistentes, con buen sustain, volumen y proyección. Excelentes como primeros platillos para comenzar a tocar la batería y estudio.",
    price: 22000,
    imageUrl: "https://i.imgur.com/kTamkEt.png",
    imageVertical: 'https://i.imgur.com/kTamkEt.png',
    category: "percusión",
  },

  {
    id: "7",
    title: "Cajon Peruano",
    description: "Flamenco con bordona",
    descriptionLong: "Profundidad 30cm, Ancho 31cm, Alto 46cm. Fabricado en Argentina.",
    price: 4500,
    imageUrl: "https://i.imgur.com/ria0kNQ.png",
    imageVertical: 'https://i.imgur.com/ria0kNQ.png',
    category: "percusión",
  },

  {
    id: "8",
    title: "Batería Electrónica Midiplus Ed9",
    description: "6 Cuerpo 4 Platos",
    descriptionLong: 'Fabricada con parches reforzados de doble malla en todos los cuerpos y un módulo con los kits más buscados nos brinda una auténtica experiencia de percusión, tanto en calidad de sonido como en performance a la hora de tocar.',
    price: 318000,
    imageUrl: "https://i.imgur.com/Vyj9AAz.png",
    imageVertical: 'https://i.imgur.com/Vyj9AAz.png',
    category: "percusión",
  },

  {
    id: "9",
    title: "Micrófono Shure SM SM58-LC",
    description: "Dinámico cardioide gris oscuro/plateado",
    descriptionLong: 'Su dinamismo lo hace ideal para vocalistas e instrumentos. Resulta liviano y se adapta a todo tipo de pies o soportes. Al no necesitar fuente de alimentación, te brindará un alto grado de autonomía para un uso tanto en exteriores como en interiores.',
    price: 37000,
    imageUrl: "https://i.imgur.com/8I7XMkS.png",
    imageVertical:'https://i.imgur.com/X0vxpne.jpg',
    category: "accesorios",
  },

  {
    id: "10",
    title: "Placa De Audio Interfaz",
    description: "Focusrite Scarlett Solo 3ra Generacion 2019",
    descriptionLong: 'Conectividad USB Tipo C, Protocolo USB 2.0, E/S simultáneas 2 x 2, Resolución A/D 24-bit/192 kHz, Alimentación phantom, una entrada instrumento y una micrófono, una salida de auriculares.',
    price: 38000,
    imageUrl: "https://i.imgur.com/bAxEDhF.png",
    imageVertical: 'https://i.imgur.com/bAxEDhF.png',
    category: "accesorios",
  },

  {
    id: "11",
    title: "Funda Premium Reforzada",
    description: "Varias medidas, para guitarra o bajo",
    descriptionLong: "Funda super resistente e impermeable. Reforzada. Completamente acolchada. Agarre de mástil regulable. Material: 1200D polyester, interior en pana marrón - Detalles en símil cuero Reforzada por completo - Dos bolsillos delanteros y uno trasero que esconde las correas de mochila -Correa reforzada con ganchos metálicos, desmontable.",
    price: 15000,
    imageUrl: "https://i.imgur.com/wySZrf3.png",
    imageVertical: "https://i.imgur.com/mAx2r3D.png",
    category: "accesorios",
  },

  {
    id: "12",
    title: "Afinador Korg Ga-40bk",
    description: "Guitarra/bajo, con micrófono y autoapagado",
    descriptionLong: "Afinador diatónico para guitarra y bajo Korg GA-40. Válido para afinar utilizando el micrófono interno o conectándolo directamente el instrumento.",
    price: 2000,
    imageUrl: "https://i.imgur.com/lAAPo2U.png",
    imageVertical: "https://i.imgur.com/lAAPo2U.png",
    category: "accesorios",
  },
];

export default dataProductos;
