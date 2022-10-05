
import {React, useState} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import CardView from './components/CardView';
import Detail from './components/Detail';
import style from './scss/app.module.scss';
import { changeSort } from './store';

function App() {

  let a = useSelector((state) => {return state.dataText});
  // console.log(a.dataText[0])

  let navigate = useNavigate();

  let dispatch = useDispatch();

  let [test, setTest] = useState(
      [
        {
          name: '둘리', age: 5
        },
        {
          name: '뽀삐', age: 9
        }
      ]
    )


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => {navigate('/')}}>TestPage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
      <>
      <div className={style.main_bg}></div>
        <div className='container'>
          <button onClick={() => {}}>테스트정렬</button>
          {


              test.map((aa, i) => {
                // console.log(aa)
                return <>
                <h2>{aa.name}</h2>
                <h3>{aa.age}</h3>
                </>
              })
            }
          <button onClick={() => {dispatch(changeSort())}}>상품정렬</button>
          <div className='row'>
            {
              a.map((result, i) => {
                return <CardView result = {result} key={i} index = {i}/>

              })
            }
          </div>
        </div>
      </>
    }/>
    <Route path='/detail/:id' element={<Detail/>}/></Routes>
    </div>
  );
}

export default App;
