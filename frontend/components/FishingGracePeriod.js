import {useState, useEffect} from 'react';
import fishingGracePeriodsDb from '@/db/fishingGracePeriodsDb';
import styled from 'styled-components';

const FishingGracePeriod = ({state, selectedFish, onFishChange}) => {
    const [gracePeriod, setGracePeriod] = useState('');

    useEffect(() => {
        const stateData = fishingGracePeriodsDb.find(entry => entry.state === state);

        if (stateData) {
            const speciesData = stateData.species.find(species => species.name === selectedFish);

            if (speciesData) {
                setGracePeriod(speciesData.gracePeriod);
            } else {
                setGracePeriod('N/A');
            }
        } else {
            setGracePeriod('N/A');
        }
    }, [selectedFish, state]);

    const handleChange = (event) => {
        onFishChange(event.target.value);
    };

    return (
        <BoxInput>
            <label htmlFor="species">Fischart*</label>
            <select id="species" required name="species" value={selectedFish} onChange={handleChange}>
                <option value="Hecht">Hecht</option>
                <option value="Zander">Zander</option>
                <option value="Regenbogenforelle">Regenbogenforelle</option>
                <option value="Bachforelle">Bachforelle</option>
                <option value="Karpfen">Karpfen</option>
                <option value="Barsch">Barsch</option>
                <option value="Döbel">Döbel</option>
                <option value="Aal">Aal</option>
            </select>
            <GracePeriod>Schonzeit: <span>{gracePeriod}</span></GracePeriod>
        </BoxInput>
    );
};

const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
`

const GracePeriod = styled.p`
    color: darkred;
`;

export default FishingGracePeriod;