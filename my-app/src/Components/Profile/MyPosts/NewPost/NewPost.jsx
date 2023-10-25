import {Form, Formik, Field, ErrorMessage} from "formik";
import {Textarea} from "../../../common/FormsControl/FormsContol";

export const NewPost = (props) => {
    return (
        <Formik initialValues={{newPost: ""}}
                onSubmit={values => {
                    props.addPost(values.newPost);
                }}
        >
            <Form>
                <Field type="newPost" name="newPost" className="form-control" component={Textarea}/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
