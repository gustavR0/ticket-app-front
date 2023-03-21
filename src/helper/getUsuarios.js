export const getUsuarios = () => {
  return {
    agente: window.localStorage.getItem('agente'),
    escritorio: window.localStorage.getItem('escritorio')
  }
}
