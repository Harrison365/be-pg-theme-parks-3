function prepareRides (rides, parks){
    const parksLookup = createParksReference(parks)
    return rides.map((ride)=>{
        const {ride_name, year_opened, votes, park_name}= ride
        return [ride_name, year_opened, votes, parksLookup[park_name]    ]
    })
}

function createParksReference(parks){
    const lookup = {}
    parks.forEach((park)=>{
        lookup[park.park_name] = park.park_id
    })

    return lookup
}

module.exports = {prepareRides, createParksReference}