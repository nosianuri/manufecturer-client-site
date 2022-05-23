import React from 'react';
import InfoCard from './InfoCard';
import focus from '../../assets/icon/focus.png';
import bullseye from '../../assets/icon/bullseye.png';
import chervon from '../../assets/icon/chervon.png';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Photographic Parts" cardDetail="Our diagrams and parts lists make finding the right part easy." img={focus}></InfoCard>
            <InfoCard cardTitle="Elite Clientele" cardDetail="We upgrade everyone, even if you haven't bought from us before." img={bullseye}></InfoCard>
            <InfoCard cardTitle="Quality Beseler" cardDetail="Beseler offers genuine parts for all of its photographic equipment." img={chervon}></InfoCard>
        </div>
    );
};

export default Info;