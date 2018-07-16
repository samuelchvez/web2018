export const hayVacios = (state) => {
    for (let fila=0; fila<state.tablero.length; fila++) {
      for (let casilla=0; casilla<state.tablero[fila].length; casilla++) {
        if (state.tablero[fila][casilla] == 0) {
          return true
        }
      }
    }
  return false
}

export const verificarGanador = (state) => {
  const sumas = []
  let d1 = 0
  let d2 = 0
  for (let fila=0; fila<state.tablero.length; fila++) {
    let sumaHorizontal = 0
    let sumaVertical = 0
    for (let casilla=0; casilla<state.tablero[fila].length; casilla++) {
      sumaHorizontal += state.tablero[fila][casilla]
      sumaVertical += state.tablero[casilla][fila]
    }
    sumas.push(sumaVertical)
    d1 += state.tablero[fila][fila]
    d2 += state.tablero[fila][2 - fila]

    sumas.push(sumaHorizontal)
    sumaHorizontal = 0
  } 
  sumas.push(d1)
  sumas.push(d2)

  if (sumas.includes(3)) {
    return 3
  } else if (sumas.includes(-3)) {
    return -3
  } 
  return 0
}