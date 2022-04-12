const About = ({aboutFuncs}) => {
    const {
        title,
        setTitle,
        beds,
        setBeds,
        baths,
        setBaths,
        bedrooms,
        setBedrooms,
        guests,
        setGuests,
        price,
        setPrice,
        description,
        setDescription,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        type,
        setType
    } = aboutFuncs;

    return (
        <div className="about-form-container">
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <input
                    type="number"
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}/>
            </div>
            <div>
                <input
                    type="number"
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}/>
            </div>
            <div>
                <input
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}/>
            </div>
            <div>
                <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}/>
            </div>
            <div>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <input
                    type="time"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}/>
            </div>
            <div>
                <input
                    type="time"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}/>
            </div>
            <div>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value="1">Entire condo</option>
                    <option value="2">Entire vacation home</option>
                    <option value="3">Entire home</option>
                    <option value="4">Entire apartment</option>
                    <option value="5">Entire rental unit</option>
                    <option value="6">Private room</option>
                </select>

            </div>
        </div>
    )
};

export default About;
