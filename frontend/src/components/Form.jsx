import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        numberOfGuests: 1,
        guestNames: [""],
        numberOfChildren: 0,
        foodPreference: "standard",
        otherPreferences: "",
        accommodation: false,
        comments: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleGuestNamesChange = (index, value) => {
        const updatedGuestNames = [...formData.guestNames];
        updatedGuestNames[index] = value;
        setFormData((prevData) => ({ ...prevData, guestNames: updatedGuestNames }));
    };

    const handleNumberOfGuestsChange = (e) => {
        const numberOfGuests = parseInt(e.target.value, 10);
        setFormData((prevData) => ({
            ...prevData,
            numberOfGuests,
            guestNames: Array(numberOfGuests).fill(""),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://nunta-backend.onrender.com/api/confirmare", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Confirmați Prezența</h2>
            <label>
                Nume complet:
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Număr de telefon:
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Număr persoane:
                <input
                    type="number"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleNumberOfGuestsChange}
                    min="1"
                    required
                />
            </label>
            {formData.guestNames.map((_, index) => (
                <label key={index}>
                    Nume Invitat {index + 1}:
                    <input
                        type="text"
                        value={formData.guestNames[index]}
                        onChange={(e) => handleGuestNamesChange(index, e.target.value)}
                        required
                    />
                </label>
            ))}
            <label>
                Număr copii (cu meniu special):
                <input
                    type="number"
                    name="numberOfChildren"
                    value={formData.numberOfChildren}
                    onChange={handleInputChange}
                    min="0"
                />
            </label>
            <label>
                Preferințe culinare:
                <select
                    name="foodPreference"
                    value={formData.foodPreference}
                    onChange={handleInputChange}
                >
                    <option value="standard">Standard</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="other">Alte preferințe</option>
                </select>
            </label>
            {formData.foodPreference === "other" && (
                <label>
                    Alte preferințe:
                    <input
                        type="text"
                        name="otherPreferences"
                        value={formData.otherPreferences}
                        onChange={handleInputChange}
                    />
                </label>
            )}
            <label>
                Comentarii:
                <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Doriți cazare?
                <input
                    type="checkbox"
                    name="accommodation"
                    checked={formData.accommodation}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Trimite</button>
        </form>
    );
};

export default Form;
