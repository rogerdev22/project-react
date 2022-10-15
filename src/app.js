// Hoje 13/10/2022 revisando a aula 01 - Cadastrando novos usuarios 
// hoje 14/10/2022 - Gravando os dados 

import React ,{useState,useRef,useEffect} from "react" ;
import axios from "axios" ;

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Inputlabel,
  Input,
  Button,
  User
} from "./styles";

import Casal1 from './assets/casal1.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'


function App() {
   const [users,setUsers]=useState([]);
   const inputName=useRef();
   const inputAge=useRef();

   

   async function addNewUser() {

    const {data:newUser} = await axios.post("http://localhost:3005/users",{
    name:inputName.current.value,
    age :inputAge.current.value,  
    });
      
     console.log(newUser)
      setUsers([ ... users,newUser]);  
  }
   useEffect(()=> {
    console.log("Fui chamada para modificar")
    async function fecthUser() {

      const {data:newUsers} = await axios.get("http://localhost:3005/users");
       
      setUsers(newUsers);
   }
    fecthUser()
    },[])

  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3005/users/${userid}`)

      console.log( "Oi, fui chamada para excluir")
      console.log(userid)
      const addNewUsers=users.filter(user=>user.id!==userid)
       
      setUsers(addNewUsers)
  }

   return (
    <Container>
      <Image alt="logo-casal1" src={Casal1}/>

         <ContainerItens>

             <H1>Olá React</H1>

            <Inputlabel> Nome</Inputlabel>
            <Input ref={inputName} placeholder="Nome"/>
            
            <Inputlabel>Idade</Inputlabel>
            <Input ref={inputAge} placeholder="Idade"/>
                    
      <Button onClick={addNewUser}> 
              Cadastrar <img alt="Seta" src={Arrow} />
      </Button>
             
          <ul>

            {users.map((user)=> (

              <User key={ user.id } >
                 
                  <p>{user.name}</p> <p> { user.age}</p>

                  <button onClick={()=>deleteUser(user.id)}>
                   <img src={Trash} alt="lixo"/>
                  </button>
            </User>
          ))}
        </ul>      
         
     </ContainerItens>         
   </Container>

 );
  }
export default App
