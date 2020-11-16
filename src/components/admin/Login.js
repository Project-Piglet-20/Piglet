// import { firestore, auth } from '../../config/fbConfig';
// import { Box, Button, Container } from '@material-ui/core';
// import React, { Component } from 'react';
// import './login.css';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from '@material-ui/core/IconButton';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import Divider from '@material-ui/core/Divider';
// import { withRouter } from 'react-router-dom';

// class AdminLogin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             showPassword: false
//         };

//         this.handleChanges = this.handleChanges.bind();
//         this.login = this.login.bind();
//     }

//     handleChanges = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     };

//     handleClickShowPassword = () => {
//         const showPassword = this.state.showPassword;
//         this.setState({ ...this, showPassword: !showPassword });
//     };

//     handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };

//     login = () => {
//         let validity = true;

//         if (this.state.email === '') {
//             validity = false;
//         }
//         if (this.state.password === '') {
//             validity = false;
//         }

//         if (validity) {
//             firestore
//                 .collection('USERS')
//                 .where('email', '==', this.state.email)
//                 .where('isAdmin', '==', true)
//                 .get()
//                 .then((querySnapshot) => {
//                     if (!querySnapshot.empty) {
//                         auth.signInWithEmailAndPassword(
//                             this.state.email,
//                             this.state.password
//                         )
//                             .then(() => {
//                                 const clientID = this.props.db.lf.clientId;
//                                 this.props.history.push({
//                                     pathname: '/adminhome',
//                                     clientID: clientID
//                                 });
//                             })
//                             .catch((err) => {
//                                 if (err.code === 'auth/wrong-password') {
//                                     alert('Password Incorrect!');
//                                 }
//                             });
//                     } else {
//                         alert('User does not exist!');
//                     }
//                 });
//         }
//         this.setState({
//             update: true
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <div
//                     className="nav-wrapper white-text"
//                     style={{ backgroundColor: '#009688' }}
//                 >
//                     <div
//                         style={{
//                             fontSize: '20px',
//                             height: '55px',
//                             textAlign: 'center',
//                             paddingTop: '15px'
//                         }}
//                     >
//                         PIGLET
//                     </div>
//                 </div>
//                 <Container maxWidth="xs">
//                     <Box textAlign="center" boxShadow="2" className="form amber lighten-3">
//                         <h2 style={{fontStyle: 'futura'}}>Admin Login</h2>
//                         <Divider />
//                         <form autoComplete="no">
//                             <br />
//                             <label
//                                 className="black-text left"
//                                 style={{
//                                     textAlign: 'left',
//                                     paddingBottom: '10px',
//                                     fontSize: '15px'
//                                 }}
//                             >
//                                 Email
//                             </label>
//                             <OutlinedInput
//                                 id="outlined-basic-email"
//                                 variant="outlined"
//                                 fullWidth
//                                 style={{
//                                     paddingLeft: '10px',
//                                     paddingRight: '10px',
//                                     backgroundColor: 'white'
//                                 }}
//                                 type="email"
//                                 name="email"
//                                 onChange={this.handleChanges}
//                             />
//                             <br />
//                             <br />
//                             <label
//                                 className="black-text left"
//                                 style={{
//                                     textAlign: 'left',
//                                     paddingBottom: '10px',
//                                     fontSize: '15px'
//                                 }}
//                             >
//                                 Password
//                             </label>
//                             <OutlinedInput
//                                 id="outlined-basic-password"
//                                 variant="outlined"
//                                 fullWidth
//                                 style={{ paddingLeft: '10px', backgroundColor: 'white' }}
//                                 type={
//                                     this.state.showPassword
//                                         ? 'text'
//                                         : 'password'
//                                 }
//                                 value={this.state.password}
//                                 name="password"
//                                 onChange={this.handleChanges}
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             onClick={
//                                                 this.handleClickShowPassword
//                                             }
//                                             onMouseDown={
//                                                 this.handleMouseDownPassword
//                                             }
//                                             edge="end"
//                                         >
//                                             {this.state.showPassword ? (
//                                                 <Visibility />
//                                             ) : (
//                                                 <VisibilityOff />
//                                             )}
//                                         </IconButton>
//                                     </InputAdornment>
//                                 }
//                                 labelWidth={70}
//                             />
//                             <br />
//                             <br />
//                             <Button
//                                 variant="contained"
//                                 fullWidth
//                                 onClick={this.login}
//                                 className="butmt"
//                                 style={{ backgroundColor: '#ff1744' }}
//                             >
//                                 Login
//                             </Button>
//                         </form>
//                     </Box>
//                 </Container>
//             </div>
//         );
//     }
// }

// export default withRouter(AdminLogin);

