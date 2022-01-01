import { FormControl, FormControlLabel, FormLabel, Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import Services from "../Services/Services";
import LocationsDetails from "../Services/LocationsDetails";
import CategoryDetails from "../Services/CategoryDetails";

export default function Content() {

    return (
        <>
            <Grid container spacing={0} style={{ marginTop: '1.5rem' }}>
                <Grid item xs={2.4} style={{ height: '100vh', margin: '0.9rem' }}>
                    <Paper sx={{ mb: 2 }}>
                        <TextField
                            label="Search Service"
                            variant="outlined"
                            fullWidth />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Nested List Items
                            </ListSubheader>
                        }
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <StarRateIcon />
                            </ListItemIcon>
                            <ListItemText primary="Top Rating" />
                        </ListItemButton>

                        <LocationsDetails />
                        <CategoryDetails />
                    </List>
                </Grid>
                <Grid item xs >
                    <Services />
                </Grid>
            </Grid>
        </>
    )
}