import { Button, Card } from "@material-tailwind/react";

export default function Header(){
  return(
   <div  className={`bg-secondary flex flex-row justify-center`}>
     <Card className={`bg-secondary flex flex-row w-1/2 justify-between p-5`}>
        <Button className="bg-secondary">Home</Button>
        <Button className="bg-secondary">Produtos</Button>
        <Button className="bg-secondary">Sobre Nós</Button>
        <Button className="bg-secondary">Contato</Button>
        <Button className="bg-primary">Entrar</Button>
      </Card>
   </div>
  )
}
