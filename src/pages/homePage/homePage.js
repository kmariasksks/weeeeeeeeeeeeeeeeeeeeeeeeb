import Info from '../../components/info/info'
import '../../components/info/info.css'
import Info2 from '../../components/info2/info2'
import '../../components/info2/info2.css'
import Button from '../../components/button/button'
import '../../components/button/button.css'
import Headers from '../../components/header/headers'


function HomePage() {
  return (
    <div className="HomePage">
      <Headers />
      <Info/>
      <Info2/>
      {/* <Button/> */}
    </div>
  );
}

export default HomePage;