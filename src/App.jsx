import React from 'react';
import { useState } from 'react';
import './App.css'



function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]); // 따봉은 배열 [ , , ]
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className="black-nav">       
        <h4>ReactBlog</h4>
      </div>

      {
        글제목.map(function(a,i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>{글제목[i]} 
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)}}> 👍</span> {따봉[i]} 
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* <button onClick={()=> {
        let copy = [...글제목];
        copy[0]='여자 코트 추천';
        글제목변경(copy);
      }}>전환</button>
      
      <button onClick={()=>{
        let toSort = [...글제목];
        toSort.sort();
        글제목변경(toSort); 
      }}>정렬</button> */}

      <input onChange={(e)=>{
        입력값변경(e.target.value)
      }} />

      <button onClick={()=>{
        let copy = [...글제목];

        copy.unshift(입력값);
        따봉.unshift(0);

        글제목변경(copy);
        
        
      }}>작성</button>
      
      {
        modal ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null  // props 로 글제목, 글제목변경 전달 (App->Modal)
      }
      {/* <Modal12 /> */}
    </div>
  )
}

function Modal(props){

  return(
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {props.글제목변경(['여자 코트 추천','강남 우동 맛집','파이썬 독학'])}}>글수정</button>
    </div>
  )
}

// class Modal12 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name: 'kim',
//       age : 20
//     }
//   }
//   render(){
//     return (
//       <div>안녕 {this.state.name}
//         <button onClick={()=>{
//           this.setState({age : 21})
//         }}>버튼</button>
      
//       </div>
//     )
//   }
// }


export default App
