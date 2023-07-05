import React, { useState } from 'react'

const User = () => {
    const [countries, setCountries] = useState(null);
    return (
        <>
            <div>
                <h1>Country/State/City Dropdown</h1>
                <form>
                    <label for="Country">Select a country:</label>
                    <select name="countryId" id="Country">
                        ${countries.map(Country => `<option value="${Country.id}">${Country.name}</option>`).join('')}
                    </select>
                </form>
            </div>
        </>
    )
}

export default User
