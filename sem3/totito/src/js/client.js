import { hayVacios, verificarGanador } from './services';

const appstate = {
  turno: false,
  tablero: [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]
}
 
const Boton = (state, fila, casilla) => {
  const boton = document.createElement("button")
  if (state.tablero[fila][casilla] == 0) {
    boton.innerHTML = "-";
  } else if (state.tablero[fila][casilla] == 1) {
    boton.innerHTML = "X";
  } else {
    boton.innerHTML = "O";
  }
  
  if (state.tablero[fila][casilla] == 0 && verificarGanador(state) == 0) {
    boton.onclick = () => {
      state.turno = !state.turno
      if (state.turno) {
        state.tablero[fila][casilla] = 1
      } else {
        state.tablero[fila][casilla] = -1
      }
      render(state)
    }
  }
  
  return boton
}

const Ganador = (state) => {
  const ganador = document.createElement("h1")
  if(verificarGanador(state) != 0) {
    if (verificarGanador(state) == 3) {
      ganador.innerHTML = "Ha gando X."
    } else {
      ganador.innerHTML = "Ha gando O."
    }
    return ganador
  } else {
    if (!hayVacios(state)) {
      ganador.innerHTML = "Ha sido un empate."
      return ganador
    }
  }
}

const render = (state) => {
  const tablero = document.createElement("div")
  let fila = document.createElement("div")
  for (let nfila=0; nfila<state.tablero.length; nfila++) {
    for (let ncasilla=0; ncasilla<state.tablero[nfila].length; ncasilla++) {
      const boton = Boton(state, nfila, ncasilla)
      fila.appendChild(boton)
    }
    tablero.appendChild(fila)
    fila = document.createElement("div")
  }

  const root = document.getElementById("root")
  if (root.hasChildNodes()) {
    root.innerHTML = null
  }
  root.appendChild(tablero)
  root.appendChild(Ganador(state))
}

render(appstate)
