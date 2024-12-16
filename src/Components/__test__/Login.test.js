import renderer from 'react-test-renderer';
import Login from '../Login';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../store';
import UserSlice from '../../Features/UserSlice';
import configureStore from 'redux-mock-store';
import { Profiler } from 'react';

// Test case for Login 
test('Matching the UI', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
  screen.debug(container); // Optional: To see the rendered component in the console
  expect(container).toMatchSnapshot(); // This creates a snapshot to match the UI
});

// test case for Email
// test('Validate the email using regex', ()=>{
//      render(
//         <Provider store={store}>
//             <Router>
//                 <Login/>
//             </Router>
//         </Provider>
//     );
    // i for Id
    // const emailInput = screen.getByLabelText(/email/i);
    // const testmail="sumai@gmail.com";
    // expect((emailInput.value)).toEqual(testmail);
   // fireEvent.change(emailInput, {target:{value: 'saud@gmail.com'}});
   // expect(testmail).test(emailInput).toBe(true);

     // Regular expression:
   //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   // pass case :
  //fireEvent.change(emailInput, {target:{value: 'saud@gmail.com'}});

   // fail case:
   // reomve @ from email to check if it fail:
  // fireEvent.change(emailInput, {target:{value: 'saud@gmail.com'}});
  
  //expect(emailRegex.test(emailInput.value)).toBe(true);
//});

// // // test case for Password
// // test('Validate the password using regex', ()=>{
// //     render(
// //        <Provider store={store}>
// //            <Router>
// //                <Login/>
// //            </Router>
// //        </Provider>
// //    );
// //    // i for Id
// //   // const passwordInput = screen.getByLabelText(/password/i);
// //    // const testpass = "sumaigmail.com";
// //    // Regular expression:
// //    //const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
// //    //pass case 
// //    //fireEvent.change(passwordInput, {target:{value: '123456'}});

// //     //fail case 
// //    //fireEvent.change(passwordInput, {target:{value: 'abc456'}});
// //    //expect(passwordRegex.test(passwordInput.value)).toBe(true);
// // });

// // // Test Feature Folder
// //   // userslice:
// //     const testInitValue = {
// //         user:{},
// //         message:"",
// //         // change to check if it fail 
// //         //if it fail so the test it worked
// //         // check test: change isSuccess to true
// //         isLoading:false,
// //         isSuccess:false,
// //         isError:false,
// //         // add profile if developer missed adding this variable
// //         //profile:{}
// //     }
// //   test("Initial State in Slice", ()=>{
// //     expect(reducer(undefined,{type:undefined})).toEqual(testInitValue)
// //   })