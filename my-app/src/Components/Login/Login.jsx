import {Form, Formik, Field} from "formik";

let Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

let LoginForm = (props) => {
    return <Formik
        initialValues={{login: "", password: ""}}
        onSubmit={values => {
            alert(values)
        }}>
        <Form>
            <Field type="login" name="login" className="form-control" />
            <Field type="password" name="password" className="form-control" />
            <button type="submit">Submit</button>
        </Form>
    </Formik>
}

export default Login;