import {Form, Formik, Field} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

let Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm login={props.login}/>
    </div>
}

let LoginForm = (props) => {
    return <Formik
        initialValues={{email: "", password: ""}}
        onSubmit={values => {
            props.login(values.email, values.password, true);
        }}>
        <Form>
            <Field type="email" name="email" className="form-control" />
            <Field type="password" name="password" className="form-control" />
            <button type="submit">Submit</button>
        </Form>
    </Formik>
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {login})(Login);