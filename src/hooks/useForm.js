import {useState, useEffect} from 'react';
import axios from 'axios';
import {baseUrl} from "../constants/genericConstants";

const initialFormState = {
    name: '',
    mail: '',
    subject: '',
    message: '',
};

const validate = (values) => {
    let errors = {};
    if (!values.mail) {
        errors.mail = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.mail)) {
        errors.mail = 'Email address is invalid';
    }

    if (!values.name) {
        errors.name = 'Name is required';
    }
    if (!values.subject) {
        errors.subject = 'Subject is required';
    }
    if (!values.message) {
        errors.message = 'Message is required';
    }

    return errors;
};

const postDataToSlack = (name, mail, subject, message) => {
    const slackData = {
        text: `Message from ${name} (${mail}) - subject: ${subject} - message: ${message}`,
        username: 'SiteNotification',
        icon_emoji: ':loud_sound:'
    };
    return axios.post(baseUrl, JSON.stringify(slackData), {
        withCredentials: false,
        transformRequest: [(data, headers) => {
            delete headers.post["Content-Type"]
            return JSON.stringify(slackData)
        }]
    });
};

export const useForm = (formValues = initialFormState) => {
    const [values, setValues] = useState(formValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            postDataToSlack(values.name, values.mail, values.subject, values.message)
                .then((response) => {
                    setSuccess(true);
                }, (error) => {
                    console.error(error);
                });
        }
    }, [errors, isSubmitting]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        success,
    }
};
