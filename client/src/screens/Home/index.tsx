import { Button, Card} from "@material-tailwind/react"
import Header from "../../components/Header"
import Hero from '../../assets/hero.svg'
export default function Home(){
  // home produtos sobre nos contato entrar
  return (
    <div>
      <Header/>
      <div className="bg-secondary">
       <div className="bg-secondary w-1/2 flex flex-row">
        <h2 className="text-primary font-bold text-4xl">DOMINE AS QUADRAS COM A NOSSA
        NOVA COLEÇÃO</h2>
        <Hero/>
       </div>
      </div>
    </div>
  )
}
