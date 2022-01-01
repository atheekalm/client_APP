import { Avatar, Badge, Container, Divider, Grid, IconButton, List, ListItem, ListItemText, Paper, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export default function Messages() {
    return (
        <>
            <Container component="main" maxWidth='md' sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 4, md: 3 } }}>
                    <Typography variant="h6" gutterBottom>
                        Messages
                    </Typography>
                    <Divider />
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <List aria-label="mailbox folders">
                                <ListItem button>
                                    <Avatar sx={{ mr: 2 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    <Badge color="secondary" badgeContent={4}>
                                        <ListItemText primary="Inbox " />
                                    </Badge>
                                </ListItem>
                                <Divider />
                                <ListItem button divider>
                                    <Avatar sx={{ mr: 2 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    <ListItemText primary="Drafts" />
                                </ListItem>
                                <ListItem button>
                                    <Avatar sx={{ mr: 2 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    <ListItemText primary="Trash" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5}>
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                            <IconButton sx={{ m: 2 }}>
                                <SendIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}