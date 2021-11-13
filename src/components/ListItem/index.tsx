import * as C from './styles'
import {Item} from '../../types/item'

type Props = { //  define os Props da pagina
  valor: Item
  change: (id: number, checked: boolean) => void 
  removeForId: (id: number) => void 
  modalForId: (id: number, open: boolean) => void
}

export const ListItem = ({valor, change, removeForId, modalForId}: Props) => { // utilizia os props na função a ser importada na pagina principal


  const changeChecked = (done: boolean) => { // função para alterar o valor do done do vetor na pagina principal quando for alterado
    if(valor.done !== done){
      change(valor.id, done) //função que foi chamada da pagina principal para esta por meio dos props definido acima
    }
  }


  return(
    <C.Container done={valor.done} >
      <input type="checkbox" checked={valor.done} onChange={e => {
          changeChecked(e.target.checked)
        }
      } />
      <label><a onClick={() => modalForId(valor.id, true)} >{valor.name} -- {valor.done.toString()}</a></label>
      <button onClick={() => removeForId(valor.id)} >Remove</button>
      {/* {console.log(valor.done)} */}
     
    </C.Container>
  )
}