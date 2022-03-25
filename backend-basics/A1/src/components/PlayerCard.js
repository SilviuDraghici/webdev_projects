import { DropdownButton } from 'react-bootstrap';

import { useContext, useState, useEffect } from 'react';

import Skeleton from '@mui/material/Skeleton';
import { CardMedia } from '@mui/material';

import AvailableColors from './AvailableColors';

import ColorsContext from "./ColorsContext";
import PlayersContext from './PlayersContext';
import UserContext from './UserContext';

import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from "../firebase";

const PlayerCard = ({ name, playerNum }) => {
    const { players, assignColor } = useContext(PlayersContext);
    const { user, isAdmin } = useContext(UserContext);


    const [imageUrl, setImageUrl] = useState(null);
    const imgRef = ref(storage, `images/${playerNum}`);

    useEffect(() => {
        getDownloadURL(imgRef).then((url) => {
            setImageUrl(url);
            console.log(`image found! url: ${imageUrl}`);
        }).catch((error) => {
            console.log(`Error getting image url: ${error.message}`);
        });
    }, [playerNum]);
    const imgWidth = 145;

    const colors = useContext(ColorsContext);
    const color = colors.find(color => color.name === players[playerNum].color);

    //console.log(`playerNum: ${playerNum}, user.uid: ${user.uid}`);
    return (
        <div className="d-flex col-12 col-md-5 mb-4 "
            style={{ ...PlayerCardStyle, ...color }}>
            {imageUrl ?
                <CardMedia
                    component="img"
                    sx={{ width: imgWidth, p: 0.5 }}
                    image={imageUrl}
                />
                :
                <div style={{ width: { imgWidth } }}>
                    <Skeleton variant="rectangular" width={imgWidth} height={imgWidth} />
                </div>
            }

            <div style={{ width: "100%" }} className="d-flex flex-column align-items-center">
                <div className="card-header text-center"
                    style={headerStyle}>
                    <header>
                        <h1>{name}</h1>
                    </header>
                </div>
                <div className="card-body" style={{ minHeight: 70 }}>
                    {user && (user.uid === playerNum || isAdmin) ?
                        <DropdownButton id="dropdown-basic-button" title="Select Color"
                            variant="dark"
                            onSelect={(color) => {
                                assignColor(color, playerNum)
                            }}>
                            <AvailableColors />
                        </DropdownButton>
                        : null}
                </div>
            </div>
        </div >
    )
}

const PlayerCardStyle = {
    //width: '200px'
    alignItems: 'center',
    paddingLeft: '1px',
}

const headerStyle = {
    width: '100%',
    alignItems: 'center'
}

export default PlayerCard