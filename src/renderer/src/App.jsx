/* eslint-disable prettier/prettier */
import Header from "./components/header/header"
import styles from './App.module.css';
function App() {

  return (
    <div className={styles.app}>
      <Header/>
      <main className=" bg-slate-100" >
        hola
      </main>
    </div>
  )
}

export default App
