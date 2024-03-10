import './App.css'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function App() {
  return (
    <>
      <h1>Material UI</h1>

      {/* BUTTON */}
      <Button variant='contained'>Button</Button>

      {/* AUTOCOMPLETE */}
      <Autocomplete
        options={['Titanic', 'Option Jurassic Park']}
        renderInput={(params) => <TextField {...params} label='Movie' />}
      />
    </>
  )
}
