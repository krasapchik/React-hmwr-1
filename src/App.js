import './App.css';
import Header from './coponent/header';
import Main from './coponent/main';
import Footer from './coponent/footer';
import Text from './coponent/text';

function Name (){
  return(
    <h1>Mamytov Kutman</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Main uddrl={'https://avatars.mds.yandex.net/i?id=16b8750d946e4f0d48e59f1726d6b131-5875861-images-thumbs&n=13'} />
      <Header ftext={'First child'} />
      <Footer email={'email'} phone={'01234456789'} />
      <Text url ="22222"/>
      <Name/>
    
    </div>
  );
}

export default App;
