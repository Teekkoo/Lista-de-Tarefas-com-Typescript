import {useState} from 'react'
import * as C from './App.styles' //forma alterantiva para import {Container, ..., ..., ...} from './App.styles'
import { Item } from './types/item'
import {ListItem } from './components/ListItem'
import {AddArea} from './components/AddArea'
import {Modal} from './components/Modal'

const App = () => {

  const [list, setList] = useState<Item[]>([ // cria um useState de array do tipo <Item>, ou seja, especifica os item que podem ser inseridos no array 
    {id: 1, name: 'Comprar o pão na padaria', done: false, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque animi eos praesentium facilis quibusdam tempore nobis possimus in, voluptate maxime quod pariatur officiis illum minima rem harum mollitia temporibus sed!' }, 
    {id: 2, name: 'Comprar um bolo na padaria', done: true, content: 'sit amet consectetur, adipisicing elit. Itaque animi eos praesentium facilis quibusdam tempore nobis possimus in, voluptate maxime quod pariatur officiis illum minima rem harum !'}
  ])
  const [openModal, setOpenModal] = useState(false)
  const [listModal, setListModal] = useState<Item[]>()

  const handleAddTask = (taskName: string, taskContent: string) => { //função para inserir um novo item no vetor, puxando o valor do componente AddArea
    let newList = [...list] // clono o vetor list na variavel newList
    newList.push({ // insiro um novo valor na variavel
      id: list.length+1,
      name: taskName,
      done: false,
      content: taskContent
    })
    setList(newList) 
  }

  const changeDone = (id: number, done: boolean) => {//função para alterar o Done no vetor, puxando os valores do componente ListItem
    let newList = [...list] // clono o vetor list na variavel newList
    newList.forEach(lista => { 
      if(lista.id === id){
        lista.done = done
      }
   });
   setList(newList)
  }

  const removeId = (id: number) =>{ //função para remover item do vetor, puxando os valores do componente ListItem
    let newList = [...list] // clono o vetor list na variavel newLis
    newList.splice(id-1, 1) 
    newList.forEach(lista => { 
      if(lista.id > id){
        lista.id = lista.id-1
      }
   });
    setList(newList)
  }

  const modal = (id:number, open: boolean) => {
    let newList = [...list] // clono o vetor list na variavel newList
    
    newList.forEach(lista => { 
    if(lista.id === id){
       setListModal([lista])
       setOpenModal(open)
    }
    });
}

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter = {handleAddTask} /> {/* importo a função da pagina AddArea e passo por meio de props a função */}
        {list.map((item, index)=>(
          <ListItem key={index} valor={item} change={changeDone} removeForId={removeId} modalForId={modal}/> // importo a função da pagina ListItem e passo por meio de props a função e o valor
        ))}

      </C.Area >
      {openModal && listModal?.map((item, index)=>(
          <Modal key={index} valor={item} modalForId={modal}></Modal>
      )) }
    </C.Container>
  )
}

export default App