import SearchBar from '../../components/searchBar/searchBar';
import './styles.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className="text-container">
        <div className="wrapper">
          <h1 className='title'>Encontre Seu Lar & Tenha Sua Casa Encontrada</h1>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa soluta molestiae officia accusamus praesentium distinctio error, hic minima? Alias quod recusandae dolore, ea provident beatae cupiditate velit! Perspiciatis, vero.</p>

        <SearchBar />
        <div className="boxes">
          <div className="box">
            <h2>+ de 16</h2>
            <p>Anos de Experiência</p>
          </div>
          <div className="box">
            <h2>20 </h2>
            <p>Premiações</p>
          </div>
          <div className="box">
            <h2>+ de 1000</h2>
            <p>Imóveis Vendidos</p>
          </div>
        </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Home