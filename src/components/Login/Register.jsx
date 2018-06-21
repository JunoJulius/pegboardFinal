import React from 'react';
import {Link} from 'react-router-dom'
import {LoginClass} from '../../classes_constructor/LoginClass'
import {newUser} from '../../actions/users'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { LogUser } from '../../actions/users'
import './LoginStyle.css'
import logo from '../../images/pegboard.png'



class Register extends React.Component {
  state = {
    loginToHome: false
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  onSubmitLogin = () => {
    const user = new LoginClass(this.state.email,this.state.password,this.state.name)
    // console.log(user)
    this.props.LogUser(user.Id)
    this.props.newUser(user)
    this.setState({loginToHome: true})


  }
  render() {

    return (<div className="shape">
      <img src={logo} alt="PegBoardLogo" className="Logo"/><br/><br/>

      <span className="Slogan">Your career switch</span>

      <article className="br3  b--black-10 mv4 w-100 w-25-l mw6 sqrComp center">

      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend style={{backgroundColor:'rgba(255, 255, 255, 0.47)', padding:'20px',borderRadius: '20px'}}
               className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <i class="far fa-user"></i>
              <input
                className="pa2 input-reset bb bg-transparent hover-bg-transparent hover-black w-100 superBox"
                type="text"
                name="name"
                placeholder="Name"

                id="name"
                onChange={this.onNameChange}/>
            </div>
            <div className="mt3">
              <i class="far fa-envelope"></i>
              <input
                className="pa2 input-reset bb bg-transparent hover-bg-transparent hover-black w-100 superBox "
                type="email"
                 name="email-address"
                  id="email-address"
                  placeholder="E-mail"
                  onChange={this.onEmailChange}/>
            </div>
            <div className="mv3">
              <i class="fas fa-lock"></i>
              <input className="b  pa2 input-reset bb bg-transparent hover-bg-transparent hover-black w-100  superBox"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                 onChange={this.onPasswordChange}/>
            </div>
          </fieldset>
          <div className="">
            <input className="b br3 ph3 pv2 input-reset ba white bg-green grow pointer f4 dib"
              type="submit"
              value="Register"
              onClick={this.onSubmitLogin}/>
          </div>

        </div>
        <br/>
        <Link className="link underline green hover-orange" to="/">Already A Member?</Link>

      </main>
      <div>{this.state.loginToHome === true && < Redirect to = '/home' />}</div>

    </article>
</div>
  );
  }

}

const mapStateToProps = (state) => {return {reducers: state.reducers}}


export default connect(mapStateToProps,  {newUser, LogUser})(Register)
