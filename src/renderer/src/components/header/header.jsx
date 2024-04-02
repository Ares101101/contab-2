/* eslint-disable prettier/prettier */
import Lupa from "../../assets/logoBusqueda"
import CloseIcon from "../../assets/logoclose"
import MaximiIcon from "../../assets/logomaximize"
import MinimizeIcon from "../../assets/logominimize"
import './header.css'

function Header() {
    const minimize = () => window.api.minimize()
    const maximize = () =>  window.api.maximize()
    const close = () => window.api.close()
  return (
    <header className=" h-full relative headerTitle flex items-center justify-center" id="headerTitle" >
      <button className="flex gap-2 items-center justify-center">
        <Lupa className="w-3 select-none"/> 
        <p className="select-none">Contab2</p>
      </button>  
      <section className=" h-full w-36 absolute grid grid-cols-3 right-0">
        <button className=" grid items-center justify-center" onClick={minimize}><MinimizeIcon className=" w-[9px]"/></button>
        <button className=" grid items-center justify-center" onClick={maximize}><MaximiIcon className=" w-[9px]"/></button>
        <button className=" grid items-center justify-center" onClick={close}><CloseIcon className=" w-[9px]"/></button>
      </section>
    </header>
  )
}
export default Header