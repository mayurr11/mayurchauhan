// src/services/formService.js

const submitForm = async (formData) => {
    const accessKey = import.meta.env.VITE_ACCESS_KEY; // Correctly access the environment variable

    console.log("Access Key:", accessKey); // Log to check its value
    console.log(import.meta.env); // Check what variables are available


    if (!accessKey) {
        console.error("Access key is not defined");
        return;
    }

    formData.append("access_key", accessKey); // Add access key to form data

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    });

    return res.json();
};

export default submitForm;
