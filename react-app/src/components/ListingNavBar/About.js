import './style/about.css';

const About = ({ aboutFuncs, aboutErrors, hasSubmitted }) => {

    const {
        title, setTitle,
        beds, setBeds,
        baths, setBaths,
        bedrooms, setBedrooms,
        guests, setGuests,
        price, setPrice,
        description, setDescription,
        checkIn, setCheckIn,
        checkOut, setCheckOut,
        type, setType
    } = aboutFuncs;

    return (
        <div className="about-form-container">
            <div>
                {hasSubmitted && aboutErrors?.map((error, i) => (
                    <p key={i} style={{fontFamily: 'CerealLight', color: "red"}}>{error}</p>
                ))}
            </div>
            <div>
                <div className='checkin-container'>
                    <div>
                        <p style={{fontFamily: 'CerealLight', margin: "0px 0px 5px 0px"}}>Check-in</p>
                        <input
                            type="time"
                            value={checkIn}
                            className='checkin-field'
                            onChange={(e) => setCheckIn(e.target.value)} />
                    </div>
                    <div>
                        <p style={{fontFamily: 'CerealLight', margin: "0px 0px 5px 0px"}}>Check-out</p>
                        <input
                            type="time"
                            value={checkOut}
                            className='checkin-field'
                            onChange={(e) => setCheckOut(e.target.value)} />
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        value={title}
                        className="input-field"
                        placeholder='Listing Title'
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <input
                        type="number"
                        value={beds}
                        className="input-field"
                        placeholder='Number of beds'
                        onChange={(e) => setBeds(e.target.value)} />
                </div>
                <div>
                    <input
                        type="number"
                        value={baths}
                        className="input-field"
                        placeholder='Number of baths'
                        onChange={(e) => setBaths(e.target.value)} />
                </div>
                <div>
                    <input
                        type="number"
                        value={bedrooms}
                        className="input-field"
                        placeholder='Number of bedrooms'
                        onChange={(e) => setBedrooms(e.target.value)} />
                </div>
                <div>
                    <input
                        type="number"
                        value={guests}
                        className="input-field"
                        placeholder='Maximum number of guests'
                        onChange={(e) => setGuests(e.target.value)} />
                </div>
                <div>
                    <input
                        type="number"
                        value={price}
                        className="input-field"
                        placeholder='Cost per night'
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <textarea
                        value={description}
                        className="description-field"
                        placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <select
                        className="input-field"
                        value={type}
                        placeholder="what"
                        onChange={(e) => setType(e.target.value)}>
                        <option value="">- Select accomodation type -</option>
                        <option value="1">Entire condo</option>
                        <option value="2">Entire vacation home</option>
                        <option value="3">Entire home</option>
                        <option value="4">Entire apartment</option>
                        <option value="5">Entire rental unit</option>
                        <option value="6">Private room</option>
                    </select>
                </div>
            </div>
        </div>
    )
};

export default About;
