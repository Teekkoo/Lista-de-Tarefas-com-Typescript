import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = { //  define o Props da pagina
    onEnter: (taskName: string, taskContent: string) => void
}

export const AddArea = ({onEnter}: Props) => { // utilizia o props na função a ser importada na pagina principal

  const [inputText, setInputText] = useState('')
  const [inputContent, setInputContent] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => { // função para inserir um novo item no vetor da pagina principal 
    // console.log(e.code) --->  e.code = informa o codigo da tecla digitada
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText, inputContent)  //função que foi chamada da pagina principal para esta por meio dos props definido acima
      setInputText('')
      setInputContent('')
    }
  }

  return(
    <C.Container>
      <C.Row>
      <textarea name="" value={inputContent} placeholder="adicione uma descrição" onChange={e => setInputContent(e.target.value)}></textarea>
      </C.Row>
      <C.Row>
      <div className="image">➕</div>
      <input  type="text"  
              placeholder="adicione um titulo para tarefa" 
              value={inputText} 
              onChange={e => setInputText(e.target.value)} 
              onKeyUp={handleKeyUp}/>  
      </C.Row>
    </C.Container>
  )
}