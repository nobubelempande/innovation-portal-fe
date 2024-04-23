import { Button, TextField, Typography } from '@mui/material';
import './App.css';

function App() {
  return (

    //TO: Refactor and use correct principles
    <div style={{ backgroundColor: '#990f02', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#FF7F7F', borderRadius: '24px', margin: '24px', padding: '24px', width: '600px' }}>
        <div>
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'white', paddingRight: '2px' }}>Already have an account?</p>
            <p style={{ color: 'red' }}> Log in</p>
          </span>
        </div>
        <Typography sx={{ fontSize: '36px', fontWeight: 'bold' }}>Register your account</Typography>
        <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '16px', }}>Name</Typography>
        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '8px' }} placeholder='Your name ' />
        <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '16px' }}>Surname</Typography>
        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '8px' }} placeholder='Your surname' />
        <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '16px' }}>Email Address</Typography>
        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '8px' }} placeholder='Your email address' />
        <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '16px' }}>Phone number</Typography>
        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '8px' }} placeholder='000-000-0000' />
        <div>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '16px' }}>Password</Typography>
          <TextField sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '8px' }} placeholder='Password' />
        </div>
        <div>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '16px' }}>Confirm Password</Typography>
          <TextField sx={{ backgroundColor: 'white', borderRadius: '5px' }} placeholder='Retype password' />
        </div>
        <div style={{ marginTop: '25px', textAlign: 'center' }}>
          <Button sx={{ backgroundColor: '#B01116', color: 'white', }}>Register account</Button>
        </div>
      </div>
    </div>




  );
}

export default App;
