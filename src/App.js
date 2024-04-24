import Button from '@mui/material/Button';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';

function App() {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    surname: Yup.string()
      .required('Surname is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
    confirm: Yup.string()
      .required('Password is required'),

  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Error submitting form');
      }

      resetForm();
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#B01116', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#FF7F7F', borderRadius: '24px', margin: '24px', padding: '24px', maxWidth: '600px', width: '100%', }}>
        <div>
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'white', paddingRight: '2px' }}>Already have an account?</p>
            <p style={{ color: 'red' }}> Log in</p>
          </span>
        </div>
        <Formik
          initialValues={{ name: '', surname: '', email: '', number: '', password: '', confirm: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="name">Name</label>
                <Field className="Field" type="text" id="name" name="name" placeholder="Your name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="surname">Surname</label>
                <Field type="text" id="surname" name="surname" placeholder="Your surname" className="Field" />
                <ErrorMessage name="surname" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="email">Email Address</label>
                <Field type="email" id="email" name="email" placeholder="Your email address" className="Field" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="number">Phone number</label>
                <Field type="text" id="number" name="number" placeholder="000-000-0000" className="Field" />
                <ErrorMessage name="number" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="password">Password</label>
                <Field type="text" id="password" name="password" placeholder="Password" className="Field" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="confirm">Confirm Password</label>
                <Field type="text" id="confirm" name="confirm" placeholder="Retype Password" className="Field" />
                <ErrorMessage name="confirm" component="div" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Button style={{ backgroundColor: "#B01116", color: 'white', width: '178px', height: '48px' }} type="submit" disabled={isSubmitting}>
                  Register
                </Button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
