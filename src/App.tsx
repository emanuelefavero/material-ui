import './App.css'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function App() {
  return (
    <main className='max-w-screen-sm'>
      <h1 className='text-3xl font-bold mb-8'>Material UI</h1>

      <ul>
        <li>
          {/* BUTTON */}
          <Button variant='contained'>Button</Button>
        </li>

        <li>
          {/* AUTOCOMPLETE */}
          <Autocomplete
            options={autocompleteOptions}
            renderInput={(params) => <TextField {...params} label='Movie' />}
          />
        </li>
      </ul>
    </main>
  )
}

// Utils and Data
const autocompleteOptions = [
  { label: 'Titanic', year: 1997 },
  { label: 'Jurassic Park', year: 1993 },
  { label: 'The Lion King', year: 1994 },
  { label: 'The Matrix', year: 1999 },
  { label: 'The Lord of the Rings', year: 2001 },
]
