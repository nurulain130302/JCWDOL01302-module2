import { Container, Input, Button } from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik} from "formik"
import * as Yup from "yup";

import axios from "axios";

interface ISuperheroForm{
    handleGetSuperheroes: () => void;
}

const superheroSchema = Yup.object().shape({
    name: Yup.string().required("name must be filled"),
    color: Yup.string().required("color must be filled"),
    superpower: Yup.string().required("superpower must be filled"),
    email: Yup.string()
      .email("invalid email address format")
      .required("email must be filled"),
  });

export default function SuperheroForm(props: ISuperheroForm){
    const { handleGetSuperheroes } = props;

    // const [name, setname] = useState<string>(" ");
    // const [color, setColor] = useState<string>(" ");
    // const [superpower, setSuperpower] = useState<string>(" ");

    const handleSubmit = async (values: any) => {
        try {
            await axios.post("http://localhost:4500/superheroes", {
                name: values.name,
                color: values.color,
                superpower: values.superpower,
                email: values.email,
            })
            handleGetSuperheroes();
            handleResetForm();
        } catch (err){
            console.log(err);
        }
    }

    const handleResetForm = () => {
        // setName(" ");
        // setColor(" ");
        // setSuperpower(" ");
    };
    return(
        <Container>
            <h1>Add Superhero</h1>
            <Formik 
            initialValues={{
                name: "",
                color: "",
                superpower: "",
                email: "",
            }}
            validationSchema={superheroSchema}
            onSubmit={(values: any) => {
                alert(JSON.stringify(values));
                handleSubmit(values);
            }}>
                {(props) =>(
                    <Form>
                        <div>
                            <label> Name </label>
                            <Input type="text" name="name" />
                            <ErrorMessage 
                            component={"div"}
                            name="name"
                            style={{ color: "red" }} 
                            />
                        </div>
                        <div>
                            <label> Color </label>
                            <Input type="text" name="color" />
                            <ErrorMessage 
                            component={"div"}
                            name="color"
                            style={{ color: "red" }} 
                            />
                        </div>
                        <div>
                        <label> Super Power </label>
                            <Field type="text" name="superpower" />
                            <ErrorMessage 
                            component={"div"}
                            name="superpower"
                            style={{ color: "red" }} />
                        </div>
                        <div>
                            <label> Email </label>
                            <Input type="email" name="email" />
                            <ErrorMessage 
                            component={"div"}
                            name="email"
                            style={{color: "red"}}
                            />
                        </div>
                        <div>
                            <Button type="submit"> Submit new Superhero </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}