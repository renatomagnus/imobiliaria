import './styles.scss';
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filter';
import Card from '../../components/card';
import Map from '../../components/map';

const ListPage = () => {
  const data = listData
  return (
    <div className="list-page">
      <div className="list-container">
        <div className="wrapper">
          <Filter />
          {data.map( item => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div> 
      <div className="map-container">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default ListPage