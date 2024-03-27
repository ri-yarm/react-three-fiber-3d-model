import { Canvas } from '@react-three/fiber'
import {Suspense} from "react";
import {OrbitControls} from "@react-three/drei";
// import './App.css'

import Car from "./Model/Car/Scene";

function App() {
 return (
     <Canvas camera={{position: [0, 2, 5], zoom: 1}}>
         <OrbitControls />
         <color attach={"background"} args={["violet"]} />
         <ambientLight intensity={0.5} />
         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
         <pointLight position={[-10, -10, -10]} />
         <Suspense fallback={null}>
             <Car />
         </Suspense>
     </Canvas>
 )
}

export default App

const daysToReachTop = (upDistancePerDay: number, downDistancePerNight: number, hillHeight: number) => {
    // если высота холма меньше или равна нулю, то она уже на холме
    if (hillHeight <= 0) {
        return 0;
    }

    // если дистанция за один день равна 0, то она никогда не взберётся
    if (upDistancePerDay <= 0) {
        return Infinity
    }

    // если дистанция за один день больше высоты холма, то она взберётся за один день
    if (upDistancePerDay > hillHeight) {
        return 1
    }

    // Рассчитываем количество дней, необходимых для подъема на вершину холма. по формуле
    // days = hillheight / (upDistancePerDay - downDistancePerNight)
    const days: number =  Math.ceil(hillHeight / (upDistancePerDay - downDistancePerNight));

    console.log(`черепаха будет на холме через ${days} дней`);
}
daysToReachTop(50, 30, 100)


const countHandshakes = (numPeople: number) => {
    // если количество людей меньше или равно 1, то рукопожатий не будет
    if (numPeople <= 1) {
        return 0;
    }

    const handshakes = (numPeople * (numPeople - 1)) / 2;

    console.log(`количество рукопожатий ${handshakes}`);
}

const numPeople = 10;
 countHandshakes(numPeople);


const removeDuplicates = (inputString: string) => {
    // разделяем строку на слова
    const words = inputString.split(',');

    // создаем set из массива слов, чтобы удалить дубликаты(это единственное где пригождается set)))
    const uniqueWordsSet = new Set(words);

    // преобразуем set в массив и затем в строку
    const uniqueString = [...uniqueWordsSet].join(',');

    console.log(uniqueString);
}

const inputString = "кошка,собака,лошадь,корова,кошка,собака,лошадь,лошадь,корова,корова,кот";
removeDuplicates(inputString);

