import {Formik, Field, Form} from 'formik';
import emailjs, {send} from 'emailjs-com'


export default function ContactForms() {
    
    function SendEmail(object) {
        emailjs.send("serviceID", "templadeID", object,"userID" )
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }
    
      return (

            <Formik
          initialValues={{ name: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              SendEmail(values)
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {(props) => (
            <Form>
              <Grid templateColumns="repeat(2, 1fr)" gap="4">
                <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                        <Box>
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor="name">First name</FormLabel>
                                <Input {...field} id="name" placeholder="name" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        </Box>
                    )}
                </Field>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      )
  }