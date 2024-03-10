import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import ButtonGroup from '@mui/material/ButtonGroup'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

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

          {/* BUTTON GROUP */}
          <li>
            <ButtonGroup color='secondary' aria-label='button group'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </li>

          {/* CHECKBOX (without label) */}
          <li>
            <Checkbox defaultChecked />
            <Checkbox color='secondary' />
            <Checkbox disabled />
          </li>

          {/* CHECKBOX (with label) */}
          <li>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label='Option 1'
                required
              />
              <FormControlLabel control={<Checkbox />} label='Option 2' />
              <FormControlLabel control={<Checkbox />} label='Option 3' />
            </FormGroup>
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
