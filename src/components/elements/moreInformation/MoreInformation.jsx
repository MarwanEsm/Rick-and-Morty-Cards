import React from "react";

const MoreInformation = ({ character }) => {
    return <div>
        {character?.name && <><b>Name :</b><span>{character?.name}</span></>}
        {character?.location && <><b>Location :</b><span>{character?.location?.name}</span></>}
        {character?.status && <><b>Status :</b><span>{character?.status}</span></>}
        {character?.species && <><b>Species :</b><span>{character?.species}</span></>}
        {character?.type && <><b>Type :</b><span>{character?.type}</span></>}
    </div>
}

export default MoreInformation