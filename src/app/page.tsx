import styles from "./page.module.css";
import '../app/bootstrap/dist/css/bootstrap.min.css';
import HikR from "./components/HikR";
import Footer from "./components/Footer";
import Hikers from "./components/Hikers";
import { Header } from "./components/Header";
import Cards from "./components/Cards";



export default function Home() {
  return (
    <div>

      <Header/>
      <Hikers/>
      <br/>
      <Cards/>
      <HikR/>
      <Footer/>

      
      

    </div>
  );
}
