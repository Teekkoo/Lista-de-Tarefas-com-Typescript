
import * as C from './styles'
import {Item} from '../../types/item'

type Props = {
  valor: Item
  modalForId: (id: number, open: boolean) => void
}

export const Modal = ({valor, modalForId } :Props) => {
  return(
    <C.Container onClick={() => modalForId(valor.id, false) } >
      <C.Content>
        <h1>{valor.name}</h1>
        <p>{valor.content}</p>
      </C.Content>
    </C.Container>
  )
}