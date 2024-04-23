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
    <div style={{ backgroundColor: '#990f02', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <div style={{ backgroundColor: '#FF7F7F', borderRadius: '24px', margin: '24px', padding: '24px', maxWidth: '600px', width: '100%' }}>
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
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="surname">Surname</label>
                <Field type="text" id="surname" name="surname" />
                <ErrorMessage name="surname" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="email">Email Address</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="number">Phone number</label>
                <Field type="text" id="number" name="number" />
                <ErrorMessage name="number" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="password">Password</label>
                <Field type="text" id="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
                <label htmlFor="confirm">Confirm Password</label>
                <Field type="text" id="confirm" name="confirm" />
                <ErrorMessage name="confirm" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
