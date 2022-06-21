//@ts-check
import img1 from '../Components/assets/item1.jpg'
import img2 from '../Components/assets/item2.jpg'
import img3 from '../Components/assets/item3.png'
import img4 from '../Components/assets/item4.jpg'

const dataProductos = [
  {
    id: 1,
    title: "Bajo Fender Jaguar",
    description: "Cuerpo Agathis, pickup Humbucker",
    price: 130000,
    imageUrl: {img1}
  },
  {
    id: 2,
    title: "Guitarra Acústica Martin D12",
    description: "Cuerpo solido abeto, pickup Fishman",
    price: 200000,
    imageUrl: {img2},
  },
  {
    id: 3,
    title: "Eléctrica Gibson ES-335",
    description: "Cuerpo arce, pickup Humbucker",
    price: 220000,
    imageUrl: {img3},
  },
  {
    id: 4,
    title: "Guitarra Criolla Yamaha C70",
    description: "Cuerpo abeto, cuerdas nylon",
    price: 160000,
    imageUrl: {img4},
  },
];

export default dataProductos;
