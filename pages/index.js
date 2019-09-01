import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { isRegExp } from 'util';
import localStorage from 'local-storage';
//https://reactjs.org/docs/forms.html
class Assessment extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      room1: {checked:true,
        adult:1,
        children:0},
      room2: {checked:false,
        adult:1,
        children:0},
      room3: {checked:false,
        adult:1,
        children:0},
      room4: {checked:false,
        adult:1,
        children:0}
    };
    console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.DDChanged = this.DDChanged.bind(this);
    this.setSelectedOption = this.setSelectedOption.bind(this);
    this.loaded = this.loaded.bind(this);
    
  }

  componentDidMount() {
    console.log("setting in componentDidMount");
    this.setState(JSON.parse(localStorage.get('allStates')) || {
      room1: {checked:true,
        adult:1,
        children:0},
      room2: {checked:false,
        adult:1,
        children:0},
      room3: {checked:false,
        adult:1,
        children:0},
      room4: {checked:false,
        adult:1,
        children:0}
    })
  }
  

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(`checkbox changed : ${name} `,  value)
    if(name==="room2" && value)
      this.setState({
        room2: {checked:value,"adult": 1,"children":0}
      });
    else if(name==="room3" && value)
      this.setState({
        room2: {checked:value,"adult": 1,"children":0},
        room3: {checked:value,"adult": 1,"children":0}
      });
    else if(name==="room4" && value)
      this.setState({
        room2: {checked:value,"adult": 1,"children":0},
        room3: {checked:value,"adult": 1,"children":0},
        room4: {checked:value,"adult": 1,"children":0}
      });
    else if(name==="room1" && value){
      this.setState({
        room1: {checked:value,"adult": 1,"children":0}
      });
    }

    else if(name==="room4" && !value)
      this.setState({
        room4: {checked:value,"adult": 1,"children":0}
      });
    else if(name==="room3" && !value)
      this.setState({
        room4: {checked:value,"adult": 1,"children":0},
        room3: {checked:value,"adult": 1,"children":0}
      });
    else if(name==="room2" && !value)
      this.setState({
        room2: {checked:value,"adult": 1,"children":0},
        room3: {checked:value,"adult": 1,"children":0},
        room4: {checked:value,"adult": 1,"children":0}
      });
    else if(name==="room1" && !value) {
      this.setState({
        room1: {checked:value,"adult": 1,"children":0}
      });
    }
  }

  loaded(){
    console.log({"loaded":this.state})
  }

  async DDChanged(event){
    const target = event.target;
    const value =  target.value;
    const name = target.name.split('-');
    var index=name[0];
    var DDType=name[1];
    //console.log(value,name);
    if(DDType==="DD1")
      await this.setState({
        [index]: {checked:this.state[index].checked,"adult":parseInt([value]),"children":this.state[index].children}
      });
    else
      await this.setState({
        [index]: {checked:this.state[index].checked,"adult":this.state[index].adult,"children":parseInt([value])}
      });

    console.log(this.state);
  }
  setSelectedOption(){
    localStorage.set('allStates', JSON.stringify(this.state))
    console.log( localStorage.get('allStates'));
  }

  unSetSelectedOption(){
    localStorage.clear()
    console.log( localStorage.get('allStates'));
  }

  render() {
    return (
      <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className='hero'>
      <h1 className='title'>Assessment 2!</h1>
      <div className='row'>
        <a className='card'>
          <h3>ROOM 1</h3>
          <div  className='flex'>
            <span>Adults</span>
            <span className="spacing">Children</span>
          </div>
          <div  className='flex'>
            <span>(18+)</span>
            <span className="spacing">(0-17)</span>
          </div>
          <select name="room1-DD1" className="first-DD" onChange={this.DDChanged}>
            <option selected={this.state.room1.adult===1 ?  true:null} value="1">1</option>
            <option selected={this.state.room1.adult===2 ?  true:null} value="2">2</option>
          </select>
          <select name="room1-DD2" className="second-DD" onChange={this.DDChanged}>
            <option selected={this.state.room1.children===0 ?  true:null} value="0">0</option>
            <option selected={this.state.room1.children===1 ?  true:null} value="1">1</option>
            <option selected={this.state.room1.children===2 ?  true:null} value="2">2</option>
          </select>
        </a>      
        <a className='card'>
          <h3>ROOM 2 <input name="room2" type="checkbox"  onChange={this.handleInputChange} checked= {this.state.room2.checked}/></h3>
            <div  className='flex'>
              <span>Adults</span>
              <span className="spacing">Children </span>
            </div>
            <div  className='flex'>
              <span>(18+)</span>
              <span className="spacing">(0-17)</span>
            </div>
            <select disabled={this.state.room2.checked !=true ? true: null} name="room2-DD1"  className="first-DD" onChange={this.DDChanged}>
              <option selected={this.state.room2.adult===1 ?  true:null} value="1">1</option>
              <option selected={this.state.room2.adult===2 ?  true:null} value="2">2</option>
            </select>
            <select disabled={this.state.room2.checked !=true ? true: null} name="room2-DD2" className="second-DD" onChange={this.DDChanged}>
              <option selected={this.state.room2.children===0 ?  true:null} value="0">0</option>
              <option selected={this.state.room2.children===1 ?  true:null} value="1">1</option>
              <option selected={this.state.room2.children===2 ?  true:null} value="2">2</option>
            </select>
        </a>
        <a className='card'>
          <h3>ROOM 3 <input name="room3" type="checkbox"  onChange={this.handleInputChange} checked= {this.state.room3.checked}/></h3>
            <div  className='flex'>
              <span>Adults</span>
              <span className="spacing">Children</span>
            </div>
            <div  className='flex'>
              <span>(18+)</span>
              <span className="spacing">(0-17)</span>
            </div>
            <select disabled={this.state.room3.checked !==true   ?  true: null} onLoad={this.loaded} name="room3-DD1" className="first-DD" onChange={this.DDChanged}>
              <option selected={this.state.room3.adult===1 ? true:null} value="1">1</option>
              <option selected={this.state.room3.adult===2 ?  true:null} value="2">2</option>
            </select>
            <select disabled={this.state.room3.checked !==true  ? true: null}  name="room3-DD2" className="second-DD" onChange={this.DDChanged}>
              <option selected={this.state.room3.children===0 ?  true:null} value="0">0</option>
              <option selected={this.state.room3.children===1 ?  true:null} value="1">1</option>
              <option selected={this.state.room3.children===2 ?  true:null} value="2">2</option>
            </select>
        </a>
        <a className='card'>
          <h3>ROOM 4 <input name="room4" type="checkbox"  onChange={this.handleInputChange} checked= {this.state.room4.checked}/></h3>
            <div  className='flex'>
              <span>Adults</span>
              <span className="spacing">Children</span>
            </div>
            <div  className='flex'>
              <span>(18+)</span>
              <span className="spacing">(0-17)</span>
            </div>
            <select disabled={this.state.room4.checked !==true ? true: null}  name="room4-DD1" className="first-DD" onChange={this.DDChanged}>
              <option selected={this.state.room4.adult===1 ?  true:null} value="1">1</option>
              <option selected={this.state.room4.adult===2 ?  true:null} value="2">2</option>
            </select>
            <select disabled={this.state.room4.checked !==true ? true: null}  name="room4-DD2" className="second-DD" onChange={this.DDChanged}>
              <option selected={this.state.room4.children===0 ?  true:null} value="0">0</option>
              <option selected={this.state.room4.children===1 ?  true:null} value="1">1</option>
              <option selected={this.state.room4.children===2 ?  true:null} value="2">2</option>
            </select>
        </a>
      </div>
      <div className="row">
        <button type="button" onClick={this.setSelectedOption}>Submit</button>
        <button type="button" onClick={this.unSetSelectedOption}>Reset</button>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .flex{
        display: flex;
        flex-direction: row;
        margin-left:20px;
      }
      .spacing{
        margin-left:20px;
      }

      .first-DD{
        margin-top:7px;
        margin-left: 25px;
      }

      .second-DD{
        margin-top:7px;
        margin-left: 45px;
      }
      .card {
        padding: 18px 18px 24px;
        margin-left:7px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      
    `}</style>
  </div>
    );
  }
}

export default Assessment;
