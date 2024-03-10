import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

// DARK MODE
const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    // Custom primary color
    primary: {
      main: '#9333ea',
    },

    // Custom secondary color
    secondary: {
      main: '#84cc16',
    },
  },
})

export default function App() {
  return (
    // DARK MODE
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* MAIN */}
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
    </ThemeProvider>
  )
}

// ----------------------------------------------------------------------------
// UTILS AND DATA

// Autocomplete options
const autocompleteOptions = [
  { label: 'Titanic', year: 1997 },
  { label: 'Jurassic Park', year: 1993 },
  { label: 'The Lion King', year: 1994 },
  { label: 'The Matrix', year: 1999 },
  { label: 'The Lord of the Rings', year: 2001 },
]
