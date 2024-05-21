import { useEffect, useState } from "react";
import { getNowPlayingItem } from "./Spotify";
import offline from '../static/assets/offline.avif';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function truncate(s) {
    return s.length > 20 ? s.substring(0, 20) + "..." : s;
}

function Listening(props) {
    const [result, setResult] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getNowPlayingItem(
                    props.client_id,
                    props.client_secret,
                    props.refresh_token
                );
                setResult(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, [props.client_id, props.client_secret, props.refresh_token]);


    return (
        <Box
            sx={{
                display: 'flex',
                margin: "20px 0px",
                width: { xs: '100%', md: '320px' },
                flexDirection: 'column',
                p: 1,
                border: '2px solid black',
                backgroundColor: '#e4f8ba'
            }}>
            <Box sx={{ mb: 1 }}>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Inconsolata, monospace' }}>
                    Currently Listening To...
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                    component="img"
                    src={(result && result.is_playing) ? result.item.album.images[2].url : offline}
                    alt={(result && result.is_playing) ? `${result.item.album.name} album art` : "Nothing"}
                    sx={{ width: 64, height: 64, border: '2px solid black', mr: 1 }}
                />
                <Box>
                    <Typography variant="body1" sx={{ fontFamily: 'Inconsolata, monospace', fontWeight: 'bold', mb: 0.5 }}>
                        {(result && result.is_playing) ?
                            <a href={result.item.external_urls.spotify} target="_blank" rel="noreferrer">{truncate(result.item.name)}</a> : "Nothing"
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inconsolata, monospace' }}>
                        {(result && result.is_playing) ? truncate(result.item.artists[0].name) : "Check Later"}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
};

export default Listening;