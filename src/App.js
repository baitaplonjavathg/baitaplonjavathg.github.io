import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
         txtUsername :'aaa',
         txtPassword :'',
         txtDesc :'Mac dinh',
         sltGender : 1,
         rdLang : 'vi',
         chkbStatus : false
    };
    this.onHandleChange= this.onHandleChange.bind(this);
    this.onHandleSubmit= this.onHandleSubmit.bind(this);
  }
  onHandleChange(event)
  { 
   var target = event.target;
   var name = target.name;
   var value = target.type === 'checkbox' ? target.checked : target.value
   this.setState({
      [name]:value
   });
  }
  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }
render(){
  return (
    
    <div className="container mt-30">
      
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          
          <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">From</h3>
              </div>
              <div className="panel-body">
                
                
                <form onSubmit={this.onHandleSubmit} >
                  
                
                  <div className="form-group">
                    <label >Username:</label>
                    <input 
                    type="text"
                    className="form-control"
                    name="txtUsername"
                    onChange={ this.onHandleChange }
                    value = {this.state.txtUsername}
                    />
                  </div>
                
                  <div className="form-group">
                    <label >Password:</label>
                    <input 
                    type="password"
                    className="form-control"
                    name="txtPassword"
                    onChange={ this.onHandleChange }
                    value = {this.state.txtPassword}
                    />
                  </div>

                  <div className="form-group">
                    <label >Mô tả:</label>
                    
                    <textarea 
                      className="form-control" 
                      rows="3" 
                      name="txtDesc"
                      onChange = {this.onHandleChange}
                      value = {this.state.txtDesc}></textarea>
                      
                      <br/>
                    <label>Giới tính :</label>
                    <select className="form-control" name="sltGender" value = {this.state.sltGender} 
                    onChange = {this.onHandleChange}
                    >
                    <option value={0} >Nữ</option>
                     <option value={1} >Nam </option>
                    </select>
                    <br/>
                    <label>Ngôn ngữ</label>
                    <div className="radio">
                      <label>
                        <input 
                        type="radio" 
                        name ="rdLang" 
                        value = "en"
                        onChange = {this.onHandleChange}
                        checked = {this.state.rdLang === "en"}/>
                        Tiếng Anh
                      </label>
                    </div>

                    <div className="radio">
                      <label>
                        <input 
                        type="radio" 
                        name ="rdLang" 
                        value = "vi"
                        onChange = {this.onHandleChange}
                        checked = {this.state.rdLang === "vi"}/>
                        Tiếng Việt
                      </label>
                    </div>
                    
                    <div className="checkbox">
                      <label>
                        <input 
                        type="checkbox" 
                        value={true}
                        name = "chkbStatus"
                        onChange = {this.onHandleChange}
                        checked = {this.state.chkbStatus === true}/>
                        Trạng thái
                      </label>
                    </div>
                    

                    
                    </div>
                  
                
                  <button type="submit" class="btn btn-primary">Lưu Lại</button>&nbsp;
                  <button type="reset" class="btn btn-default">Xóa Trắng</button>
                </form>
                

              </div>
          </div>
          
        </div>
      </div>
      
    </div>   
    );
  }
}
export default App;
