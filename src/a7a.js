import React, { Component } from 'react';
import { Input, Button, Card } from 'antd';


import Icon from "@ant-design/icons";



class LOGIN extends Component{
  
 
  render(){
    return(
      <div >
        <div style={{float:'left'}}>
          <h1 style={{fontFamily:"Satisfy" ,fontSize:50,marginTop:40,marginLeft:230,color:'#002266'}}>Dent Guide</h1>

        <Card className="card"   title={<h2 style={{color:'#002266',marginTop:20,fontWeight:'bold'}}>log in</h2> }  style={{ width: 450,height:450 ,marginTop:40,marginLeft:100}}>
     

            <Input
            style={{marginTop:20,height:35}}
            
              prefix={<Icon type="user" style={{ color: '#4d4dff' }} />}
              placeholder="Username"
              onChange={this.addEmail}
            />
 
       
 
            <Input style={{height:35,marginTop:30,marginBottom:20}}
            
            onChange={this.addPassword}
              prefix={<Icon type="lock" style={{ color: '#4d4dff' }} />}
              type="password"
              placeholder="Password"
            />
          
    
          <a href='./sign'>forgot password </a>
   
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login} style={{width:400,marginTop:30,marginBottom:25}}>
            Log in
          </Button>
          Or <a href='./sign'>create acount </a>
          </Card>
          </div>
          <div  style={{float: 'right' ,width:700,height:670,marginTop:0}} >
                     

            
           </div>
             
      </div>
     
    )
  }
  
}

export default LOGIN;
