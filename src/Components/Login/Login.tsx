import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react'
import * as Yup from "yup";

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({}) => {
        return (
            <div className='h-96 w-80 rounded-md p-4 bg-white shadow'>
                <Formik 
                     initialValues = {{
                        username: "",
                        password: "",
                    }}
                    validationSchema = {Yup.object({
                        username: Yup.string()
                            .min(2, 'tooshort')
                            .required('Required'),
                        password: Yup.string()
                            .required("Required!"),
                    })}
                    onSubmit ={values => {
                        console.log('submit')
                        setTimeout(() => {
                            console.log('submit')
                            alert(JSON.stringify(values, null, 2));
                        }, 1000);
                        }}
                    render={({ errors, touched }) => (
                        <Form>
                            <div>
                                <ErrorMessage name="username" component="p"/>
                                <Field
                                    type='text'
                                    name='username'
                                    placeholder='Username *'
                                    style={{
                                        border: '1px solid' + (errors.username && touched.username ? 'tomato' : ' #999999')
                                    }}
                                />
                            </div>
                            <div className="">
                                <ErrorMessage name="password" component="p"/>
                                <Field
                                    type='password'
                                    name='password'
                                    placeholder='Password *'
                                    style={{
                                        border: '1px solid' + (errors.password && touched.password ? 'tomato' : ' #999999')
                                    }}
                                />
                            </div>
                            <button type="submit" >Login</button>
                        </Form>
                    )}
                    >

                </Formik>
            </div>
        );
}


export default Login