import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useAuth0 } from '@auth0/auth0-react';



const useStyles = makeStyles({
    root: {
        width: 275,
        margin: 10,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const HomePage = () => {
    const [fetchedData, setData] = useState([]);
    const { logout } = useAuth0();

    useEffect(() => {
        axios
            .get(
                `https://hn.algolia.com/api/v1/search?tags=story`
            )
            .then((response) => {
                setData(response.data.hits);
            })
            .catch((error) => console.log(error));
    }, [])
    const classes = useStyles();
    return (
        <div>
            <div style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <div></div>
                <h3>DashBoard</h3>
                <button onClick={() => {
                    logout()


                }

                }>Logout


                </button>

            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '0 auto' }}>
                {fetchedData.map((data) => {
                    console.log(data);
                    return (
                        <Card className={classes.root} onClick={() => { alert("Hello from here") }}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {data.author}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {data.title}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {data.created_at}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" target={'_blank'}>
                                    <a href={data.url}>Open Link</a>
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </div>

        </div>
    )
}

export default HomePage;
