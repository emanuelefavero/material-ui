import './App.css'
import { useState } from 'react'

// Import Material UI styles
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography' // Custom color
import { pink } from '@mui/material/colors'

// Import Material UI components
import {
  CssBaseline,
  Button,
  Autocomplete,
  TextField,
  ButtonGroup,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Fab,
  Rating,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Slider,
} from '@mui/material'

// Import Material UI Icons
import {
  FavoriteBorder,
  Favorite,
  Add as AddIcon,
  VolumeDown,
  VolumeUp,
} from '@mui/icons-material'

// DARK MODE
const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    // Custom primary color
    primary: {
      main: '#a855f7',
    },

    // Custom secondary color
    secondary: {
      main: '#84cc16',
    },
  },
})

// -< App >--------------------------------------------------------------------
export default function App() {
  // Rating state
  const [ratingValue, setRatingValue] = useState<number | null>(4)
  interface RatingLabelsType {
    [key: number]: string
  }
  const ratingLabels: RatingLabelsType = {
    1: 'Poor',
    2: 'Ok',
    3: 'Good',
    4: 'Very Good',
    5: 'Excellent',
  }

  // Select state
  const [selectValue, setSelectValue] = useState<string>('')

  // Slider state
  const [sliderValue, setSliderValue] = useState<number>(30)

  return (
    // DARK MODE
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* MAIN */}
      <main className='max-w-screen-sm'>
        <h1 className='text-3xl font-bold mb-8'>Material UI</h1>

        <ul>
          {/* CUSTOM STYLES */}
          <li>
            <Button
              variant='contained'
              sx={{
                color: pink[50],
                backgroundColor: pink[600],

                // Hover
                '&:hover': {
                  backgroundColor: pink[400],
                },

                // Active
                '&:active': {
                  backgroundColor: pink[800],
                  transform: 'scale(0.95)', // custom styles
                  transition: 'transform 0.2s',
                },
              }}
            >
              Button
            </Button>
          </li>

          <li>
            {/* BUTTON */}
            <Button variant='outlined'>Button</Button>
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
            <Checkbox color='success' />
            <Checkbox disabled />

            {/* Checkbox with custom color */}
            <Checkbox
              sx={{
                color: pink[600],
                '&.Mui-checked': {
                  color: pink[400],
                },
              }}
            />
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

          {/* STATIC ICONS */}
          <li>
            <FavoriteBorder />
            <Favorite color='secondary' />
          </li>

          {/* CHECKBOX (with Icons) */}
          <li>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </li>

          {/* FAB (Floating Action Button) */}
          <li>
            <Fab color='primary' aria-label='add'>
              <AddIcon />
            </Fab>
          </li>

          {/* RADIO GROUP */}
          <li>
            <FormControl>
              <FormLabel id='radio-group-label'>Fruit</FormLabel>
              <RadioGroup
                aria-labelledby='radio-group-label'
                defaultValue='mango'
                name='fruit'
              >
                <FormControlLabel
                  value='mango'
                  control={<Radio />}
                  // TIP: The Typography component can be used to change the size of the icon
                  label={<Typography sx={{ fontSize: '1rem' }}>🥭</Typography>}
                />
                <FormControlLabel
                  value='banana'
                  control={<Radio />}
                  label='🍌'
                />
              </RadioGroup>
            </FormControl>
          </li>

          {/* RATING */}
          <li>
            <Typography component='legend'>Rating</Typography>
            <Rating
              name='rating'
              value={ratingValue}
              onChange={(_, newValue) => setRatingValue(newValue)}
            />
            <div>{ratingValue && ratingLabels[ratingValue]}</div>
          </li>

          {/* SELECT */}
          <li>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='select-label'>Age</InputLabel>
                <Select
                  labelId='select-label'
                  id='select'
                  label='Age'
                  value={selectValue}
                  onChange={(event) => setSelectValue(event.target.value)}
                >
                  <MenuItem value='Ten'>Ten</MenuItem>
                  <MenuItem value='Twenty'>Twenty</MenuItem>
                  <MenuItem value='Thirty'>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </li>

          {/* SLIDER */}
          <li>
            <Box sx={{ width: 200 }}>
              <Stack spacing={2} direction='row' alignItems='center'>
                <VolumeDown />
                <Slider
                  aria-label='Volume'
                  value={sliderValue}
                  onChange={(_, newValue) => setSliderValue(newValue as number)}
                />
                <VolumeUp />
              </Stack>
            </Box>
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
