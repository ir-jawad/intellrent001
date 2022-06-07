import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

import '../assets/css/text-field.css';

const TextField = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Form.Group className="mb-3">
            <Form.Control className={`form-control form-field shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
            <ErrorMessage component='small' name={field.name} className='text-danger' />
        </Form.Group>
    )
}

export default TextField;