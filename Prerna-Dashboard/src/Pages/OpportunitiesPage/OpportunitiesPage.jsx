import React from 'react';
import OpportunitiesGrid from '../../Components/Opportunities/OpportunitiesGrid';

// Assuming you fetch your actual data here or via a hook later
const OpportunitiesPage = () => {
    // You would eventually pass the fetched data here: <OpportunitiesGrid data={fetchedData} />
    return (
        <div className="pt-20"> 
            <OpportunitiesGrid />
        </div>
    );
};

export default OpportunitiesPage;