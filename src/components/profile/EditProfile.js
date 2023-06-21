import { useState } from "react";

export const EditProfile = ({ data, onSubmit }) => {
    const [formData, setFormData] = useState(data);

    return (
        <div>
            <input
                type="text"
                onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                }
                value={formData.firstName}
            />
            <input
                type="text"
                onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                }
                value={formData.lastName}
            />
            <button onClick={() => onSubmit(formData)}>Save changes</button>
        </div>
    );
};