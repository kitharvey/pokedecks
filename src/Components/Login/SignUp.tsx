import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react'
import * as Yup from "yup";
import { useAppDispatch } from '../../redux/hooks';
import { signup } from '../../redux/userSlice';

interface SignUpProps {

}

const SignUp: React.FC<SignUpProps> = ({}) => {
        const dispatch = useAppDispatch()

        return (
            <div className='h-96 w-80 rounded-md p-4 bg-white shadow'>
                <Formik 
                     initialValues = {{
                        username: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema = {Yup.object({
                        username: Yup.string()
                            .min(3, 'Too short')
                            .max(32, 'Max of 32 characters')
                            .required('Required'),
                        password: Yup.string()
                            .required("Required!")
                            .min(5, 'Too short'),
                        confirmPassword: Yup.string()
                            .when("password", {
                                is: (val: string) => (val && val.length > 0 ? true : false),
                                then: Yup.string().oneOf(
                                  [Yup.ref("password")],
                                  "Must match previous entry"
                                )
                              }),
                    })}
                    onSubmit ={values => {

                            alert(JSON.stringify(values));
                            dispatch(signup({
                                username: values.username,
                                password: values.password,
                            }))
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
                            <div className="">
                                <ErrorMessage name="confirmPassword" component="p"/>
                                <Field
                                    type='password'
                                    name='confirmPassword'
                                    placeholder='Confirm Password *'
                                    style={{
                                        border: '1px solid' + (errors.confirmPassword && touched.confirmPassword ? 'tomato' : ' #999999')
                                    }}
                                />
                            </div>
                            <button type="submit" >SignUp</button>
                        </Form>
                    )}
                    >

                </Formik>
            </div>
        );
}


export default SignUp